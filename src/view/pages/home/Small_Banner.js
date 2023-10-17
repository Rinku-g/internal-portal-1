import React, { useRef, useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Card,
} from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chip from "@material-ui/core/Chip";
import "../home/Scroll.css";
import BannerSlider from "../home/BennerSlider";

// import { localeFunction } from "src/utils";

const useStyles = makeStyles((theme) => ({
  mainSectionLetst: {
    "@media(max-width:1280px)": {
      marginLeft: "21px",
      marginRight: "6px",
    },
  },
  bannerImg: {
    height: "210px",
    "@media(max-width:1280px)": {
      height: "205px",
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  leftContent: {
    width: "10%",
    "& h5": {
      whiteSpace: "pre",
    },
  },

  rightBox: {
    // marginTop: "19px",
    // border: "1px solid #d0cfce",
    // width: "100%",
    // borderRadius: "5px",
    // padding: "6px 0px 6px 19px",
    // height: "264px",
    // "@media(max-width:1280px)": {
    //   height: "196px !important",
    // },
  },

  inputbox: {
    width: "100%",
    borderRadius: "5px",
    // padding: "6px 0px 6px 19px",
    height: "200px",
  },
  buttonBox: {
    width: "10%",
  },
  date_card: {
    display: "flex",
    gap: "20px",
    // padding: "10px",
    height: "53px",
    border: "1px solid #d0cfce",
    margin: "8px 16px",
    "@media(max-width:1280px)": {
      height: "53px",
    },
  },
  card_Context_Box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  left_box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px",
    background: "",
    borderRight: "1px solid #d0cfce",
    backgroundColor: "#000",

    "& h5": {
      fontSize: "18px",
      color: "#FFFF",
      "@media(max-width:1280px)": {
        fontSize: "15px !important",
      },
    },
    "& p": {
      fontSize: "12px",
      color: "#FFFF",
    },
  },
  card_button: {
    marginRight: "20px",
  },
  card_Context: {
    "& h5": {
      fontSize: "18px",
      "@media(max-width:1280px)": {
        fontSize: "15px !important",
      },
    },
    "& p": {
      fontSize: "12px",
    },
  },
  smallScroll: {
    // height: "286px",
    // overflowY: "scroll",
    "@media(max-width:1280px)": {
      height: "192px",
      overflowY: "scroll",
    },
  },
  scrollBox: {
    // height: "286px",
    overflowY: "scroll",
    "@media(max-width:1280px)": {
      height: "192px",
      overflowY: "scroll",
    },
  },
  chiptext: {
    // background: "red",
    width: "100px",
    textAlign: "center",
    borderRadius: "20px",

    "& h6": {
      color: "#FFF",
      padding: "1px 0px",
    },
  },
}));

const Small_Banner = () => {
  const classes = useStyles();
  const sliderRef = useRef(null);
  const [fixheight, setFixHeight] = useState("286");

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          pauseOnHover: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          initialSlide: 1,
        },
      },
    ],
  };

  const dataCard = [
    {
      date: "24",
      months: "OCT",
      title1: "Dussehra",
      dataTitle: "GH",
      meeting: "Holiyday",
      color:
        "linear-gradient(to right, #2b5876 0%, #4e4376  51%, #2b5876  100%)",
    },
    {
      date: "16",
      months: "APR",
      title1: "User Name",
      dataTitle: "Designation, Department",
      meeting: "Joined Us",
      color:
        "linear-gradient(to right, rgb(254, 140, 0) 0%, rgb(222 113 82) 51%, rgb(254, 140, 0) 100%)",
    },
    {
      date: "16",
      months: "OCT",
      title1: "Happy Birthday",
      dataTitle: "User Name",
      meeting: "Birthday",
      color:
        "linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)",
    },
    {
      date: "14",
      months: "APR",
      title1: "User Name",
      dataTitle: "Designation, Department",
      meeting: "Joined Us",
      color:
        "linear-gradient(to right, rgb(254, 140, 0) 0%, rgb(222 113 82) 51%, rgb(254, 140, 0) 100%)",
    },
  ];

  return (
    <>
      <Container>
        <Box className={classes.mainSectionLetst}>
          <Box className={classes.inputbox}>
            {/* {dataCard &&
                        dataCard?.map((data, index) => {
                          return (
                            <Card className={classes.date_card} elevation={0}>
                              <Box className={classes.left_box}>
                                <Typography variant="h5">
                                  {data?.date}
                                </Typography>
                                <Typography variant="body1">
                                  {data?.months}
                                </Typography>
                              </Box>
                              <Box className={classes.card_Context_Box}>
                                <Box className={classes.card_Context}>
                                  <Typography variant="h5">
                                    {data?.title1}
                                  </Typography>
                                  <Typography variant="body1">
                                    {data?.dataTitle}
                                  </Typography>
                                </Box>
                                <Box className={classes.card_button}>
                                  <Chip size="small" label={data?.meeting} />
                                </Box>
                              </Box>
                            </Card>
                          );
                        })} */}

            <Grid container>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                {/* <BannerSlider /> */}

                <Box className={classes.bannerImg}>
                  <img src="/images/Small Banner/Extra-Banner.jpg" alt="img" />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Slider {...settings}>
                  {dataCard &&
                    dataCard?.map((data, index) => {
                      return (
                        <Box className={classes.rightBox}>
                          <Card className={classes.date_card} elevation={0}>
                            <Box className={classes.left_box}>
                              <Typography variant="h5">{data?.date}</Typography>
                              <Typography variant="body1">
                                {data?.months}
                              </Typography>
                            </Box>
                            <Box className={classes.card_Context_Box}>
                              <Box className={classes.card_Context}>
                                <Typography variant="h5">
                                  {data?.title1}
                                </Typography>
                                <Typography variant="body1">
                                  {data?.dataTitle}
                                </Typography>
                              </Box>
                              <Box className={classes.card_button}>
                                {/* <Chip size="small" label={data?.meeting} /> */}
                                <Box
                                  className={classes.chiptext}
                                  style={{ background: `${data?.color}` }}
                                >
                                  <Typography variant="h6">
                                    {data?.meeting}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Card>
                        </Box>
                      );
                    })}
                </Slider>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Small_Banner;
