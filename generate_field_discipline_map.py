import json

# Load discipline_rules.json
with open("backend/core/discipline_rules.json", "r") as file:
    discipline_data = json.load(file)

# Generate field_discipline_map
field_discipline_map = {field: list(disciplines.keys()) for field, disciplines in discipline_data.items()}

# Save to field_discipline_map.json
with open("backend/core/field_discipline_map.json", "w") as out_file:
    json.dump(field_discipline_map, out_file, indent=2)

print("✅ field_discipline_map.json generated successfully.")