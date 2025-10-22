import React from "react";
import ProductForm from "../components/productForm";
import { useProducts } from "../hooks/useProducts"
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  async function handleSubmit(form) {
    await addProduct(form);
    navigate("/");
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <ProductForm onSubmit={handleSubmit} submitLabel="Create" />
    </div>
  );
}
