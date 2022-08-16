import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/common/HeaderComponent";
import MainComponent from "./components/main/MainComponent";
import CreateProduct from "./components/products/CreateProduct";
import ShowProduct from "./components/products/ShowProduct";

const App = () => {
  return (
    <div>
      <HeaderComponent />

      {/* contents */}
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/products" element={<CreateProduct />} />
        <Route path="/products/:id" element={<ShowProduct />} />
      </Routes>

      {/* footer */}
      <div>footer area</div>
    </div>
  );
};

export default App;
