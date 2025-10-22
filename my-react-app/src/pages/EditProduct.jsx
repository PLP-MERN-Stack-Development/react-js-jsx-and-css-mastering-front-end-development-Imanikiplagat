import React, { useEffect, useState } from "react";
import ProductForm from "../components/productForm";
import { useProductContext } from "../context/productContext"; // ✅ use context instead of hook
import { useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const { products, updateProduct } = useProductContext(); // ✅ from context, not hook
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const product = products.find((p) => p._id === id);
    if (product) setInitialData(product);
  }, [products, id]);

  const handleSubmit = async (form) => {
    await updateProduct(id, form);
    navigate("/");
  };

  if (!initialData) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
      <ProductForm
        onSubmit={handleSubmit}
        submitLabel="Update"
        initialData={initialData}
      />
    </div>
  );
}
