import React from "react";
import {
  Box,
  Typography,
  Container,
  makeStyles,
  Button,
  IconButton,
  Grid,
  Card,
  Avatar,
} from "@material-ui/core";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const useStyles = makeStyles((theme) => ({
  MainHero_Section: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card_Heading: {
    display: "flex",
    padding: "6px 0px 6px 15px",
    alignItems: "center",
    gap: "15px",
    borderRadius: "5px 5px 0px 0px",
    background: "#0192be",
    "& h6": {
      fontWeight: 500,
      color: "#FFF",
    },
    "& .iconbox": {
      width: "40px",
      height: "40px",
      color: "#FFF",
      background: "rgb(3, 125, 162)",
    },
  },
  mainCard_section: {
    background: "#f4f4f4",
    "& .iconbox": {
      width: "35px",
      height: "35px",
      color: "#FFF",
      background: "#06485b",
    },
    "& .mainCard": {
      borderRadius: "0px !important",
    },
    "& .list_card": {
      display: "flex",
      gap: "10px",
      // padding: "6px 0px 5px 15px",
      padding: "10px 5px 5px 15px",
      alignItems: "center",
    },
  },
  main_herosection: {
    marginLeft: "42px",
    marginRight: "42px",
    height: "532px",
    marginTop: "40px",
    "@media(max-width:1280px)": {
      height: "455px",
      marginTop: "15px",
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
  ViewMoreBtn: {
    textAlign: "end",
    color: "#06485b",
    width: "100%",
    bottom: "0px",
    right: "0px",
    // position: "absolute",
  },
  cardIcon: {
    width: "35px",
    height: "35px",
    background: "#06485b",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "60%",
      height: "60%",
    },
  },
  card_heading_icon: {
    width: "40px",
    height: "40px",
    background: "#FFF",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "60%",
      height: "60%",
      paddingTop: "5px",
    },
  },
}));

const myApplication = [
  {
    icon: "/images/hero section icon/HRMS.png",
    title: "HRMS",
  },
  {
    icon: "/images/hero section icon/Sewacore.png",
    title: "SEWACORE",
  },
  {
    icon: "/images/hero section icon/Sewanxt.png",
    title: "SEWA NXT",
  },
  {
    icon: "/images/hero section icon/AIC-Form.png",
    title: "AIC FORM",
  },
  {
    icon: "/images/hero section icon/HelpDesk.png",
    title: "HELPDESK",
  },
  {
    icon: "/images/hero section icon/WDMS.png",
    title: "WDMS",
  },
  {
    icon: "/images/hero section icon/HRMS.png",
    title: "CHMS",
  },
  {
    icon: "/images/hero section icon/HRMS.png",
    title: "OWP",
  },
  {
    icon: "/images/hero section icon/HRMS.png",
    title: "OS TICKET",
  },
  {
    icon: "/images/hero section icon/HRMS.png",
    title: "CHMS",
  },

  {
    icon: "/images/hero section icon/HRMS.png",
    title: "Flexi Reporting",
  },
];

const annoucement = [
  {
    icon: <LibraryBooksIcon />,
    title: "Promotion execrise(2023-24) for promotion from scale V-Interview",
  },
  // {
  //   icon: <LibraryBooksIcon />,
  //   title: "HRMS",
  // },
  {
    icon: <LibraryBooksIcon />,
    title: "Manual for Learning & development Department",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "Dearness allowance Payable to officers, Supervisor",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "Recruitment rules 2021 (amended upt to june 2023)",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "Revised centralization of HRMS applications",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "Holiday",
  },
];

const quick = [
  {
    icon: <LibraryBooksIcon />,
    title: "Office Contacts",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "My communications",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "Holiday List",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "BI Reports",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "E-Magazine Sujalam Sufalam",
  },
  {
    icon: <LibraryBooksIcon />,
    title: "E-Library",
  },
];

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main_herosection}>
      <Container>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className={classes.card_Heading}>
                <Box className={classes.card_heading_icon}>
                  <img
                    src="/images/hero section icon/application (1).png"
                    alt="img"
                  />
                </Box>
                <Typography variant="h6">My Applications</Typography>
              </Box>
              <Card>
                <Box className="scroll_card" id="style-9">
                  {myApplication &&
                    myApplication?.map((data, index) => {
                      return (
                        <Box className={classes.mainCard_section} key={index}>
                          <Card
                            className="mainCard"
                            style={{ borderRadius: "0px !important" }}
                          >
                            <Box className="list_card">
                              <Box className={classes.cardIcon}>
                                <img src={data?.icon} alt="img" />
                              </Box>

                              <Typography variant="h6">
                                {data?.title}
                              </Typography>
                            </Box>
                          </Card>
                        </Box>
                      );
                    })}
                </Box>
              </Card>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={6}
              style={{ position: "relative" }}
            >
              <Box className={classes.card_Heading}>
                {/* <IconButton className="iconbox">
                  <LibraryBooksIcon style={{ fontSize: "18px" }} />
                </IconButton> */}
                <Avatar
                  alt="Remy Sharp"
                  style={{ background: "white" }}
                  src="/images/hero section icon/Announcements-Blue.png"
                />

                <Typography variant="h6">Announcements</Typography>
              </Box>
              <Card>
                <Box className="scroll_card" id="style-9">
                  {annoucement &&
                    annoucement?.map((data, index) => {
                      return (
                        <Box className={classes.mainCard_section} key={index}>
                          <Card className="mainCard">
                            <Box className="list_card">
                              <IconButton className="iconbox">
                                <LibraryBooksIcon
                                  style={{ fontSize: "18px" }}
                                />
                              </IconButton>

                              <Typography variant="h6">
                                {data?.title}
                              </Typography>
                            </Box>
                          </Card>
                        </Box>
                      );
                    })}
                </Box>
              </Card>
              <Box className={classes.ViewMoreBtn}>
                <a href="/">
                  <Button style={{ color: "#06485b" }}>View more</Button>
                </a>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className={classes.card_Heading}>
                <Avatar
                  alt="Remy Sharp"
                  style={{ background: "#FFF" }}
                  src="/images/hero section icon/Quick-Link.png"
                />
                <Typography variant="h6">Quick Links</Typography>
              </Box>
              <Card>
                <Box className="scroll_card" id="style-9">
                  {quick &&
                    quick?.map((data, index) => {
                      return (
                        <Box className={classes.mainCard_section} key={index}>
                          <Card className="mainCard">
                            <Box className="list_card">
                              <IconButton className="iconbox">
                                <LibraryBooksIcon
                                  style={{ fontSize: "18px" }}
                                />
                              </IconButton>
                              <Typography variant="h6">
                                {data?.title}
                              </Typography>
                            </Box>
                          </Card>
                        </Box>
                      );
                    })}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
