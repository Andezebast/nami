import { FC, Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchProducts } from "../../store/productsSlice";
import { useEffect } from "react";
import ProductBox from "../ProductBox/ProductBox";
const Products: FC = () => {
  const { data, error, loading } = useAppSelector(
    (state) => state.productSlice
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
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
    <div>
      {data.length &&
        data.map((product, index) => (
          <Fragment key={index}>
            <ProductBox product={product} />
          </Fragment>
        ))}
    </div>
  );
};

export default Products;
