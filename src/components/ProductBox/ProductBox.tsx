import { FC, useState } from "react";
import "./ProductBox.scss";
import { IProduct } from "../../models/IProduct";
import { shoppingCartSlice } from "../../store/ShoppingCart/ShoppingCartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import WishList from "../../svg/WishList";
import Minus from "../../svg/Minus";
import Plus from "../../svg/Plus";

interface IProps {
  product: IProduct;
}
const ProductBox: FC<IProps> = ({ product }) => {
  const [productPopUp, setProductPopUp] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { shoppingCartProducts } = useAppSelector((state) => state.shoppingCartSlice);
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
  const handleEventShoppingCart = (id: number) => {
    dispatch(shoppingCartSlice.actions.addToShoppingCart(id));
  };
  const productQuantity = shoppingCartProducts.find(
    (shoppingCartProduct) => shoppingCartProduct.id === product.id
  )?.quantity;
  return (
    <div className={`product-box ${productQuantity && productQuantity > 0 ? "shopping-cart" : ""}`}>
      <div className="wishlist">
        <WishList />
      </div>
      <div className="product-box-image">
        <img src={product.image} alt="product-box-image" />
      </div>
      <div className="product-box-title">
        <div className="text-xl">
          <p onMouseOver={() => setProductPopUp(true)} onMouseOut={() => setProductPopUp(false)}>
            {product.title}
          </p>
          <span className={`text-base ${productPopUp ? "show" : ""}`}>{product.title}</span>
        </div>
        <span className="text-sm">{product.grams}</span>
      </div>
      <div className="product-box-subtitle">
        <p className="text-base">{product.subtitle}</p>
      </div>
      <div className="product-box-price">
        <p className="text-xl">{product.price}</p>
        {shoppingCartProducts.length &&
        shoppingCartProducts.findIndex((shoppingCartProduct) => shoppingCartProduct.id == product.id) > -1 ? (
          <div className="product-box-shopping-cart">
            <div className="minus" onClick={() => handleMinusEvent(product.id)}>
              <Minus />
            </div>
            <div className="number text-xl">{productQuantity}</div>
            <div className="plus" onClick={() => handlePlusEvent(product.id)}>
              <Plus />
            </div>
          </div>
        ) : (
          <button
            className="product-box-button button paragraph-mini"
            onClick={() => handleEventShoppingCart(product.id)}
          >
            В кошик
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductBox;
