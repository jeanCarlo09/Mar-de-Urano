import React from "react";
import { Link, graphql } from "gatsby";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import get from "lodash/get";

import rootReducer from "../redux/reducers/rootReducer";

import { fetchCollections } from "../redux/actions/collectionActions";

import MarDeUranoApp from "../components/MarDeUranoApp";
import ShopLayout from "../components/layouts/ShopLayout";
import CollectionsApp from "../components/CollectionsApp";

const Collections = ({ data: { allShopifyCollection: { nodes: collections } }, location }) => {
  //   const collections = get(data, "allShopifyCollection.nodes");

  console.log('location', location);

  let store;

  if (typeof window !== `undefined`) {
    store = createStore(
      rootReducer,
      load(),
      composeWithDevTools(applyMiddleware(thunk, save()))
    );
  } else {
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    );
  }

  store.dispatch(fetchCollections(collections));

  return (
    <Provider store={store}>
      <MarDeUranoApp>
        <ShopLayout headerTop="visible">
          <div className="shop-area pt-60 pb-100">
            <div className="container-fluid">
              <div className="grid-mosaic">

                {collections.map(collection => (

                  <div className="card" style={{ backgroundImage: `url(${collection.image.localFile.childImageSharp.fixed.src})` }}>
                    <div className="card-content">
                      <Link key={collection.id} to={`/collections?${collection.handle}`}>
                        <h4 className="card-content-title">{collection.title}</h4>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <CollectionsApp></CollectionsApp> */}
        </ShopLayout>
      </MarDeUranoApp>
    </Provider>
  );
};

export const query = graphql`
  query Collections {
    allShopifyCollection(sort: { fields: [title] }) {
      nodes {
        id
        title
        handle
        image {
          localFile {
            childImageSharp {
              fixed(width: 600, height: 800) {
                src
              }
            }
          }
        }
        products {
          title
          shopifyId
          handle
          description
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          variants {
            shopifyId
            availableForSale
            title
            selectedOptions {
              name
              value
            }
          }
          images {
            localFile {
              childImageSharp {
                fixed(width: 600, height: 800) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;




export default Collections;
