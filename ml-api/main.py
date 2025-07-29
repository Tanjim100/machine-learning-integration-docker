# ml-api/main.py

from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

from fastapi.middleware.cors import CORSMiddleware


# Load the trained model
model = joblib.load("model.pkl")

# Create FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or specify: ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input data format
class InputData(BaseModel):
    size: float
    bedrooms: int


@app.get("/")
def read_root():
    return {"message": "Welcome to the Price Prediction API"}


# Define prediction route
@app.post("/predict")
def predict(data: InputData):
    print("Received in FastAPI:", data)
    input_features = [[data.size, data.bedrooms]]
    predicted_price = model.predict(input_features)[0]
    return {"predicted_price": round(predicted_price, 2)}