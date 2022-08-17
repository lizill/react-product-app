import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/common/HeaderComponent";
import MainComponent from "./components/main/MainComponent";
import CreateProduct from "./components/products/CreateProduct";
import ShowProduct from "./components/products/ShowProduct";
import FooterComponent from "./components/common/FooterComponent";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed w-full bg-white shadow">
        <HeaderComponent />
      </div>

      {/* contents */}
      <div className="flex-1 py-14">
        <div className="mx-auto my-0 max-w-6xl">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/products" element={<CreateProduct />} />
            <Route path="/products/:id" element={<ShowProduct />} />
          </Routes>
        </div>
      </div>

      <div className="bg-black">
        <div className="mx-auto my-0 max-w-6xl">
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
