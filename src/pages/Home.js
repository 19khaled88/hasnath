import React from "react";

import "swiper/css";
// import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import "yet-another-react-lightbox/styles.css";
import Banner from "../components/Banner";
import "../css/open.css";

import Marriage from "../components/marriage/Marriage";
// import Birthday from "../components/birthday/Birthday";
// import Corporate from "../components/corporate/Corporate";

// import JustifiedGrid from 'react-justified-grid'

const Home = () => {
  return (
    <div>
      {<Banner />}
      <div className="home-container">
        <Marriage />
       
      </div>
    </div>
  );
};

export default Home;
