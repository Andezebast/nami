import { FC, useState } from "react";
import "./Sidebar.scss";
import Roll from "./image/roll.png";
import HandRoll from "./image/hand-roll.png";
import Sushi from "./image/sushi.png";
import Sashumi from "./image/sashumi.png";

const Sidebar: FC = () => {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  return (
    <div
      className={`sidebar ${sidebarActive ? "show" : ""}`}
      onMouseOver={() => setSidebarActive(true)}
      onMouseOut={() => setSidebarActive(false)}
    >
      <ul className="sidebar-ul">
        <li className="sidebar-ul-li">
          <img src={Roll} alt="roll" />
          <p className="tabs">Роли</p>
        </li>
        <li className="sidebar-ul-li">
          <img src={HandRoll} alt="hand roll" />
          <p className="tabs">Ручні роли</p>
        </li>
        <li className="sidebar-ul-li">
          <img src={Sushi} alt="Sushi" />
          <p className="tabs">Суші</p>
        </li>
        <li className="sidebar-ul-li">
          <img src={Sashumi} alt="Sashumi" />
          <p className="tabs">Сашимі</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
