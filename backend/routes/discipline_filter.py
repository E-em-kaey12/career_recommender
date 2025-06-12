from fastapi import APIRouter
from backend.models import DisciplineRequest
from backend.utils.matching import load_json, match_discipline
from backend.core.config import settings

router = APIRouter()
discipline_rules = load_json(settings.DISCIPLINE_RULES_PATH)

@router.post("/discipline-filter")
def discipline_filter(req: DisciplineRequest):
    matches = match_discipline(req.fields, req.interests, discipline_rules)
    return {
        "recommended_disciplines": matches or ["No discipline match"]
    }
