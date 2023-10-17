import React, { useEffect, useState } from "react";
import Apiconfigs from "src/ApiConfig/ApiConfig";
import { getAPIdata, decryptData } from "src/utils";
import { makeStyles, Box } from "@material-ui/core";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  marqueeContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    "@media(max-width:992px)": {
      marginTop: "0px",
    },
  },
  marqueeContent: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
    alignItems: "center",

    "@media(max-width:576px)": {
      maxWidth: "600px",
      minWidth: "600px",
    },
  },
  marqueeImage: {
    width: "100%",
    height: "auto",
  },

  sliderimg: {
    // maxWidth: "150px",
    padding: "10px 0",
    "@media(max-width:320px)": {
      margin: "0px 13px",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const MarqueeSlider = ({ images }) => {
  const classes = useStyles();
  const history = useHistory();
  const [_calender, setCalender] = useState("");
  const calendarDownload = async () => {
    try {
      const res = await getAPIdata({
        endPoint: Apiconfigs.single_data + "/Calendar",
      });
      if (res) {
        setCalender(res?.result[0]?.document);
      }
    } catch (error) {}
  };

  useEffect(() => {
    calendarDownload();
  }, []);
  const Slider_images = [
    {
      link: "https://bimabharosa.irdai.gov.in/",
      title: "bimabharosa",
      image_url: "/images/bima.png",
      index: "3",
    },

    {
      link: "https://amritmahotsav.nic.in/",
      title: "10th NRC",
      image_url: "/images/10th NRC.png",
      index: "4",
    },
    {
      index: "5",
      link: _calender,
      title: "Caleneder",
      image_url: "/images/Black-color-calander-Icons.png",
    },
    // {
    //   index: "1",
    //   link: "https://www.g20.org/en/",
    //   title: "bima bharosa",
    //   image_url: "/images/SliderImages/g20.png",
    // },

    {
      link: "/iec_active",
      title: "IEC Activities",
      image_url: "/images/IEC-Activites-1.png",
      index: "2",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          autoplay: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          autoplay: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          infinite: false,
          autoplay: true,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box
        style={{
          boxShadow: "rgba(0, 0, 0, 0.06) 1px 3px 19px 0px inset",
        }}
      >
        <Slider {...settings}>
          {Slider_images.map((image, index) => (
            <a href={image?.link} target="_blank">
              <Box display={"flex"} justifyContent={"center"} m={"5px 0 0 0"}>
                <Box className={classes.sliderimg}>
                  <img
                    key={index}
                    src={image?.image_url}
                    alt={`Image ${index}`}
                    width={"100%"}
                  />
                </Box>
              </Box>
            </a>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default MarqueeSlider;
