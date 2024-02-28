import { FC, Fragment } from "react";
import "./ShoppingCart.scss";
import { useAppSelector } from "../../hooks/redux";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";

interface IShoppingCartProps {
  shoppCartBool: boolean;
  setShoppCartBool: Function;
}

const ShoppingCart: FC<IShoppingCartProps> = ({
  shoppCartBool,
  setShoppCartBool,
}) => {
  const { shoppingCartProducts } = useAppSelector(
    (state) => state.shoppingCartSlice
  );
  const { data } = useAppSelector((state) => state.productSlice);
  const currentShoppingCartId = shoppingCartProducts.map(
    (product) => product.id
  );
  const currentData = data.filter((product) =>
    currentShoppingCartId.includes(product.id)
  );
  const handleEventBack = () => {
    setShoppCartBool(!shoppCartBool);
    const body = document.querySelector("body");
    body?.classList.remove("hidden");
  };
  return (
    <div className="shopping-cart">
      <div
        className={`shopping-cart-background ${shoppCartBool ? "show" : ""}`}
      ></div>
      <div className={`shopping-cart-content ${shoppCartBool ? "show" : ""}`}>
        <div className="shopping-cart-title">
          <p className="text-5xl">Кошик</p>
        </div>
        <div className="shopping-cart-items">
          {currentData && currentData.length ? (
            currentData.map((product, index) => (
              <Fragment key={index}>
                <ShoppingCartItem
                  product={product}
                  shoppingCartProducts={shoppingCartProducts}
                />
              </Fragment>
            ))
          ) : (
            <div className="shopping-cart-empty">
              <p className="text-3xl">Shopping Cart is Empty!</p>
            </div>
          )}
        </div>
        <div className="shopping-cart-footer">
          <div className="shopping-cart-footer-title">
            <p className="text-base">
              Загальна сума : <span className="text-2xl">123</span>
            </p>
          </div>
          <div className="shopping-cart-footer-description">
            <p className="text-base">
              * Сума замовлення для доставки кур'єром повинна становити не менше
              500 ₴
            </p>
          </div>
          <div className="shopping-cart-footer-buttons">
            <div className="shopping-cart-footer-buttons-back">
              <button className="button-reverse" onClick={handleEventBack}>
                Повернутись до покупок
              </button>
            </div>
            <div className="shopping-cart-footer-buttons-checkout">
              <button className="button">Оформити замовлення</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
