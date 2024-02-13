import "./MenuPage.scss";
import Products from "../components/Products/Products";

function MenuPage() {
  return (
    <div className="menu page">
      <div className="container">
        <div className="menu-title title">Меню</div>
        <div className="menu-products">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
