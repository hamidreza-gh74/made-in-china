import Title from "../Title/Title";
import "./Find_Regional.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Data_SupplierDiscover_Regional_Zone } from "../Data_SupplierDiscover";
import { useState } from "react";

const data = Data_SupplierDiscover_Regional_Zone;

const Find_Regional = () => {
  const [menu, setMenu] = useState(0);
  return (
    <div className="regional_containar_h">
      <Title>
        <a href="#" className="link">
        Find Suppliers by Regional Channels{" "}
        </a>
        <ArrowRightIcon />
      </Title>
      {/*...... line start ..... */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#eeee",
        }}
      ></div>

      {/* ..... line end..... */}

      <div className="regional_body_h">
        <div className="regional_menu_h">
          {data.titr.map((item) => {
            return (
              <div
                key={item.id}
                className={`regional_menu_item_h ${item.id - 1 === menu ? "regional_menu_item_select_h" : null}`}
                onClick={() => setMenu(item.id - 1)}
              >
                {item.text}
              </div>
            );
          })}
        </div>

        <div className="regional_main_h">
          <div className="regional_map_h">
            <img src={data.picture[menu].src} alt="" />
          </div>
          <div className="regional_countryname_h">
            {data.country[menu].item.map((text,index) => {
              return (
                <a href="#" key={index} className="regional_contryname_item_h">
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find_Regional;
