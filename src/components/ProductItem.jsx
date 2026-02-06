import "./Product.css";

function ProductItem({ productId, productName, price, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={productName} />
      <h3>{productName}</h3>
      <p><strong>ID:</strong> {productId}</p>
      <p><strong>Precio:</strong> ${price}</p>
    </div>
  );
}

export default ProductItem;
