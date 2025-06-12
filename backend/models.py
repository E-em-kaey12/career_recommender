from pydantic import BaseModel
from typing import List

class StudentFieldRequest(BaseModel):
    name: str
    subjects: List[str]

class DisciplineRequest(BaseModel):
    fields: List[str]
    interests: List[str]

class CourseRequest(BaseModel):
    fields: List[str]
    disciplines: List[str]