import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { useSelector } from 'react-redux';

export const BlogSideBar = () => {

    const state = useSelector(state => state.blogData);
    const { posts } = state;

    return (
        <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12 order-2 order-lg-1 pr-100">

            <aside className="blog-sidebar">
                <section className="blog-sidebar-categories mb-30">
                    <h2 className="blog-sidebar-categories-title mt-2 blog-sidebar-title">Categories</h2>
                    <ul className="mt-2 blog-sidebar-categories-items list-group list-group-flush">
                        <li className="item list-group-item">
                            <a href="#">Lifestyle</a>
                        </li>
                        <li className="item list-group-item">
                            <a href="#">Template</a>
                        </li>
                        <li className="item list-group-item">
                            <a href="#">Uncategorized</a>
                        </li>
                    </ul>
                </section>

                <section className="widget widget_flone_recent_post">
                    <h2 className="widget-title blog-sidebar-title">Recent Posts</h2>
                    <ul className="sidebar-project-wrap mt-30 list-group list-group-flush">

                        {
                            posts.map(post => (
                                <li className="blog-sidebar-single mb-10 list-group-item" key={post.id}>
                                    <div className="blog-sidebar-single-img">

                                        <Link to={`/blog?${post.handle}`} >
                                            <img src={post.image.fixed.src} className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" />
                                        </Link>
                                    </div>

                                    <div className="blog-sidebar-single-content">
                                        <h5 className="blog-sidebar-single-content-title">
                                            <Link to={`/blog?${post.handle}`}>{post.title}</Link>
                                        </h5>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </section>
            </aside>
        </div>
    );
}

