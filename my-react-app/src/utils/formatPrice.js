// src/utils/formatPrice.js

export function formatPrice(price) {
  if (price == null || isNaN(price)) return "Ksh 0.00";
  return `Ksh ${Number(price).toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
