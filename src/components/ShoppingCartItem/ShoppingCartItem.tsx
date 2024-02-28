import { FC } from "react";
import "./ShoppingCartItem.scss";
import { IProduct } from "../../models/IProduct";
import Minus from "../../svg/Minus";
import Plus from "../../svg/Plus";
import { shoppingCartSlice } from "../../store/ShoppingCart/ShoppingCartSlice";
import { IShoppingCart } from "../../models/IShoppingCart";
import { useAppDispatch } from "../../hooks/redux";

interface IProps {
  product: IProduct;
  shoppingCartProducts: IShoppingCart[];
}

const ShoppingCartItem: FC<IProps> = ({ product, shoppingCartProducts }) => {
  const dispatch = useAppDispatch();
  const productQuantity = shoppingCartProducts.find(
    (shoppingCartProduct) => shoppingCartProduct.id === product.id
  )?.quantity;

  const handleMinusEvent = (id: number) => {
    dispatch(
      shoppingCartSlice.actions.quantityShoppingCart({
        id: id,
        action: "minus",
      })
    );
  };
  const handlePlusEvent = (id: number) => {
    dispatch(
      shoppingCartSlice.actions.quantityShoppingCart({
        id: id,
        action: "plus",
      })
    );
  };
  return (
    <div className="shopping-cart-item">
      <div className="shopping-cart-item-image">
        <img src={product.image} alt="Shopping Cart Image" />
      </div>
      <div className="shopping-cart-item-content">
        <div className="shopping-cart-item-content-title">
          <p className="text-base">{product.title}</p>
        </div>
        <div className="shopping-cart-item-content-subtitle">
          <p className="text-sm">{product.subtitle}</p>
        </div>
        <div className="shopping-cart-item-content-grams">
          <p className="text-sm">({product.grams})</p>
        </div>
      </div>
      <div className="shopping-cart-item-result">
        <div className="shopping-cart-item-result-price">
          <p className="text-sm">
            Ціна: <span className="text-base">{product.price}</span>
          </p>
        </div>
        <div className="shopping-cart-item-result-quantity">
          <div className="minus" onClick={() => handleMinusEvent(product.id)}>
            <Minus />
          </div>
          <div className="number">
            <p className="text-base">{productQuantity}</p>
          </div>
          <div className="plus" onClick={() => handlePlusEvent(product.id)}>
            <Plus />
          </div>
        </div>
        <div className="shopping-cart-item-result-sum">
          <p className="text-sm">
            Сумма: <span className="text-base">123</span>
          </p>
        </div>
      </div>
      <div className="shopping-cart-item-delete"></div>
    </div>
  );
};

export default ShoppingCartItem;
