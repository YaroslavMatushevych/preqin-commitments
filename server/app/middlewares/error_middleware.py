from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError, HTTPException

def add_error_handling(app: FastAPI):
    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request: Request, exc: RequestValidationError):
        return JSONResponse(
            status_code=422,
            content={"error": "Validation error", "details": exc.errors(), "body": exc.body},
        )

    @app.exception_handler(HTTPException)
    async def http_exception_handler(request: Request, exc: HTTPException):
        return JSONResponse(
            status_code=exc.status_code,
            content={"error": exc.detail},
        )

    @app.middleware("http")
    async def custom_error_handling_middleware(request: Request, call_next):
        try:
            response = await call_next(request)
            return response
        except Exception:
            return JSONResponse(
                status_code=500,
                content={"error": "Internal Server Error", "details": "An unexpected error occurred."},
            )
