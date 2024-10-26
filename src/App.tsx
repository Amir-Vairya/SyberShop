import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Store from "./Pages/Store/Store";
import LayOut from "./Components/layout/LayOut";
import ProductPage from "./Pages/productPage/ProductPage";
import ShopCart from "./Pages/shopcart/ShopCart";
import { ShoppingCartProvider } from "./context/ShopingCartContext";
import LoginPage from "./Pages/login/LoginPage";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <LayOut>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/shopCart" element={<ShopCart />} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </LayOut>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
