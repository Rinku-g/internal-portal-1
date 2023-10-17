import React from "react";
import Top_navbar from "./Top_navbar";
import { Box } from "@material-ui/core";
import HeroSection from "./HeroSection";
// import Small_Banner from "./Small_Banner";
// import RightDrawer from "../../../layout/DashboardLayout/TopBar/RightDrawer";

const index = () => {
  return (
    <Box style={{ paddingTop: "117px" }}>
      <Top_navbar />

      <HeroSection />
    </Box>
  );
};

export default index;
