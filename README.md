# 🛍️ Product Recommendation System

An AI-powered E-commerce Product Recommendation Web Application built using **FastAPI**, **React**, and **Machine Learning**.

This project recommends similar products using content-based filtering and cosine similarity.

---

# 🚀 Features

✅ Product Recommendation Engine  
✅ Product Search Functionality  
✅ FastAPI REST API  
✅ React Frontend  
✅ Machine Learning Based Suggestions  
✅ Responsive Product Cards  
✅ Full Stack Architecture  
✅ Deployable on Render & Vercel  

---

# 🧠 Machine Learning Used

This project uses:

- Content-Based Filtering
- TF-IDF Vectorization
- Cosine Similarity

Libraries used:
- Pandas
- Scikit-learn

---

# 🛠️ Tech Stack

## Frontend
- React
- Vite
- Axios

## Backend
- FastAPI
- Python
- Pandas
- Scikit-learn
- Uvicorn

---

# 📁 Project Structure

```bash
E-commerce-Recommendation/
│
├── backend/
│   │
│   ├── data/
│   │   └── products.csv
│   │
│   ├── routes/
│   │   └── recommendation.py
│   │
│   ├── services/
│   │   └── recommender.py
│   │
│   ├── main.py
│   ├── requirements.txt
│   └── .gitignore
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Backend Setup

## 1️⃣ Go to backend folder

```bash
cd backend
```

---

## 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

---

## 3️⃣ Activate Virtual Environment

### Windows CMD

```bash
venv\Scripts\activate
```

### PowerShell

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned

.\venv\Scripts\Activate.ps1
```

---

## 4️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 5️⃣ Run Backend Server

```bash
uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

Swagger API Docs:

```bash
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Setup

## 1️⃣ Open New Terminal

```bash
cd frontend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔗 API Endpoints

## Home Route

```http
GET /
```

---

## Get All Products

```http
GET /products
```

---

## Search Products

```http
GET /search?query=laptop
```

---

## Get Recommendations

```http
GET /recommend/1
```

---

# 🌐 Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render

---

# 🔮 Future Improvements

- User Authentication
- Wishlist Feature
- Personalized Recommendations
- AI Chatbot Assistant
- Product Rating System
- Price Comparison System

---

# 👩‍💻 Author

**Vanshika Maru**

---

