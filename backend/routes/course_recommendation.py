from fastapi import APIRouter
from backend.models import CourseRequest
from backend.utils.matching import load_json, get_grouped_courses
from backend.core.config import settings

router = APIRouter()

# Load the course similarity data
course_data = load_json(settings.COURSE_SIMILARITY_PATH)

@router.post("/course-recommendation")
def course_recommendation(req: CourseRequest):
    if not req.fields or not req.disciplines:
        return {
            "grouped_recommendations": []
        }

    grouped = get_grouped_courses(req.disciplines, course_data)

    return {
        "grouped_recommendations": grouped or []
    }