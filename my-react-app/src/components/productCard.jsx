import React from "react";

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">${product.price}</p>
      <div className="mt-2 flex justify-between items-center">
        <button onClick={() => onEdit(product)} className="px-3 py-1 border rounded text-sm">
          Edit
        </button>
        <button onClick={() => onDelete(product._id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}
