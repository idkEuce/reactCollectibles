import React from 'react'
import Product from '../Product/Product'
import products from '../Product/products.json'
import MetaData from '../Layout/MetaData'
import Carousel from './Carousel'
const Home = () => {
    console.log(products)
    return (
        <>
        <Carousel className="product-section" title={"Featured Products"} items={products} interval={4000} />
        <MetaData title={"Best Buy"} />
         <section id="products" className="products-section">
                <h1 id="products_heading">Latest Products</h1>
                <div className="products-grid">
                        {products && products.map(product => (
                            // <Product key={product._id} product={product} />
                            <Product item={product} />


                        ))}
                    </div>
                </section>
        </>
    )
}

export default Home