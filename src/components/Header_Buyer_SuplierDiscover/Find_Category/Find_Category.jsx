import { useState } from "react";
import { Data_SupplierDiscover_Category_Card } from "../Data_SupplierDiscover";
import Category_Card from "./Card/Category_Card";
import "./Find_Category.scss";

const Category_Menu_Data = [
  "consumers goods",
  "industrial supplies",
  "raw materials & service",
];

const Find_Category = () => {
  const [Menu, setMenu] = useState(0);
  return (
    <div className="find_category_containar">
      <div className="find_category_menu">
        {Category_Menu_Data.map((item, index) => {
          return (
            <div
              key={index}
              className={`find_category_menuitem ${
                Menu === index ? "select" : null
              }`}
              onClick={() => setMenu(index)}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className="find_category_main">
        {Data_SupplierDiscover_Category_Card[Menu]?.map((item) => {
          return <Category_Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Find_Category;
