import { FC, Fragment } from "react";
import "./Products.scss";
import ProductBox from "../ProductBox/ProductBox";
import { IProduct } from "../../models/IProduct";

interface IProductsProps {
  currentData: IProduct[];
  error: string | null;
  loading: boolean;
}

const Products: FC<IProductsProps> = ({ currentData, loading, error }) => {
  if (loading) {
    return (
      <div className="loading">
        <p className="subtitle">Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <>
      {currentData.length &&
        currentData.map((product, index) => (
          <Fragment key={index}>
            <ProductBox product={product} />
          </Fragment>
        ))}
    </>
  );
};

export default Products;
