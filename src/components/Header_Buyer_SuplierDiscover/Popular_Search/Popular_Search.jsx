import { useState } from "react";
import { Data_SupplierDiscover_popular } from "../Data_SupplierDiscover";
import "./Popular_Search.scss";
import Section from "./Section/Section";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const data = Data_SupplierDiscover_popular;

const Popular_Search = () => {
  const [info, setInfo] = useState(1);
  return (
    <div className="popular_search_containar_h">
      {info ? (
        <>
          {" "}
          {data.map((part) => {
            return <Section key={part.id} part={part} />;
          })}
        </>
      ) : (
        <>
          {" "}
          {data.slice(0, 1).map((part) => {
            return <Section key={part.id} part={part} />;
          })}
        </>
      )}

      <div className="popular_search_more_h" onClick={() => setInfo(!info)}>
        {info ? "less" : "more"}
        {info ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>
    </div>
  );
};

export default Popular_Search;
