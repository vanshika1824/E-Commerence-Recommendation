import { useEffect, useState } from "react";
import API from "./services/api";
import ProductCard from "./components/ProductCard";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    API.get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div style={{ padding: "40px" }}>

      <h1
        style={{
          fontSize: "40px",
          marginBottom: "30px",
        }}
      >
        AI Product Recommendation App
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>
    </div>
  );
}

export default App;