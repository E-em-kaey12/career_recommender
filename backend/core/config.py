from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Career Recommender"
    API_PREFIX: str = "/api"

    COURSE_SIMILARITY_PATH: str = "backend/core/course_similarity.json"
    DISCIPLINE_RULES_PATH: str = "backend/core/discipline_rules.json"
    FIELD_RULES_PATH: str = "backend/core/field_rules.json"
    FIELD_DISCIPLINE_MAP_PATH: str = "backend/core/field_discipline_map.json"

settings = Settings()