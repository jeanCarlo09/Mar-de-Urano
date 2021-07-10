import React from 'react';
import ProductgridList from '../../components/product/ProductgridList';

export const RelatedProducts = ({ relatedProducts }) => {

    return (
        <section className="related products pt-90 columns-4">

            <div className="section-title text-center mb-50">
                <h2>Related products</h2>
            </div>

            <div className="row products columns-4">

                <ProductgridList products={relatedProducts} spaceBottomClass="mb-25" />

            </div>

        </section>
    );
}
