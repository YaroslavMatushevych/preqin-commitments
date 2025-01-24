from app.repositories.commitments import get_commitments_by_investor
from app.models.commitments import Commitment

def fetch_commitments_by_investor(investor_id: str, asset_class: str = None) -> list[Commitment]:
    commitments = get_commitments_by_investor(investor_id)

    if asset_class:
        commitments = [c for c in commitments if c.asset_class == asset_class]
    return commitments
