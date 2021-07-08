import React from "react";
import { graphql } from "gatsby";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import get from "lodash/get";

import rootReducer from "../redux/reducers/rootReducer";

import { fetchCollectionDetails, fetchCollections } from "../redux/actions/collectionActions";

import MarDeUranoApp from "../components/MarDeUranoApp";
import ShopLayout from "../components/layouts/ShopLayout";
import CollectionsApp from "../components/CollectionsApp";

const Collections = ({ data, location }) => {
  //   const collections = get(data, "allShopifyCollection.nodes");

  const handle = location.search.substring(1, location.search.length);
  const collections = data.allShopifyCollection.nodes;

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

  console.log([...collections, ...collections]);


  // (handle !=)
  // collections = [...collections, ...collections, ...collections, ...collections, ...collections, ...collections];

  (handle != '' && handle != undefined) ? store.dispatch(fetchCollectionDetails(handle)) : store.dispatch(fetchCollections(collections));

  return (
    <Provider store={store}>
      <MarDeUranoApp>
        <CollectionsApp></CollectionsApp>
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
        description
        descriptionHtml
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
