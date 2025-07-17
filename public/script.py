import json


with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)


for region in data["Regions"]:
    for card in region["cards"]:
        if "image" not in card:
            card["image"] = ""  


with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

