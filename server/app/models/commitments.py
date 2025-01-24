from pydantic import BaseModel

class Commitment(BaseModel):
    id: str
    asset_class: str
    amount: float
    currency: str
