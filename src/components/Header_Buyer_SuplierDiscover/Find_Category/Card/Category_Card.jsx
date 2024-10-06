import { useState } from "react";
import "./Category_Card.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Category_Card = ({ item }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="base"> 
      <div
        className={`card_containar ${hover ? "expand" : null}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="right">
          <a href="#" className="picture">
            <img src={item.src} width="100%" height="100%" />
          </a>
        </div>

        <div className="left">
          <a
            href="#"
            className="titr"
            style={{ color: `${hover ? "#52aeec" : "#000000"}` }}
          >
            {item.titr}
          </a>

          {hover ? (
            <>
              {item.subtitr.map((part) => {
                return (
                  <a
                    href="#"
                    className="text"
                    style={{ color: `${hover ? "#52aeec" : null}` }}
                  >
                    {part}
                  </a>
                );
              })}
            </>
          ) : (
            <>
              {item.subtitr.slice(0, 2).map((part,index) => {
                return (
                  <a key={index} href="#" className="text">
                    {part}
                  </a>
                );
              })}
            </>
          )}

          <a
            href="#"
            className="more"
            style={{ color: `${hover ? "#52aeec" : "#000000"}` }}
          >
            more{" "}
            <ArrowDropDownIcon
              sx={{
                marginBottom: "2px",
              }}
            />{" "}
          </a>
        </div>
      </div> 
    </div>
  );
};

export default Category_Card;
