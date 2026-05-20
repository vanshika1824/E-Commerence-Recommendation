import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "http://127.0.0.1:8000";

  // Fetch Products
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Fetch Recommendations
  const getRecommendations = async (id, name) => {
    setLoading(true);
    setSelectedProduct(name);

    try {
      const res = await axios.get(`${API}/recommend/${id}`);
      setRecommendations(res.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🛍️ Product Recommendation App</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>

            <p>{product.category}</p>

            <h3>₹{product.price}</h3>

            <button
              onClick={() =>
                getRecommendations(product.id, product.name)
              }
            >
              Show Recommendations
            </button>
          </div>
        ))}
      </div>

      {/* Recommendation Section */}

      {loading && <h2>Loading recommendations...</h2>}

      {recommendations.length > 0 && (
        <>
          <h2 className="recommend-title">
            Recommended Products for {selectedProduct}
          </h2>

          <div className="products-grid">
            {recommendations.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <h2>{item.name}</h2>

                <p>{item.category}</p>

                <h3>₹{item.price}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;