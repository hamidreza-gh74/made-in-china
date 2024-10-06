import Navbar from "./Navbar/Navbar";

import "./Header_Buy_SuplierDiscover.scss";
import Title from "./Title/Title";
import Find_Category from "./Find_Category/Find_Category";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Find_Industrial_Zone from "./Find_Industrial_Zone/Find_Industrial_Zone";
import { Data_SupplierDiscover_Industrial_Zone_Card } from "./Data_SupplierDiscover";
import Find_Audited from "./Find_audited/Find_Audited";
import Find_Regional from "./Find_Regional/Find_Regional";
import Find_Analysis_Report from "./Find_Analysis_Report/Find_Analysis_Report";
import Popular_Search from "./Popular_Search/Popular_Search";
import Find_Comment from "./Find_Comment/Find_Comment";
import Find_Index from "./Find_Index/Find_Index";

const data = Data_SupplierDiscover_Industrial_Zone_Card;

const Header_Buy_SuplierDiscover = () => {
  return (
    <div className="containar">
      <Navbar />
      <Title>Find China Suppliers by Category</Title>
      <Find_Category />
      <Title>
        <a href="#" className="link">
          Find China Suppliers by Industrial Zone
        </a>
        <ArrowRightIcon />
      </Title>

      {data.map((item) => (
        <Find_Industrial_Zone
          key={item.id}
          body={item.body}
          header={item.header}
        />
      ))}

      <div className="mix_audited_regional_h">
        <Find_Audited />
        <Find_Regional />
      </div>

      <Title>
        Industry Analysis Reports <ArrowRightIcon />
      </Title>
      <Find_Analysis_Report />

      <Popular_Search />

      <Find_Comment />

      <Find_Index />
    </div>
  );
};

export default Header_Buy_SuplierDiscover;
