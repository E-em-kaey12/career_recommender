from fastapi import APIRouter
from backend.models import StudentFieldRequest
from backend.utils.matching import load_json, match_field
from backend.core.config import settings

router = APIRouter()
field_rules = load_json(settings.FIELD_RULES_PATH)

@router.post("/field-filter")
def field_filter(req: StudentFieldRequest):
    matches = match_field(req.subjects, field_rules)
    return {
        "student": req.name,
        "recommended_fields": matches or ["No match"]
    }
