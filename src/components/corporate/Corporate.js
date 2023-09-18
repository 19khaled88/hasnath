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

  setTimeout(() => {
    const reactPhotoGallery = document.getElementsByClassName(
      "react-photo-gallery--gallery"
    )[0];
    const temp = reactPhotoGallery.querySelectorAll("img");
    for (let x = 0; x < temp.length; x++) {
      var elem = document.createElement('div')
      elem.setAttribute('width',temp[x].width)
      elem.setAttribute('height',temp[x].height)
      elem.className = 'newImg'
      if(temp[x].id  ){
        console.log(temp[x].width)
        temp[x].setAttribute('100%')
        temp[x].setAttribute('100%')
        let child1 = reactPhotoGallery.querySelector('div').appendChild(elem)
        child1.appendChild(temp[x])
      }
    }
  }, 1000);



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
