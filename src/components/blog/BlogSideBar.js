import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { useSelector } from 'react-redux';

export const BlogSideBar = ({ categories }) => {

    const state = useSelector(state => state.blogData);
    const { posts } = state;

    console.log('categories', categories);

    return (
        <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12 order-2 order-lg-1 pr-100">

            <aside className="blog-sidebar">
                <section className="sidebar-widget mt-35 mb-30">

                    <h4 className="pro-sidebar-title">Categories</h4>
                    <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
                        <ul>
                            <li>
                                <div className="sidebar-widget-list-left">
                                    <input type="checkbox" defaultValue />{" "}
                                    <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                                        Women <span>4</span>{" "}
                                    </Link>
                                    <span className="checkmark" />
                                </div>
                            </li>
                            <li>
                                <div className="sidebar-widget-list-left">
                                    <input type="checkbox" defaultValue />{" "}
                                    <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                                        Men <span>4</span>{" "}
                                    </Link>
                                    <span className="checkmark" />
                                </div>
                            </li>
                            <li>
                                <div className="sidebar-widget-list-left">
                                    <input type="checkbox" defaultValue />{" "}
                                    <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                                        Bags <span>4</span>{" "}
                                    </Link>
                                    <span className="checkmark" />
                                </div>
                            </li>
                            <li>
                                <div className="sidebar-widget-list-left">
                                    <input type="checkbox" defaultValue />{" "}
                                    <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                                        Accessories <span>4</span>{" "}
                                    </Link>
                                    <span className="checkmark" />
                                </div>
                            </li>
                        </ul>
                    </div>

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



                <div className="sidebar-widget">
                    <h4 className="pro-sidebar-title">Recent Projects </h4>
                    <div className="sidebar-project-wrap mt-30">
                        <div className="single-sidebar-blog">
                            <div className="sidebar-blog-img">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + "/assets/img/blog/sidebar-1.jpg"
                                        }
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="sidebar-blog-content">
                                <span>Photography</span>
                                <h4>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        T- Shart And Jeans
                                    </Link>
                                </h4>
                            </div>
                        </div>
                        <div className="single-sidebar-blog">
                            <div className="sidebar-blog-img">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                                        }
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="sidebar-blog-content">
                                <span>Branding</span>
                                <h4>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        T- Shart And Jeans
                                    </Link>
                                </h4>
                            </div>
                        </div>
                        <div className="single-sidebar-blog">
                            <div className="sidebar-blog-img">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + "/assets/img/blog/sidebar-3.jpg"
                                        }
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="sidebar-blog-content">
                                <span>Design</span>
                                <h4>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        T- Shart And Jeans
                                    </Link>
                                </h4>
                            </div>
                        </div>
                        <div className="single-sidebar-blog">
                            <div className="sidebar-blog-img">
                                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + "/assets/img/blog/sidebar-2.jpg"
                                        }
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="sidebar-blog-content">
                                <span>Photography</span>
                                <h4>
                                    <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                                        T- Shart And Jeans
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>


            </aside>
        </div>
    );
}

