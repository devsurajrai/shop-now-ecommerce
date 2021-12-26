import "./App.css";
import HomePage from "./pages/homepages/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../src/components/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
