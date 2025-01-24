from uuid import uuid4
from app.models.commitments import Commitment
from app.models.investors import Investor
import aiofiles
import csv

async def load_data_async(data_path: str) -> dict:
    investors = {}

    async with aiofiles.open(data_path, mode="r") as file:
        content = await file.read()
        reader = csv.DictReader(content.splitlines())

        for row in reader:
            investor_name = row["Investor Name"].strip()
            investor_type = row["Investory Type"]
            investor_country = row["Investor Country"]
            asset_class = row["Commitment Asset Class"]
            commitment_amount = float(row["Commitment Amount"])
            commitment_currency = row["Commitment Currency"]

            # Generate a unique ID for each investor
            investor_id = investors.get(investor_name, {}).get("id", str(uuid4()))
            if investor_id not in investors:
                investors[investor_id] = {
                    "id": investor_id,
                    "name": investor_name,
                    "type": investor_type,
                    "country": investor_country,
                    "commitments": [],
                    "currency": commitment_currency,
                    "date_added": row["Investor Date Added"].strip(),
                }

            # Add commitment with a unique ID
            investors[investor_id]["commitments"].append(
                Commitment(
                    id=str(uuid4()),
                    asset_class=asset_class,
                    amount=commitment_amount,
                    currency=commitment_currency,
                )
            )

    # Calculate total_commitment for each investor
    return {
        investor_id: Investor(
            id=investor_id,
            name=data["name"],
            type=data["type"],
            country=data["country"],
            date_added=data["date_added"],
            total_commitment=sum(c.amount for c in data["commitments"]),
            commitments=data["commitments"],
            currency=data["currency"],
        )
        for investor_id, data in investors.items()
    }
