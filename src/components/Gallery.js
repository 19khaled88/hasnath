import React, { useEffect, useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "../css/gallery.css";
import { event } from "../data/data";
import $, { type } from "jquery";
import Isotope from "isotope-layout";
const Gallery = () => {
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const [filterKey, setFilterKey] = useState("*");
  const [gallery, setGallery] = useState('')
  const [filters, setFilters] = useState("");
  const [sortsBy, setSortsBy] = useState("");
  const isotope = useRef();
  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  const handleGallery =(key)=>()=>setGallery(key)
  const handleIsotopKeyChange = (key) => () => {
    if (key.filter) {
      setFilters(key.filter);
    } else if (key.sortBy) {
      setSortsBy(key.sortBy);
    }
    // if (typeof key === "string") {
    //   const temp = key.replace("and", ",");

    //   setFilters(temp);
    // } else if (typeof key === "object") {
    //   setSortsBy(key.sortBy);
    // }
  };


  const filterFunction = (event) => {
    let newArray = [];
    let array = [...new Set(event.map((item) => item.type))];
    array.map((item,index) => {
      newArray.push(
        <button onClick={handleGallery(`.${item}`)} key={index} className="button" data-filter={`.${item}`}>
          {item}
        </button>
      );
    });
    return newArray;
  };

  // useEffect(() => {
  //   isotope.current = new Isotope(".filter-container", {
  //     itemSelector: ".filter-item",
  //     layoutMode: "fitRows",
  //   });
  //   // cleanup
  //   return () => isotope.current.destroy();
  // }, []);

  // useEffect(() => {
  //   filterKey === "*"
  //     ? isotope.current.arrange({ filter: `*` })
  //     : isotope.current.arrange({ filter: `.${filterKey}` });
  // }, [filterKey]);

  //----------------------------------------//

  useEffect(() => {
    isotope.current = new Isotope(".fullGrid", {
      itemSelector: ".element-item",
      layoutMode: "fitRows",
    });
    //cleanup
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    // filters === ""
    //   ? isotope.current.arrange({ filter: "" })
    //   : isotope.current.arrange({ filter: `.${filters}` });

    filters === "" && sortsBy === ""
      ? isotope.current.arrange({ filter: "" }, { sortBy: "" })
      : filters !== "" && sortsBy === ""
      ? isotope.current.arrange({ filter: `${filters}` }, { sortBy: "" })
      : filters === "" && sortsBy !== ""
      ? isotope.current.arrange({ filter: "" }, { sortBy: `${sortsBy}` })
      : isotope.current.arrange(
          { filter: `${filters}` },
          { sortBy: `${sortsBy}` }
        );
  }, [filters, sortsBy]);

  
  const photos = event.map((photo) => ({
    src: photo.image,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        width: breakpoint,
        height,
      };
    }),
  }));

  return (
    <div className="pt-16 mr-5 ml-5">
      <div id="filters" className="button-group">
        <button className="button is-checked" data-filter="*">
          show all
        </button>
        {filterFunction(event)}
      </div>
      <PhotoAlbum photos={photos} layout="rows" />
      <>
        <ul>
          <li onClick={handleFilterKeyChange("*")}>Show Both</li>
          <li onClick={handleFilterKeyChange("vege")}>Show Veges</li>
          <li onClick={handleFilterKeyChange("fruit")}>Show Fruits</li>
        </ul>
        <hr />
        <ul className="filter-container">
          <div className="filter-item vege">
            <span>Cucumber</span>
          </div>
          <div className="filter-item fruit">
            <span>Apple</span>
          </div>
          <div className="filter-item fruit">
            <span>Orange</span>
          </div>
          <div className="filter-item fruit vege">
            <span>Tomato</span>
          </div>
        </ul>
      </>

      <h2>Filter</h2>
      <div id="filters" className="button-group">
        {" "}
        <button
          onClick={handleIsotopKeyChange({ filter: "" })}
          className="button is-checked"
          data-filter="*"
        >
          show all
        </button>
        <button
          onClick={handleIsotopKeyChange({ filter: ".metal" })}
          className="button"
          data-filter=".metal"
        >
          metal
        </button>
        <button
          onClick={handleIsotopKeyChange({ filter: ".transition" })}
          className="button"
          data-filter=".transition"
        >
          transition
        </button>
        <button
          onClick={handleIsotopKeyChange({
            filter: ".alkali, .alkaline-earth",
          })}
          className="button"
          data-filter=".alkali, .alkaline-earth"
        >
          alkali and alkaline-earth
        </button>
        <button
          onClick={handleIsotopKeyChange({ filter: ":not(.transition)" })}
          className="button"
          data-filter=":not(.transition)"
        >
          not transition
        </button>
        <button
          onClick={handleIsotopKeyChange({ filter: ".metal:not(.transition)" })}
          className="button"
          data-filter=".metal:not(.transition)"
        >
          metal but not transition
        </button>
        <button
          onClick={handleIsotopKeyChange({ filter: "numberGreaterThan50" })}
          className="button"
          data-filter="numberGreaterThan50"
        >
          number `{">"}` 50
        </button>
        <button
          onClick={handleIsotopKeyChange({ filter: "ium" })}
          className="button"
          data-filter="ium"
        >
          name ends with &ndash;ium
        </button>
      </div>

      <h2>Sort</h2>
      <div id="sorts" className="button-group">
        {" "}
        <button
          onClick={handleIsotopKeyChange({ sortBy: "original-order" })}
          className="button is-checked"
          data-sort-by="original-order"
        >
          original order
        </button>
        <button
          onClick={handleIsotopKeyChange({ sortBy: "name" })}
          className="button"
          data-sort-by="name"
        >
          name
        </button>
        <button
          onClick={handleIsotopKeyChange({ sortBy: "symbol" })}
          className="button"
          data-sort-by="symbol"
        >
          symbol
        </button>
        <button
          onClick={handleIsotopKeyChange({ sortBy: "number" })}
          className="button"
          data-sort-by="number"
        >
          number
        </button>
        <button
          onClick={handleIsotopKeyChange({ sortBy: "weight" })}
          className="button"
          data-sort-by="weight"
        >
          weight
        </button>
        <button
          onClick={handleIsotopKeyChange({ sortBy: "category" })}
          className="button"
          data-sort-by="category"
        >
          category
        </button>
      </div>
      <div className="mx-auto">
        <div className="fullGrid grid-flow-row auto-rows-max grid-cols-3 pb-36">
          <div
            className="element-item transition metal "
            data-category="transition"
          >
            <h3 className="name">Mercury</h3>
            <p className="symbol">Hg</p>
            <p className="number">80</p>
            <p className="weight">200.59</p>
          </div>
          <div className="element-item metalloid " data-category="metalloid">
            <h3 className="name">Tellurium</h3>
            <p className="symbol">Te</p>
            <p className="number">52</p>
            <p className="weight">127.6</p>
          </div>
          <div
            className="element-item post-transition metal "
            data-category="post-transition"
          >
            <h3 className="name">Bismuth</h3>
            <p className="symbol">Bi</p>
            <p className="number">83</p>
            <p className="weight">208.980</p>
          </div>
          <div
            className="element-item post-transition metal "
            data-category="post-transition"
          >
            <h3 className="name">Lead</h3>
            <p className="symbol">Pb</p>
            <p className="number">82</p>
            <p className="weight">207.2</p>
          </div>
          <div
            className="element-item transition metal "
            data-category="transition"
          >
            <h3 className="name">Gold</h3>
            <p className="symbol">Au</p>
            <p className="number">79</p>
            <p className="weight">196.967</p>
          </div>
          <div className="element-item alkali metal " data-category="alkali">
            <h3 className="name">Potassium</h3>
            <p className="symbol">K</p>
            <p className="number">19</p>
            <p className="weight">39.0983</p>
          </div>
          <div className="element-item alkali metal " data-category="alkali">
            <h3 className="name">Sodium</h3>
            <p className="symbol">Na</p>
            <p className="number">11</p>
            <p className="weight">22.99</p>
          </div>
          <div
            className="element-item transition metal "
            data-category="transition"
          >
            <h3 className="name">Cadmium</h3>
            <p className="symbol">Cd</p>
            <p className="number">48</p>
            <p className="weight">112.411</p>
          </div>
          <div
            className="element-item alkaline-earth metal "
            data-category="alkaline-earth"
          >
            <h3 className="name">Calcium</h3>
            <p className="symbol">Ca</p>
            <p className="number">20</p>
            <p className="weight">40.078</p>
          </div>
          <div
            className="element-item transition metal "
            data-category="transition"
          >
            <h3 className="name">Rhenium</h3>
            <p className="symbol">Re</p>
            <p className="number">75</p>
            <p className="weight">186.207</p>
          </div>
          <div
            className="element-item post-transition metal "
            data-category="post-transition"
          >
            <h3 className="name">Thallium</h3>
            <p className="symbol">Tl</p>
            <p className="number">81</p>
            <p className="weight">204.383</p>
          </div>
          <div className="element-item metalloid " data-category="metalloid">
            <h3 className="name">Antimony</h3>
            <p className="symbol">Sb</p>
            <p className="number">51</p>
            <p className="weight">121.76</p>
          </div>
          <div
            className="element-item transition metal "
            data-category="transition"
          >
            <h3 className="name">Cobalt</h3>
            <p className="symbol">Co</p>
            <p className="number">27</p>
            <p className="weight">58.933</p>
          </div>
          <div
            className="element-item lanthanoid metal inner-transition "
            data-category="lanthanoid"
          >
            <h3 className="name">Ytterbium</h3>
            <p className="symbol">Yb</p>
            <p className="number">70</p>
            <p className="weight">173.054</p>
          </div>
          <div
            className="element-item noble-gas nonmetal "
            data-category="noble-gas"
          >
            <h3 className="name">Argon</h3>
            <p className="symbol">Ar</p>
            <p className="number">18</p>
            <p className="weight">39.948</p>
          </div>
          <div
            className="element-item diatomic nonmetal "
            data-category="diatomic"
          >
            <h3 className="name">Nitrogen</h3>
            <p className="symbol">N</p>
            <p className="number">7</p>
            <p className="weight">14.007</p>
          </div>
          <div
            className="element-item actinoid metal inner-transition "
            data-category="actinoid"
          >
            <h3 className="name">Uranium</h3>
            <p className="symbol">U</p>
            <p className="number">92</p>
            <p className="weight">238.029</p>
          </div>
          <div
            className="element-item actinoid metal inner-transition "
            data-category="actinoid"
          >
            <h3 className="name">Plutonium</h3>
            <p className="symbol">Pu</p>
            <p className="number">94</p>
            <p className="weight">(244)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
