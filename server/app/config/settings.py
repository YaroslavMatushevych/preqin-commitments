from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DATA_PATH: str = "data/data.csv"
    ALLOWED_ORIGINS: list[str] = ["*"]  # Replace with specific origins in production

    class Config:
        env_file = ".env"
        extra = "ignore"  # Ignore unexpected fields like dataset_url and result_url

settings = Settings()