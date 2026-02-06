import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products] = useState([
    {
      productId: 1,
      productName: "Laptop HP",
      price: 850,
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      productId: 2,
      productName: "Mouse Gamer",
      price: 35,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSpWrfdQ7C-lJU9OBN25bqwj3-Fkhk8YCZg&s"
    },
    {
      productId: 3,
      productName: "Teclado Mecánico",
      price: 75,
      imageUrl: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
    },
    {
      productId: 4,
      productName: "Monitor 24\"",
      price: 220,
      imageUrl: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc"
    },
    {
      productId: 5,
      productName: "Auriculares",
      price: 50,
      imageUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b"
    },
    {
      productId: 6,
      productName: "Smartphone",
      price: 600,
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      productId: 7,
      productName: "Tablet",
      price: 300,
      imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
    },
    {
      productId: 8,
      productName: "Impresora",
      price: 180,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6kgEz1kgVuV8vPeC51jf2V-7b6Jy9qFBkA&s"
    },
    {
      productId: 9,
      productName: "Webcam",
      price: 40,
      imageUrl: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c"
    },
    {
      productId: 10,
      productName: "Disco SSD",
      price: 120,
      imageUrl: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    }
  ]);

  return (
    <div>
      <h1>Tienda Virtual</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
