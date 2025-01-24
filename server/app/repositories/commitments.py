from app.models.investors import Commitment
from app.shared_state import DataStore

def get_commitments_by_investor(investor_id: str) -> list[Commitment]:
    investors = DataStore.get_data()
    investor = investors.get(investor_id)
    
    if investor:
        return investor.commitments
    return []
