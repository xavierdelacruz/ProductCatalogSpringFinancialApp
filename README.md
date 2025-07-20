# ProductCatalogSpringFinancialApp
Front end application to support the backend for Product Catalog searching

# 🛍️ Product Catalog Frontend

A simple React single-page application (SPA) that interacts with the Product Catalog backend API. It supports product browsing, searching, and pagination.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- npm (comes with Node.js)

---

## 🔧 Installation

1. **Clone the repository**

```
   git clone <your-repo-url>
   cd product-catalog-frontend
```
Install dependencies

```
npm install
```

▶️ Running the App

```
npm start
``` 

This will launch the app at http://localhost:3000

It connects to the backend API at:
https://localhost:7105/api/ProductCatalog

Make sure your backend is running on https://localhost:7105 before testing the frontend.

🔁 Features
🔍 Search products by name, brand, category, etc.
⏬ Paginate results with next/previous controls
📦 Live data fetched via axios from a .NET API
⚠️ Notes
If you see CORS errors, update your backend (.NET) to allow http://localhost:3000

To change the backend API URL, edit in App.js:
```
const API_BASE_URL = 'https://localhost:7105/api/ProductCatalog';
```

🧪 Scripts
```
npm run build      # Production build
npm run test       # Run tests (none yet)
npm run eject      # Eject configuration (optional)
```
