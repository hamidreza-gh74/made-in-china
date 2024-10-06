import Title from "../Title/Title";
import "./Find_Audited.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import logo from "../../../../public/assets/Image/Header_Buyer_SupplierDiscover/audited/logo.jpg";

const Find_Audited = () => {
  return (
    <div className="audited_containar_h">
      <Title>
        <a href="#" className="link">
          Find Audited Suppliers{" "}
        </a>
        <ArrowRightIcon />
      </Title>
      {/* ....line start ..... */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#eeee",
        }}
      ></div>

      {/* .... line end .... */}

      <div className="audited_body_h">
        <a href="#" className="audited_pic_h">
          <img src={logo} />
        </a>

        <div className="audited_info_h">
          <div className="info_titr_h">How Can Buyers Benefit?</div>

          <ul className="info_list_h">
            <li className="info_list_item_h">
              Get accurate third-party information on authentic suppliers from
              Audit Reports.
            </li>
            <li className="info_list_item_h">
              Find authentic suppliers faster by eliminating months of
              researching suppliers.
            </li>
            <li className="info_list_item_h">
              Make informed business decisions using Audit Reports.
            </li>
          </ul>
          <div className="info_link_h">
            <a href="#">
              Find Audited Suppliers Now <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find_Audited;
