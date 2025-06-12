from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.core.config import settings

from backend.routes import field_filter, discipline_filter, course_recommendation

app = FastAPI(title=settings.PROJECT_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # adjust to your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(field_filter.router)
app.include_router(discipline_filter.router)
app.include_router(course_recommendation.router)
