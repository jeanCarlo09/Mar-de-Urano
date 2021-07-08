import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Paginator from "react-hooks-paginator";
import { connect, useSelector } from "react-redux";

import ShopLayout from "./layouts/ShopLayout";
import CollectionList from "./collection/CollectionList";
import CollectionDescriptionSticky from "../wrappers/collection/CollectionDescriptionSticky";
import SliderCollection from "../wrappers/slider/sliderCollection";

// import ProductGridContainer from "../components/product/ProductGridContainer";

const CollectionsApp = () => {

  const state = useSelector(state => state.collectionData);
  const { collections, collectionDetail } = state;

  console.log('collectionDetail', collectionDetail);

  return (
    <ShopLayout headerTop="visible">
      {/* <div className="shop-area pt-95 pb-100">
        <div className="container-fluid"> */}


      {(collectionDetail)
        ? <CollectionDescriptionSticky></CollectionDescriptionSticky>
        : <CollectionList></CollectionList>
      }

      {/* </div>
      </div> */}
    </ShopLayout>
  );
};

export default CollectionsApp;
