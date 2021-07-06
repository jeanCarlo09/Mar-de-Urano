import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import { graphql, Link } from "gatsby";

import rootReducer from "../redux/reducers/rootReducer";

import MarDeUranoApp from "../components/MarDeUranoApp";
import ShopLayout from "../components/layouts/ShopLayout";
import { BlogPostList } from "../components/blog/BlogPostList";
import { BlogSideBar } from "../components/blog/BlogSideBar";
import { fetchBlogs, postSingleInfo } from "../redux/actions/blogActions";

const Blog = ({ data: { allContentfulBlogPost: { nodes: posts } }, location }) => {
  let store;

  const handle = location.search.substring(1, location.search.length);

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

  (handle != '' && handle != undefined) ? store.dispatch(postSingleInfo(handle)) : store.dispatch(fetchBlogs(posts));

  let state = store.getState().blogData;

  console.log('handle', state);

  return (
    <Provider store={store}>
      <MarDeUranoApp>
        <ShopLayout headerTop="visible">
          <div className="shop-area pt-80 pb-100">
            <div className="container-fluid">
              <div className="row">
                <BlogSideBar />
                <BlogPostList />
              </div>
            </div>
          </div>
        </ShopLayout>
      </MarDeUranoApp>
    </Provider>
  );
};

export const query = graphql`
query BlogPosts {
  allContentfulBlogPost {
    nodes {
      id
      title
      description {
        description
      }
      date
      handle
      author {
       name
      }
      image {
        fixed {
          src
        }
      }
    }
  }
}`;






export default Blog;
