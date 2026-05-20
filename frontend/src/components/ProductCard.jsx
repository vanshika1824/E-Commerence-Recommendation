function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h2>{product.name}</h2>

      <p>{product.category}</p>

      <h3>₹{product.price}</h3>
    </div>
  );
}

export default ProductCard;