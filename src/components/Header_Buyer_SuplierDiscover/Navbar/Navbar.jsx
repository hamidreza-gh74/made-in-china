import { useState } from "react";
import "./Navbar.scss";

const Navbar_Content = [
  "home",
  " product directory",
  "supplier discovery",
  "ease sourcing",
  "buyer service",
];
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <>
      <div className="navbar_containar">
        {Navbar_Content.map((item, index) => {
          return (
            <div key={index} className="navbar_item">
              {item}
            </div>
          );
        })}
      </div>

      {/* ............ menu mobile ........... */}

      <div className="navbar_containar_mob">
        <div className="menu" onClick={() => setDrawerState(true)}>
          <ListIcon variant="medium" />
          <span style={{ marginTop: "2px" }}>menu</span>
        </div>

        <div
          className={`drawer ${drawerState ? "drawer_open" : null}`}
          onClick={() => setDrawerState(false)}
        >
          <div className="close_button">
            <CloseIcon />
          </div>

          <div className="content_drawer">
            {Navbar_Content.map((item, index) => {
              return (
                <div
                  key={index}
                  className="items_mob"
                  onClick={() => setDrawerState(false)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
