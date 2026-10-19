import React from 'react'
import Product from '../Product/Product'
import products from '../Product/products.json'
import MetaData from '../Layout/MetaData'
import Carousel from './Carousel'
const Home = () => {
    console.log(products)
    return (
        <>
        <Carousel title={"Featured Products"} items={products} interval={4000} />
        <MetaData title={"Best Buy"} />
          <div className="container container-fluid">
                <h1 id="products_heading">Latest Products</h1>
                <section id="products" className="container mt-5">
                    <div className="row">
                        {products && products.map(product => (
                            // <Product key={product._id} product={product} />
                            <Product item={product} />


                        ))}
                    </div>
                </section>
            </div>


        </>
    )
}

export default Home