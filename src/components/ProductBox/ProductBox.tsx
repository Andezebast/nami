import { FC, useEffect, useState } from "react";
import "./ProductBox.scss";
import { IProduct } from "../../models/IProduct";
import { productsSlice } from "../../store/Products/productsSlice";
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
  const [inShopCart, setInShopCart] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<IProduct>(product);
  useEffect(() => {
    setCurrentProduct(product);
  }, [product]);
  const dispatch = useAppDispatch();
  const { shoppingCartProducts } = useAppSelector(
    (state) => state.shoppingCartSlice
  );
  const handleMinusEvent = (id: number) => {
    dispatch(
      productsSlice.actions.quantityShoppingCart({
        id: id,
        action: "minus",
      })
    );
    if (currentProduct.id === id) {
      dispatch(shoppingCartSlice.actions.addShoppingCart(currentProduct));
    }
  };
  const handlePlusEvent = (id: number) => {
    dispatch(
      productsSlice.actions.quantityShoppingCart({
        id: id,
        action: "plus",
      })
    );
    if (currentProduct.id === id) {
      dispatch(shoppingCartSlice.actions.addShoppingCart(currentProduct));
    }
  };
  const handleEventShoppingCart = (product: IProduct) => {
    dispatch(shoppingCartSlice.actions.addShoppingCart(product));
    setInShopCart(true);
  };
  return (
    <div className={`product-box ${inShopCart ? "shopping-cart" : ""}`}>
      <div className="wishlist">
        <WishList />
      </div>
      <div className="product-box-image">
        <img src={product.image} alt="product-box-image" />
      </div>
      <div className="product-box-title">
        <div className="subtitle">
          <p
            onMouseOver={() => setProductPopUp(true)}
            onMouseOut={() => setProductPopUp(false)}
          >
            {product.title}
          </p>
          <span className={`${productPopUp ? "show" : ""}`}>
            {product.title}
          </span>
        </div>
        <span className="paragraph-mini">{product.grams}</span>
      </div>
      <div className="product-box-subtitle">
        <p className="paragraph">{product.subtitle}</p>
      </div>
      <div className="product-box-price">
        <p className="subtitle">{product.price}</p>
        {shoppingCartProducts.length &&
        shoppingCartProducts.findIndex(
          (shoppingCartProduct) => shoppingCartProduct.id == product.id
        ) > -1 ? (
          <div className="product-box-shopping-cart">
            <div className="minus" onClick={() => handleMinusEvent(product.id)}>
              <Minus />
            </div>
            <div className="number subtitle">{product.quantity}</div>
            <div className="plus" onClick={() => handlePlusEvent(product.id)}>
              <Plus />
            </div>
          </div>
        ) : (
          <button
            className="product-box-button button paragraph-mini"
            onClick={() => handleEventShoppingCart(product)}
          >
            В кошик
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductBox;
