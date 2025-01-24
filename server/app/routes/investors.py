from fastapi import APIRouter, HTTPException
from app.services.investors import fetch_all_investors, fetch_investor_by_id
from app.models.investors import Investor

router = APIRouter()

@router.get("/", response_model=list[Investor])
async def get_investors(skip: int = 0, limit: int = 10):
    try:
        investors = fetch_all_investors()
        return investors[skip: skip + limit]
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to fetch investors")

@router.get("/{investor_id}", response_model=Investor)
async def get_investor_by_id(investor_id: str):
    investor = fetch_investor_by_id(investor_id)
    if not investor:
        raise HTTPException(status_code=404, detail="Investor not found")
    return investor
