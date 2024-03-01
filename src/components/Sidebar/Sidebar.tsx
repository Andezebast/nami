import { FC, useState } from "react";
import "./Sidebar.scss";
import Roll from "../../svg/Roll";
import Sushi from "../../svg/Sushi";
import Sashimi from "../../svg/Sashimi";
import HandRoll from "../../svg/HandRoll";
import { IProduct } from "../../models/IProduct";

interface ISidebarProps {
  data: IProduct[];
  setCurrentData: Function;
}
const Sidebar: FC<ISidebarProps> = ({ data, setCurrentData }) => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const [activeLi, setActiveLi] = useState<string>("All");

  const handleEventLi = (id: string) => {
    setActiveLi(id);
    if (id === "All") {
      setCurrentData(data);
      return;
    }
    setCurrentData(data.filter((product) => product.category === id));
  };
  return (
    <div
      className={`sidebar ${sidebarActive ? "show" : ""}`}
      onMouseOver={() => setSidebarActive(true)}
      onMouseOut={() => setSidebarActive(false)}
    >
      <ul className="sidebar-ul">
        <li
          className={`sidebar-ul-li ${activeLi === "All" ? "active" : ""}`}
          id="All"
          onClick={(e) => handleEventLi(e.currentTarget.id)}
        >
          <p className="text-3xl">Всі категорії</p>
        </li>
        <li
          className={`sidebar-ul-li ${activeLi === "Roll" ? "active" : ""}`}
          id="Roll"
          onClick={(e) => handleEventLi(e.currentTarget.id)}
        >
          <Roll />
          <p className="text-3xl">Роли</p>
        </li>
        <li
          className={`sidebar-ul-li ${activeLi === "HandRoll" ? "active" : ""}`}
          id="HandRoll"
          onClick={(e) => handleEventLi(e.currentTarget.id)}
        >
          <HandRoll />
          <p className="text-3xl">Ручні роли</p>
        </li>
        <li
          className={`sidebar-ul-li ${activeLi === "Sushi" ? "active" : ""}`}
          id="Sushi"
          onClick={(e) => handleEventLi(e.currentTarget.id)}
        >
          <Sushi />
          <p className="text-3xl">Суші</p>
        </li>
        <li
          className={`sidebar-ul-li ${activeLi === "Sashimi" ? "active" : ""}`}
          id="Sashimi"
          onClick={(e) => handleEventLi(e.currentTarget.id)}
        >
          <Sashimi />
          <p className="text-3xl">Сашимі</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
