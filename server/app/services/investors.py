from app.repositories.investors import get_all_investors, get_investor_by_id
from app.models.investors import Investor

def fetch_all_investors() -> list[Investor]:
    investors = get_all_investors()
    return investors


def fetch_investor_by_id(id: str):
    return get_investor_by_id(id)
