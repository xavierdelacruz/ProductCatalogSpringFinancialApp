
# Product Catalog Frontend
A simple React single-page application (SPA) that interacts with the Product Catalog backend API. It supports product browsing, searching, and pagination.

---

## Getting Started

1. Prerequisites
- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- npm (comes with Node.js)
- Visual Studio Code (or similar)


2. Installation
- Clone the repository
```
git clone https://github.com/xavierdelacruz/ProductCatalogSpringFinancialApp.git
```
- Navigate to the project using your desired code editor

- Install dependencies
```
npm install
```

3. Running the App
- Run this command at the project directory
```
npm start
``` 
- This will launch the app at ```http://localhost:3000```

- It connects to the backend API at:
```https://localhost:7105/api/ProductCatalog```

- Make sure your backend is running on https://localhost:7105 before testing the frontend.

## Features
- Search products by name, brand, category, etc.
- Paginate results with next/previous controls
- Live data fetched via axios from the associated .NET backend API created for this challenge

## Notes:
If you see CORS errors, update your backend (.NET) to allow http://localhost:3000 if it is not already configured.

To change the backend API URL, edit in App.js:
```
const API_BASE_URL = 'https://localhost:7105/api/ProductCatalog';
```