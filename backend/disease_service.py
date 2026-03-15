from PIL import Image
import numpy as np

def predict_disease(image: Image.Image):
    img = image.resize((128, 128))
    arr = np.array(img)
    avg_color = arr.mean()

    if avg_color < 100:
        return {
            "disease": "Leaf Blight",
            "severity": "High",
            "advice": "Use organic fungicide spray every 7 days."
        }
    else:
        return {
            "disease": "Healthy",
            "severity": "None",
            "advice": "No action needed."
        }