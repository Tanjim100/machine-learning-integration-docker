import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import joblib
import random

# Generate synthetic dataset
def generate_data(num_samples=100):
    data = {
        "size": [],
        "bedrooms": [],
        "price": []
    }

    for _ in range(num_samples):
        size = random.randint(800, 2000)  # size in sq ft
        bedrooms = random.randint(2, 5)

        # Base price calculation
        base_price = size * 150 + bedrooms * 10000

        # Add random noise to price
        noise = random.randint(-10000, 10000)
        price = base_price + noise

        data["size"].append(size)
        data["bedrooms"].append(bedrooms)
        data["price"].append(price)

    return pd.DataFrame(data)

# Generate and save dataset
df = generate_data()
df.to_csv("data.csv", index=False)
print("✅ data.csv generated with 100 samples.")

# Train the model
X = df[["size", "bedrooms"]]
y = df["price"]

model = LinearRegression()
model.fit(X, y)

# Save the model
joblib.dump(model, "model.pkl")
print("✅ model.pkl saved.")
