import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox";
import "../../css/corporate.css";
import { corporate as IMAGES } from "../../data/data";
const Corporate = () => {
  const [index, setIndex] = useState(-1);
  
  const handleCorporateClick = (index, item) => {
    setIndex(item.index);
  };

  const images = IMAGES.map((image) => ({
    ...image,
  }));

  const corporateSlides = images.map(({ src, width, height }) => ({
    src: src,
    width,
    height,
  }));



  return (
    <div>
      {" "}
      <div
        className="corporate flex-col"
        style={{ backgroundColor: "#88A47C" }}
      >
        <div style={{ textAlign: "center" }}>
          <Typed
            style={{ fontSize: "30px", color: "white", fontWeight: "600" }}
            strings={["Corporate events at a glance"]}
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
            photos={images}
            onClick={handleCorporateClick}
            rowHeight={300}
            enableImageSelection={false}
          />
          <Lightbox
            slides={corporateSlides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </div>
      </div>
    </div>
  );
};

export default Corporate;
