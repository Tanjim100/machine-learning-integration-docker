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
- Loads a trained Linear Regression model (model.pkl)
- Accepts JSON input like { "size": 1200, "bedrooms": 3 }
- Predicts house price using scikit-learn

---



## 🚀 Getting Started

Follow these steps to get the project running on your local machine using Docker Compose.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/price-predictor.git
cd price-predictor
```

### 2. Build & Start with Docker Compose

```bash
docker-compose up --build
```

### 3. Open in Browser

* Frontend: [http://localhost:3000](http://localhost:3000)
* Node API: [http://localhost:5001/api/predict](http://localhost:5001/api/predict)
* ML API: [http://localhost:8000/predict](http://localhost:8000/predict)

---

## 🧪 Example Input

```json
{
  "size": 1500,
  "bedrooms": 3
}
```

✅ Response:

```json
{
  "predicted_price": 245000
}
```

---

## 📂 Folder Structure

```
project-root/
├── docker-compose.yml
├── ml-api/            # FastAPI + ML model
│   ├── main.py
│   ├── model.pkl
│   └── Dockerfile
├── node-api/          # Express server
│   ├── server.js
│   └── Dockerfile
└── react-frontend/    # React frontend with Vite
    ├── src/
    └── Dockerfile
```

---

## 📦 Tech Stack

| Layer      | Technology                     |
| ---------- | ------------------------------ |
| Frontend   | React, Vite, Tailwind, DaisyUI |
| Backend    | Node.js, Express, Axios        |
| ML API     | Python, FastAPI, scikit-learn  |
| Containers | Docker, Docker Compose         |

---

## 🧍 Who Is This For?

* 🧑‍💻 **Developers**: Learn to connect ML to full-stack apps
* 🧠 **Data Scientists**: See how to deploy models with FastAPI
* 👤 **Non-Tech Users**: Get instant house price estimates

---

## 💡 Example Use Case

> "I have a 1400 sq ft house with 3 bedrooms.
> What’s the estimated market value?"

This system provides an instant estimate powered by a real ML model.

---

## 🛠️ Troubleshooting

* ❗ Ensure ports `3000`, `5001`, and `8000` are not blocked
* 🔁 Use `docker-compose up --build` after code changes
* 🐳 If you're not using Docker Compose, change `ml-api:8000` to `localhost:8000` in your Node.js code

---

## 🔮 Future Ideas

* Add location & neighborhood factors
* Show prediction confidence or error margin
* Store input history in a database
* User accounts & dashboards

---

## 🧑‍🎓 Credits

Made with ❤️ by \[Tanjim Haider].

