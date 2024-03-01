import { FC, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./page/MenuPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

const App: FC = () => {
  const [shoppCartBool, setShoppCartBool] = useState<boolean>(false);
  return (
    <div className="nami">
      <Header shoppCartBool={shoppCartBool} setShoppCartBool={setShoppCartBool} />
      <Menu />
      <ShoppingCart shoppCartBool={shoppCartBool} setShoppCartBool={setShoppCartBool} />
    </div>
  );
};

export default App;
