

export const relatedProductsShop = (relatedProducts, product) => {


    let products = relatedProducts.filter((item) => (item.shopifyId != product.shopifyId) ? item.productType === product.productType : false)
        .slice(0, 4);

    if (products.length < 4) {

        const productsByTags = relatedProducts.filter((item) => products.some(element => element.shopifyId != item.shopifyId) ? item.tags.some((tag) => product.tags.includes(tag)) : false);
        return products.concat(productsByTags.slice(products.length, 4));

    } else {
        return products
    }
}