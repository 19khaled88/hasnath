import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Typed from "react-typed";
import "../../css/gallery.css";
import Lightbox from "yet-another-react-lightbox";
import { images as IMAGES } from "../../data/data";
const Marriage = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (index, item) => {
    setIndex(index);
  };

  const images = IMAGES.map((image) => ({
    ...image,
  }));

  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  setTimeout(() => {
    const gridGallery = document.getElementsByClassName("ReactGridGallery");
    const temp = gridGallery[0].querySelector("div");
    const temp1 = temp.getElementsByClassName("ReactGridGallery_tile");
    
    
    for (let i = 0; i < Object.keys(temp1).length; i++) {
      let divElem1 = document.createElement("div");
      let divElem3 = document.createElement("div");
      
      divElem1.setAttribute("class", "hoverOverlay");
      divElem3.setAttribute("class", "hoverText");
      const divInsert = temp1[i].getElementsByClassName(
        "ReactGridGallery_tile-viewport"
      )[0];

      const divInsert1 = divInsert.appendChild(divElem1);
      divInsert1.appendChild(divElem3);
      divInsert
        .getElementsByTagName("div")[0]
        .getElementsByClassName("hoverText")[0].innerHTML = Object.values(images)[0].caption;
    }
  }, 1000);

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
