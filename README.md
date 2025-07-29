# 🏠 Real Estate Price Predictor

A complete, Dockerized web application that lets users input property details (like size and bedrooms) and receive an estimated house price using a trained machine learning model.

---

## 🌐 Live Demo

This system runs across **three microservices**:

- 🎨 Frontend: React + Tailwind + DaisyUI
- 🌐 Backend: Node.js (Express)
- 🧠 ML Prediction API: Python (FastAPI + scikit-learn)

All services are containerized using Docker and connected with Docker Compose.

---

## 📌 What This Project Does

This project helps users:

1. Input house details via a simple form
2. Sends those inputs to a Node.js backend
3. Node forwards the request to a FastAPI ML service
4. ML model returns a **predicted price** instantly
5. User sees the estimated value on the frontend

---

## 🔧 System Overview

```plaintext
+---------------------+
|   React Frontend    |  --> Form submission
| (localhost:3000)    |
+----------+----------+
           |
           v
+----------+----------+
|   Node.js API        |
| (localhost:5001)     | --> Forwards data
+----------+----------+
           |
           v
+----------+----------+
|  FastAPI ML Backend |
| (localhost:8000)    | --> Returns price prediction
+---------------------+

```

## 🧠 How It Works
### 1. Frontend – React + Tailwind + DaisyUI
- Built with Vite
- Uses React Router for routing
- Tailwind + DaisyUI for UI
- Calls backend /api/predict with house details

### 2. Node.js Backend – Express
- Handles API route: /api/predict
- Forwards input to FastAPI ML service
- Returns the response to the frontend

### 3. FastAPI – ML Model
-Loads a trained Linear Regression model (model.pkl)
-Accepts JSON input like { "size": 1200, "bedrooms": 3 }
-Predicts house price using scikit-learn

## 🚀 Getting Started

Follow these steps to get the project running on your local machine using Docker Compose.

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/price-predictor.git
cd price-predictor
```

### 2. Build & Start with Docker Compose

```bash
docker-compose up --build
```
