export default function Button({ children, variant='primary', onClick, className='' }) {
  const base = "px-4 py-2 rounded-md font-medium transition-transform active:scale-95";
  const styles = {
    primary: "bg-sky-600 text-white hover:bg-sky-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
