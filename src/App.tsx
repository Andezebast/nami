import { FC } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Menu from "./page/MenuPage";
import Sidebar from "./components/Sidebar/Sidebar";

const App: FC = () => {
  return (
    <div className="nami">
      <Header />
      <div className="nami-content">
        <Sidebar />
        <Menu />
      </div>
    </div>
  );
};

export default App;
