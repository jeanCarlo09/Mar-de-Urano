import React from 'react';
import { CheckCategorie } from './CheckCategorie';
export const BlogSideBarCategories = ({ categories }) => {


    return (
        <section className="sidebar-widget mt-35 mb-30">
            <h3 className="widget-title blog-sidebar-title">Categories</h3>
            <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>
                            <div className="sidebar-widget-list-left blog-categories-item">
                                <CheckCategorie category={category}></CheckCategorie>
                                <span className="checkmark" />
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

        </section>
    );

}
