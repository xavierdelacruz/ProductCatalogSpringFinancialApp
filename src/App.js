import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7105/api/ProductCatalog';

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastSearch, setLastSearch] = useState('');

  const fetchProducts = async (search, pageNum) => {
    setLoading(true);
    try {
      const endpoint = search
        ? `${API_BASE_URL}/search?query=${encodeURIComponent(search)}&page=${pageNum}`
        : `${API_BASE_URL}?page=${pageNum}`;

      const response = await axios.get(endpoint);
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(lastSearch, page);
  }, [page]);

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      setPage(1);
      setLastSearch(query);
      fetchProducts(query, 1);
    }
  };

  const handleSearchClick = () => {
    setPage(1);
    setLastSearch(query);
    fetchProducts(query, 1);
  };

  const generateProducts = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/generate?count=1000`);
      fetchProducts(lastSearch, page);
    } catch (error) {
      console.error('Failed to generate products:', error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Product Catalog</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearchKeyPress}
          style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
        />
        <button onClick={handleSearchClick} style={{ marginRight: '0.5rem' }}>
          Search
        </button>
        <button onClick={generateProducts}>Generate 1000 Products</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {products.map((product) => (
            <li key={product.id} style={{ marginBottom: '1rem' }}>
              <strong>{product.name}</strong> — {product.brand} <br />
              <em>{product.category}</em>: ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
          Prev
        </button>
        <span style={{ margin: '0 1rem' }}>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default App;