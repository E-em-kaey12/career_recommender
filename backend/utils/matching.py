import json

def load_json(path):
    with open(path, "r") as f:
        return json.load(f)

def match_field(subjects, field_rules):
    matches = []
    for field, rule in field_rules.items():
        required = rule.get("required_subjects", [])
        if all(sub in subjects for sub in required):
            matches.append(field)
    return matches

def match_discipline(fields, interests, discipline_rules):
    found_disciplines = set()
    interest_tokens = [i.lower().strip() for i in interests]

    for field in fields:
        field_disciplines = discipline_rules.get(field, {})
        for discipline, entry in field_disciplines.items():
            keywords = [k.lower().strip() for k in entry.get("keywords", [])]
            if any(kw in interest_tokens or any(i in kw for i in interest_tokens) for kw in keywords):
                found_disciplines.add(discipline)

    return list(found_disciplines)

def get_grouped_courses(disciplines, course_data):
    grouped = []
    for field, discipline_group in course_data.items():
        for discipline, courses in discipline_group.items():
            if discipline in disciplines:
                grouped.append({
                    "discipline": discipline,
                    "courses": courses
                })
    return grouped