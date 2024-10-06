import { Data_SupplierDiscover_Analysis_Report } from "../Data_SupplierDiscover";
import "./Find_Analysis_Report.scss";

const data = Data_SupplierDiscover_Analysis_Report;

const Find_Analysis_Report = () => {
  return (
    <div className="analysis_report_containar_h">
      {/* ....line start ..... */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#eeee",
        }}
      ></div>

      {/* .... line end .... */}

      <div className="analysis_report_main_h">
        {data.map((item) => {
          return (
            <div key={item.id} className="analysis_report_card_h">

              <a href="#" className="report_card_img_h">
                <img src={item.src} alt=""  width="100%" height="100%" />
              </a>
              
              <div className="report_cart_body_h">

                <a href="#" className="report_body_titr_h">{item.text}</a>
                <div className="report_body_date_h">{item.date}</div>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Find_Analysis_Report;
