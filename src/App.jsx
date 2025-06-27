import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartModal from "./components/CartModal";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphone from "./pages/Earphone";
import Checkout from "./pages/Checkout";
import XX99MarkTwoProduct from "./pages/XX99MarkTwoProduct";
import XX99MarkOneProduct from "./pages/XX99MarkOneProduct";
import XX59Product from "./pages/XX59Product";
import ZX9SpeakerProduct from "./pages/ZX9SpeakerProduct";
import ZX7SpeakerProduct from "./pages/ZX7SpeakerProduct";
import YX1EarphonesProduct from "./pages/YX1EarphonesProduct";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/earphones" element={<Earphone />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/product/xx99-mark-two-headphones"
              element={<XX99MarkTwoProduct />}
            />
            <Route
              path="/product/xx99-mark-one-headphones"
              element={<XX99MarkOneProduct />}
            />
            <Route path="/product/xx59-headphones" element={<XX59Product />} />
            <Route
              path="/product/zx9-speaker"
              element={<ZX9SpeakerProduct />}
            />
            <Route
              path="/product/zx7-speaker"
              element={<ZX7SpeakerProduct />}
            />
            <Route
              path="/product/yx1-earphones"
              element={<YX1EarphonesProduct />}
            />
          </Routes>
          <CartModal />
        </div>
      </Router>
    </CartProvider>
  );
}
