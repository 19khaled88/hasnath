import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";

import "../../css/marriage.css";

import { images as IMAGES } from "../../data/data";
const ImageGallery = () => {


  const images = IMAGES.map((image) => ({
    ...image,
  }));


  return (
    <div className="marriage">
      <div
        className="photoGallery"
        id="photoGallery"
        style={{ padding: "10px" }}
      >
        <Gallery
          images={images}
          rowHeight={300}
        />
      
      </div>
    </div>
  );
};

export default ImageGallery;
