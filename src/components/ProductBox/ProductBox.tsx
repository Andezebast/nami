import { FC } from "react";
import "./ProductBox.scss";
import { IProduct } from "../../models/IProduct";

interface IProps {
  product: IProduct;
}

const ProductBox: FC<IProps> = ({ product }) => {
  return (
    <div>
      <p>Product Box!</p>
      <div>{product.title}</div>
    </div>
  );
};

export default ProductBox;
