import { useState } from "react";
import "./Find_Industrial_Zone.scss";
import Main_Card_Zone from "./Main_Card/Main_Card_Zone";
import More_Card_Zone from "./More_Card/More_Card_Zone";
import ListIcon from "@mui/icons-material/List";

const Find_Industrial_Zone = ({ body, header }) => {
  const [Menu, setMenu] = useState(0);
  const [MenuDrawer, setMenuDrawer] = useState(false);

  return (
    <div className="find_industrial_zone_containar_h">
      <div className="find_industrial_zone_menu_h">
        <div className="zone_menu_item_mob_h">
          <button
            className="zone_menu_mob_btn_h"
            onClick={() => setMenuDrawer((prev) => !prev)}
          >
            <ListIcon />

            {header[Menu]}

            <div
              className={`zone_menu_mob_drawer_h
               ${MenuDrawer ? null : "mob_drawer_hidden_h"}`}
            >
              {header.map((part, index) => {
                return (
                  <div
                    key={index}
                    className="mob_drawer_item_h"
                    onClick={() => {
                      setMenu(index);
                     
                                          }}
                  >
                    {part}
                  </div>
                );
              })}
            </div>
          </button>
        </div>

        {header.map((item, index) => {
          return (
            <div
              key={index}
              className={`find_industrial_zone_menuitem_h ${
                Menu === index ? "select_h" : null
              }`}
              onClick={() => {setMenu(index), setMenuDrawer(false)}}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="find_industrial_zone_main_h">
        <Main_Card_Zone body={body} />

        <div className="more_card_zone_h">
          {body[Menu + 1]?.map((item) => {
            return <More_Card_Zone key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Find_Industrial_Zone;
