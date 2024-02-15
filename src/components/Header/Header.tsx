import { FC } from "react";
import "./Header.scss";
import logo from "./image/logo.png";
import PhoneSVG from "../../svg/Phone";
import ShoppingCartSVG from "../../svg/ShoppingCart";
import Dot from "../../svg/Dot";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-content-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="header-content-ul">
            <li className="header-li paragraph">Меню</li>
            <span className="header-dot">
              <Dot />
            </span>
            <li className="header-li paragraph">Доставка</li>
            <span className="header-dot">
              <Dot />
            </span>
            <li className="header-li paragraph">Акции</li>
            <span className="header-dot">
              <Dot />
            </span>
            <li className="header-li paragraph">Отзывы</li>
            <span className="header-dot">
              <Dot />
            </span>
            <li className="header-li paragraph">Контакты</li>
          </ul>
          <div className="header-content-buttons">
            <div className="header-content-phone">
              <PhoneSVG />
            </div>
            <div className="header-content-shop">
              <ShoppingCartSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;