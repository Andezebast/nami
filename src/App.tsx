import { FC } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./page/MenuPage";

const App: FC = () => {
  return (
    <div className="nami">
      <Header />
      <Menu />
    </div>
  );
};

export default App;
