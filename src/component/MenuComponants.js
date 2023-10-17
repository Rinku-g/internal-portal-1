import React, { useState, useEffect, useContext } from "react";
// import { AuthContext } from "src/context/Auth";
import { makeStyles, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
// import MandatesComponent from "src/component/MandatesComponent";
import SubMenuChild from "./SubMenuChild";
// import SubMenuChild from "src/component/SubMenuChild";

const useStyles = makeStyles((theme) => ({
  dropdown: {
    "& .dropdown-content": {
      display: "none",
    },
    "&:hover": {
      "& .dropdown-content": {
        display: "block",
      },
    },
  },
}));
const MenuComponent = ({ MenuDataValue, data, index, value, tpye }) => {
  const history = useHistory();
  const [openmenu, setMenu] = useState(false);

  return (
    <div
      key={index}
      class={"dropdown"}
      style={
        value == "TOPVALUE"
          ? {
              padding: "0 20px",
            }
          : {}
      }
    >
      <Box
        style={
          value == "TOPVALUE"
            ? {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }
            : {}
        }
      >
        <button
          class="dropbtn"
          onClick={() => {
            data?.link == "/business-dashboard" ||
            data?.link == "/career" ||
            data?.link == "/contacts-management"
              ? history.push(data?.link)
              : setMenu(!openmenu);
          }}
          style={
            value == "TOPVALUE" ? { color: "#fff", textAlign: "left" } : {}
          }
        >
          External Portal (website)
        </button>
        <button
          class="dropbtn"
          onClick={() => {
            data?.link == "/business-dashboard" ||
            data?.link == "/career" ||
            data?.link == "/contacts-management"
              ? history.push(data?.link)
              : setMenu(!openmenu);
          }}
          style={value == "TOPVALUE" ? { color: "#fff" } : {}}
        >
          External Portal (website)
        </button>
        <button
          class="dropbtn"
          onClick={() => {
            data?.link == "/business-dashboard" ||
            data?.link == "/career" ||
            data?.link == "/contacts-management"
              ? history.push(data?.link)
              : setMenu(!openmenu);
          }}
          style={value == "TOPVALUE" ? { color: "#fff" } : {}}
        >
          Farmer Portal
        </button>
        <button
          class="dropbtn"
          onClick={() => {
            data?.link == "/business-dashboard" ||
            data?.link == "/career" ||
            data?.link == "/contacts-management"
              ? history.push(data?.link)
              : setMenu(!openmenu);
          }}
          style={value == "TOPVALUE" ? { color: "#fff" } : {}}
        >
          Field Investigation
        </button>
        <button
          class="dropbtn"
          onClick={() => {
            data?.link == "/business-dashboard" ||
            data?.link == "/career" ||
            data?.link == "/contacts-management"
              ? history.push(data?.link)
              : setMenu(!openmenu);
          }}
          style={value == "TOPVALUE" ? { color: "#fff" } : {}}
        >
          Channel Partner
        </button>
      </Box>

      {/* {value == "TOPVALUE" ? (
        <SubMenuChild
          CompanyTitle={data?.MenuDataValue}
          openmenu={openmenu}
          MenuValue={MenuValue}
        />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default MenuComponent;
