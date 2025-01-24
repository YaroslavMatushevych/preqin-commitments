from pydantic import BaseModel
from app.models.commitments import Commitment
from typing import List

class Investor(BaseModel):
    id: str
    name: str
    type: str
    country: str
    date_added: str
    total_commitment: float
    commitments: List[Commitment]
    currency: str