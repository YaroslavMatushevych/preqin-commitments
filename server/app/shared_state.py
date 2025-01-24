# shared_state.py
# shared_state.py
import threading

class DataStore:
    _data = {}
    _lock = threading.Lock()

    @classmethod
    def set_data(cls, data: dict):
        with cls._lock:
            cls._data = data

    @classmethod
    def get_data(cls) -> dict:
        with cls._lock:
            return cls._data
