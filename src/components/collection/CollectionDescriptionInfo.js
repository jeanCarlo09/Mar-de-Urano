import PropTypes from "prop-types";
import React from "react";
import parse from "html-react-parser";

import { connect } from "react-redux";


const CollectionDescriptionInfo = ({
  collection
}) => {

  console.log('wtf', collection);

  return (
    <div className="product-details-content ml-70">
      <h2>{collection.title}</h2>

      <div className="pro-details-list">
        {parse(collection.descriptionHtml)}
      </div>
    </div>
  );
};

CollectionDescriptionInfo.propTypes = {
  collection: PropTypes.object.isRequired
};


export default CollectionDescriptionInfo;
