import React from "react";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { products, loading, error, removeProduct } = useProductContext();
  const navigate = useNavigate();

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          onClick={() => navigate("/add")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            onEdit={() => navigate(`/edit/${p._id}`)}
            onDelete={() => removeProduct(p._id)}
          />
        ))}
      </div>
    </div>
  );
}
