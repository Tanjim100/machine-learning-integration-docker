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
