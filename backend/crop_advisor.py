def suggest_crop(soil, temperature, rainfall):
    soil = soil.lower()

    if soil == "black" and temperature > 25:
        return {
            "crop": "Cotton",
            "advice": "Use drip irrigation and nitrogen fertilizer."
        }
    elif soil == "red":
        return {
            "crop": "Groundnut",
            "advice": "Ensure proper drainage."
        }
    else:
        return {
            "crop": "Rice",
            "advice": "Maintain standing water in field."
        }