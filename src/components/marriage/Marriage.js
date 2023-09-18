import React, { useState } from "react";
import Typed from "react-typed";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import { images as IMAGES } from "../../data/data";
const Marriage = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (index, item) => {
    setIndex(index);
  };

  const images = IMAGES.map((image) => ({
    ...image,

    CustomImage: {},
  }));

  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  // const gridGallery = document.getAnimations("ReactGridGallery_tile");
  // console.log(gridGallery);
  return (
    <div className="marriage">
      <div style={{ textAlign: "center" }}>
        <Typed
          style={{ fontSize: "30px", color: "orange", fontWeight: "600" }}
          strings={["Marriage events at a glance"]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
      <div
        className="photoGallery"
        id="photoGallery"
        style={{ padding: "10px" }}
      >
        <Gallery
          images={images}
          rowHeight={300}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
};

export default Marriage;
