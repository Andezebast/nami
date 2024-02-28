import { FC } from "react";
import "./Header.scss";
import logo from "./image/logo.png";
import PhoneSVG from "../../svg/Phone";
import ShoppingCartSVG from "../../svg/ShoppingCart";
import Dot from "../../svg/Dot";

interface IHeaderProps {
  shoppCartBool: boolean;
  setShoppCartBool: Function;
}

const Header: FC<IHeaderProps> = ({ shoppCartBool, setShoppCartBool }) => {
  const handleShoppingCartEvent = () => {
    setShoppCartBool(!shoppCartBool);
    const body = document.querySelector("body");
    body?.classList.add("hidden");
  };
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-content-logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="header-content-ul">
            <li className="header-li text-base">Меню</li>
            <span className="header-dot">
              <Dot />
            </span>
            <li className="header-li text-base">Доставка</li>
            <span className="header-dot">
              <Dot />
            </span>
            <li className="header-li text-base">Акции</li>
            <span className="header-dot">
              <Dot />
            </span>
            <li className="header-li text-base">Отзывы</li>
            <span className="header-dot">
              <Dot />
            </span>
            <li className="header-li text-base">Контакты</li>
          </ul>
          <div className="header-content-buttons">
            <div className="header-content-phone">
              <PhoneSVG />
            </div>
            <div
              className="header-content-shop"
              onClick={handleShoppingCartEvent}
            >
              <ShoppingCartSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
