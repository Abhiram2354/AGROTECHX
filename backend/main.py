from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# AI VOICE QUESTION SYSTEM
# -------------------------------

class Question(BaseModel):
    question: str

@app.post("/ask")
def ask_ai(q: Question):

    text = q.question.lower()

    if "rice" in text:
        answer = "Rice grows best in clay soil with plenty of water."

    elif "fertilizer" in text:
        answer = "Use nitrogen rich fertilizer for better crop growth."

    elif "pest" in text:
        answer = "Use neem oil spray to control pests naturally."

    elif "wheat" in text:
        answer = "Wheat grows well in loamy soil with moderate water."

    elif "tomato" in text:
        answer = "Tomatoes require well-drained soil and plenty of sunlight."

    elif "water" in text:
        answer = "Most crops need regular irrigation but avoid waterlogging."

    else:
        answer = "Please consult a local agriculture expert."

    return {"answer": answer}


# -------------------------------
# PLANT DISEASE DETECTION
# -------------------------------

diseases = [

    {
        "disease": "Tomato Early Blight",
        "severity": "Medium",
        "treatment": "Spray Neem Oil every 7 days",
        "confidence": "94%"
    },

    {
        "disease": "Potato Late Blight",
        "severity": "High",
        "treatment": "Remove infected leaves and apply fungicide",
        "confidence": "96%"
    },

    {
        "disease": "Leaf Spot",
        "severity": "Low",
        "treatment": "Apply copper fungicide spray",
        "confidence": "92%"
    },

    {
        "disease": "Powdery Mildew",
        "severity": "Medium",
        "treatment": "Spray baking soda solution",
        "confidence": "90%"
    }

]


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    # Simulate AI prediction
    result = random.choice(diseases)

    return result