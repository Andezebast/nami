import { FC, useState } from "react";
import "./ProductBox.scss";
import { IProduct } from "../../models/IProduct";
import WishList from "../../svg/WishList";

interface IProps {
  product: IProduct;
}

const ProductBox: FC<IProps> = ({ product }) => {
  const [productPopUp, setProductPopUp] = useState<boolean>(false);

  return (
    <div className="product-box">
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
        <div className="products-box-shopping-cart">
          <button className="button paragraph-mini">В кошик</button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
