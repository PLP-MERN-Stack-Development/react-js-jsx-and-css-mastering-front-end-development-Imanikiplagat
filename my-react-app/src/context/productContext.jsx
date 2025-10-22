import React, { createContext, useContext } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    removeProduct,
  } = useProducts();

  return (
    <ProductContext.Provider
      value={{ products, loading, error, addProduct, updateProduct, removeProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// ✅ Custom hook to use context
export function useProductContext() {
  return useContext(ProductContext);
}
