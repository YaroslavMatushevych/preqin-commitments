from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.investors import router as investors_router
from app.routes.commitments import router as commitments_router
from app.utils.data_loader import load_data_async
from app.config.settings import settings
from app.middlewares.errorMiddleware import add_error_handling
from app.shared_state import DataStore

# Initialize FastAPI app
app = FastAPI()

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load data at startup
@app.on_event("startup")
async def load_data():
    data = await load_data_async(settings.DATA_PATH)
    DataStore.set_data(data)  # Set the shared state

# Add error handling middleware
add_error_handling(app)

# Include routers
app.include_router(investors_router, prefix="/investors", tags=["Investors"])
app.include_router(commitments_router, prefix="/commitments", tags=["Commitments"])

# Run the server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=settings.HOST, port=settings.PORT)