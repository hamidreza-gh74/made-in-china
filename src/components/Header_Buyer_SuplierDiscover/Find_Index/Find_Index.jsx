import { Data_SupplierDiscover_Find_Index } from "../Data_SupplierDiscover";
import "./Find_Index.scss";

const data = Data_SupplierDiscover_Find_Index;

const Find_Index = () => {
  return (
    <div className="find_index_containar_h">
      {data.map((item) => {
        return (
          <div key={item.id} className="find_index_item_h">
            <div className="find_index_titr_h">{item.titr}</div>
            <div className="find_index_text_h">
              {item.text.map((link,index) => {
                return <a key={index} href="#">{link}</a>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Find_Index;
