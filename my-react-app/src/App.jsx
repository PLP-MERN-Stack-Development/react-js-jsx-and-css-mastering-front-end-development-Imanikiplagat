import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/productContext"; // or wherever your hook is used
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/customCursor";

function App() {
  return (
    <ProductProvider>     
      <Router>
        <Navbar />
        <CustomCursor />
        <Routes>
         
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
