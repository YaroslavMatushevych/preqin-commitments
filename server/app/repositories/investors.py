from app.config.settings import settings
from app.models.investors import Investor
from fastapi import Depends
from app.shared_state import DataStore

def get_all_investors():
    return list(DataStore.get_data().values())

def get_investor_by_id(investor_id: str):
    return DataStore.get_data().get(investor_id)
