from fastapi import APIRouter, HTTPException
from app.services.commitments import fetch_commitments_by_investor
from app.models.investors import Commitment

router = APIRouter()

@router.get("/{investor_id}", response_model=list[Commitment])
async def get_commitments(investor_id: str, asset_class: str = None):
    try:
        commitments = fetch_commitments_by_investor(investor_id, asset_class)
        if not commitments:
            raise HTTPException(status_code=404, detail="No commitments found for this investor")
        return commitments
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to fetch commitments")
