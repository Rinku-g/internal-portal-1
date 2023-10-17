import React from "react";
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
// import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  bannerImg: {
    height: "210px",
    "@media(max-width:1280px)": {
      height: "210px",
    },
    "& img": {
      width: "98%",
      height: "100%",
    },
  },
}));

const BannerSlider = () => {
  const classes = useStyles();

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

    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Box className={classes.bannerImg}>
        <img src="/BannerImg/AIC IT CONFERENCE PICTURE 4_jpg.jpg" alt="img" />
      </Box>
      <Box className={classes.bannerImg}>
        <img src="/BannerImg/AIC IT CONFERENCE PICTURE 5_jpg.jpg" alt="img" />
      </Box>
      <Box className={classes.bannerImg}>
        <img src="/BannerImg/AIC IT CONFERENCE PICTURE 6_jpg.jpg" alt="img" />
      </Box>

      {/* <Box className={classes.bannerImg}>
        <img src="/BannerImg/AIC IT CONFERENCE PICTURE 1_jpg.jpg" alt="img" />
      </Box> */}

      <Box className={classes.bannerImg}>
        <img src="/BannerImg/AIC-HO-PAINTING-PICTURE-1_jpg.jpg" alt="img" />
      </Box>
      <Box className={classes.bannerImg}>
        <img src="/BannerImg/AIC IT CONFERENCE PICTURE 6_jpg.jpg" alt="img" />
      </Box>
    </Slider>
  );
};

export default BannerSlider;
