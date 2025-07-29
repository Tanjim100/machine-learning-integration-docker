import { useState } from "react";

export default function Predict() {
  const [formData, setFormData] = useState({ size: "", bedrooms: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5001/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        size: parseFloat(formData.size),
        bedrooms: parseInt(formData.bedrooms)
      })
    });
    const data = await res.json();
    setResult(data.predicted_price);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form className="card bg-base-200 p-6 space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">Enter Property Info</h2>

        <input
          type="number"
          name="size"
          placeholder="Size (sqft)"
          className="input input-bordered w-full"
          value={formData.size}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          className="input input-bordered w-full"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-full">Get Prediction</button>

        {result !== null && (
          <div className="alert alert-success mt-4">
            Predicted Price: <strong>${result}</strong>
          </div>
        )}
      </form>
    </div>
  );
}
