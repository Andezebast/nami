import { FC, Fragment, useState } from "react";
import "./ShoppingCart.scss";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../hooks/redux";
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import Phone from "../../svg/Phone";
import User from "../../svg/User";

interface IShoppingCartProps {
  shoppCartBool: boolean;
  setShoppCartBool: Function;
}
const ShoppingCart: FC<IShoppingCartProps> = ({ shoppCartBool, setShoppCartBool }) => {
  const [checkout, setCheckout] = useState<boolean>(false);
  const { shoppingCartProducts } = useAppSelector((state) => state.shoppingCartSlice);
  const { data } = useAppSelector((state) => state.productSlice);
  const currentShoppingCartIds = shoppingCartProducts.map((product) => product.id);
  const filterData = data.filter((product) => currentShoppingCartIds.includes(product.id));
  const currentData = filterData.map((product) => {
    const productPrice = Number(product.price.split(" ")[0]);
    const productQuantity = shoppingCartProducts.find((item) => item.id === product.id)?.quantity || 1;
    return {
      product,
      sum: productQuantity * productPrice,
    };
  });
  const shopCartSum = currentData.reduce((prev, next) => prev + next.sum, 0);
  const handleEventBack = () => {
    setShoppCartBool(!shoppCartBool);
    const body = document.querySelector("body");
    body?.classList.remove("hidden");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = () => {
    setCheckout(true);
  };
  const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  const handleCheckoutEvent = () => {
    window.location.reload();
  };
  return (
    <div className="shopping-cart">
      <div className={`shopping-cart-background ${shoppCartBool ? "show" : ""}`}></div>
      <div className={`shopping-cart-content ${shoppCartBool ? "show" : ""}`}>
        {checkout ? (
          <>
            <div className="checkout shopping-cart-title">
              <p className="text-4xl">Ваше замовлення №{randomNumber}</p>
            </div>
            <div className="shopping-cart-checkout">
              <div className="shopping-cart-checkout-title">
                <p className="text-2xl">Наш менеджер зв'яжеться з Вами найближчим часом.</p>
              </div>
              <div className="shopping-cart-checkout-button">
                <button className="button" onClick={handleCheckoutEvent}>
                  Повернутися на головну сторінку
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="shopping-cart-title">
              <p className="text-5xl">Кошик</p>
            </div>
            <div className="shopping-cart-items">
              {currentData && currentData.length ? (
                currentData.map((currentProduct, index) => (
                  <Fragment key={index}>
                    <ShoppingCartItem currentProduct={currentProduct} shoppingCartProducts={shoppingCartProducts} />
                  </Fragment>
                ))
              ) : (
                <div className="shopping-cart-empty">
                  <p className="text-3xl">Shopping Cart is Empty!</p>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit(submit)} className="shopping-cart-footer">
              <div className="shopping-cart-footer-form">
                <div className="shopping-cart-footer-form-title">
                  <p className="text-2xl">Дані реєстрації</p>
                </div>
                <div className="shopping-cart-footer-form-name">
                  <input
                    type="text"
                    placeholder="Ім'я..."
                    {...register("Name", {
                      required: true,
                    })}
                  />
                  <User />
                  {errors.Name && <p className="text-base">Будь ласка, введіть своє ім'я</p>}
                </div>
                <div className="shopping-cart-footer-form-phone">
                  <input
                    type="number"
                    placeholder="Телефон..."
                    {...register("Phone", {
                      required: true,
                    })}
                  />
                  <Phone />
                  {errors.Phone && <p className="text-base">Будь ласка, введіть свій телефон</p>}
                </div>
              </div>
              <div className="shopping-cart-footer-title">
                <p className="text-xl">
                  Загальна сума: <span className="text-2xl">{shopCartSum} ₴</span>
                </p>
              </div>
              <div className="shopping-cart-footer-description">
                <p className="text-base">* Сума замовлення для доставки кур'єром повинна становити не менше 500 ₴</p>
              </div>
              <div className="shopping-cart-footer-buttons">
                <div className="shopping-cart-footer-buttons-back">
                  <div className="button-reverse" onClick={handleEventBack}>
                    Повернутись до покупок
                  </div>
                </div>
                <div className="shopping-cart-footer-buttons-checkout">
                  <button type="submit" className={`button ${currentData && currentData.length ? "" : "disabled"}`}>
                    Оформити замовлення
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
