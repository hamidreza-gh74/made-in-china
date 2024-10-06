import { Data_SupplierDiscover_Industrial_Zone_Card } from "../../Data_SupplierDiscover";
import "./Main_Card_Zone.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Main_Card_Zone = ({body}) => {
  return (
    <a href="#" className="main_card_zone_h">


      <div className="zone_content_h">
        <div className="zone_feature_h">feature</div>

        <ul className="zone_ul_h">
          {body[0][0].list.map(
            (item,index) => {
              return <li key={index} className="zone_li_h">{item}</li>;
            }
          )}
        </ul>

        <div className="zone_more_h">
          <a href="#">view more</a>
          <ArrowRightIcon sx={{ fontSize: "15px" }} />
        </div>
      </div>

      <div className="zone_picture_h">
        <img src={body[0][0].src} alt="" />
      </div>
    </a>
  );
};

export default Main_Card_Zone;
