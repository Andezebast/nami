import { FC, useEffect, useState } from "react";
import "./MenuPage.scss";
import Products from "../components/Products/Products";
import Sidebar from "../components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../store/productsSlice";
import { IProduct } from "../models/IProduct";

const MenuPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  /*------------------------------*/
  const { data, loading, error } = useAppSelector(
    (state) => state.productSlice
  );
  const [currentData, setCurrentData] = useState<IProduct[]>([]);
  useEffect(() => {
    setCurrentData(data);
  }, [data]);
  return (
    <div className="menu page">
      <div className="container">
        <div className="menu-title title">Меню</div>
        <div className="menu-products">
          <Products currentData={currentData} loading={loading} error={error} />
        </div>
      </div>
      <Sidebar data={data} setCurrentData={setCurrentData} />
    </div>
  );
};

export default MenuPage;
