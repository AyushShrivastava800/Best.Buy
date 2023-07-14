import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Grid, Box } from "@mui/material";

import { Container } from "@mui/system";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";

const ProductZoom = ({product}) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [zoomValue, setZoom] = useState(false);

  const [selectedImage, setSelectedImage] = useState(product.img);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  useEffect(()=>{
    setSelectedImage(product.img)
  },[product.img])

  const handleZoomIn = (zoomIn) => {
    zoomIn(0.4); // Increase the zoom level by 0.2 (adjust as needed)
    setZoom(false);
  };

  const handleZoomOut = (zoomOut) => {
    zoomOut(0.4); // Decrease the zoom level by 0.2 (adjust as needed)
    setZoom(true);
  };

  const sliderSettings = {
    swipeToSlide: false,
    swipe: false,
    draggable: false,
    speed: 0,
  };

  let slider1 = null;
  let slider2 = null;

  const data = [
    { id: 1, img: product.img },
    { id: 2, img: product.smImg1 },
    { id: 3, img: product.smImg2 },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    slider2.slickGoTo(data.findIndex((item) => item.img === image));
  };

  return (
    <div>
      <Container>
        <Grid container spacing={3} className="productZoom">
          <Grid item xs={12} sm={3} className="productZoomItemOne">
            <Slider
              asNavFor={nav1}
              ref={(slider) => (slider2 = slider)}
              slidesToShow={1}
              focusOnSelect={true}
              className="small-img-box "
            >
              <Box className="smallaImageContainer">
                {data?.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    alt={`Image ${item.id}`}
                    className="small-images"
                    onClick={() => {
                      handleImageClick(item.img);
                  
                    }}
                  />
                ))}
              </Box>
            </Slider>
          </Grid>

          <Grid item xs={12} sm={9} className="productZoomItemTwo">
            <Slider
              className="productZoomItemTwo-slider"
              {...sliderSettings}
              asNavFor={nav2}
              ref={(slider) => (slider1 = slider)}
            >
              <Box className="zoomContainer">
                <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={200}
                  defaultPositionY={100}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      <div className="tools">
                        <button
                          className="zoomInOut"
                          onClick={() => {
                            zoomValue ? (
                              <>{(handleZoomOut(zoomOut), setZoom(false))}</>
                            ) : (
                              <> {(handleZoomIn(zoomIn), setZoom(true))}</>
                            );
                          }}
                        >
                          {!zoomValue ? (
                            <ZoomOutMapIcon className="expandIcons" />
                          ) : (
                            <ZoomInMapIcon className="expandIcons" />
                          )}
                        </button>
                        <Box className="tagsContainer">
                          <Box className="tags ">New</Box>
                          <Box className="tags tag2 mt-10">Sale</Box>
                        </Box>
                      </div>
                      <TransformComponent>
                        <div className="bigImagesContainer">
                          <img
                            src={selectedImage}
                            className="big-images"
                            alt="Selected Image"
                          />
                        </div>
                      </TransformComponent>
                    </>
                  )}
                </TransformWrapper>
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductZoom;
