import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Sticky from "react-sticky-el";
import { getDiscountPrice } from "../../helpers/product";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import CollectionImageGallerySticky from "../../components/collection/CollectionImageGallerySticky";
import CollectionDescriptionInfo from "../../components/collection/CollectionDescriptionInfo";
import { graphql, useStaticQuery } from "gatsby";
import SliderCollection from "../slider/sliderCollection";

const CollectionDescriptionSticky = ({
  collection,
}) => {


  const { allContentfulSliderCollection } = useStaticQuery(graphql`
    query SliderCollection {
      allContentfulSliderCollection {
          nodes {
              banner {
                  fixed(width: 1920, quality: 100) {
                      src
                  }
              id
          }
          buttonText
          url
          subTitle
          title
        }
      }
    }
  `);


  return (
    <>
      <div className="shop-area pt-95 pb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <CollectionImageGallerySticky collection={collection} />
            </div>
            <div className="col-lg-6 col-md-6">
              <Sticky
                boundaryElement=".shop-area"
                style={{ position: "relative" }}
              >

                <CollectionDescriptionInfo collection={collection}></CollectionDescriptionInfo>
                {/* <ProductDescriptionInfo
                product={product}
                discountedPrice={discountedPrice}
                currency={currency}
                finalDiscountedPrice={finalDiscountedPrice}
                finalProductPrice={finalProductPrice}
                cartItems={cartItems}
                wishlistItem={wishlistItem}
                compareItem={compareItem}
                addToast={addToast}
              /> */}
              </Sticky>
            </div>
          </div>


        </div>
      </div>
      <div className="row mt-20">
        <SliderCollection sliderCollection={allContentfulSliderCollection.nodes}></SliderCollection>
      </div>
    </>
  );
};

CollectionDescriptionSticky.propTypes = {
  collection: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    collection: state.collectionData.collectionDetail,
  };
};

export default connect(mapStateToProps)(CollectionDescriptionSticky);
