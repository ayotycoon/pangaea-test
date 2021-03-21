
import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import './AllProducts.scss';


import { Query } from '@apollo/react-components';
import { apolloClient,getProducts, currencyFormatter } from '../../../Providers/misc';
import { setCart,setProducts } from '../../../store/actions/app.action';
import { connect } from 'react-redux';


const AllProducts = (props) => {
   
    const products = props.app.products
  



    useEffect(()=> {
        getProducts()
        .then(products => {
            props.setProducts(products)
        })
    },[])

    return (
        <div className='AllProducts'>
            <div className="">
                <div className="products-container">
                {products.map(product => {
            return (

                <div key={product.id} className='product'>
                    <div className='img-container'>
                    <img src={product.image_url}></img>
                    </div>
                    <span className='text-field text-field-small title'>
                        {product.title}
                            </span>
                    <span className='text-field'>
                        From: {props.app.currency} {currencyFormatter(product.price)}
                            </span>

                    <button onClick={()=> {
                        props.setCart(product)
                    }} className='button'>
                        Add to cart
                    </button>
                </div>
            )
        }) 

    }


                </div>
            </div>
        </div>

    )


}


const mapStateToProps = (state) => ({

    app: state.app,

  })
  
export default connect(mapStateToProps, { setCart,setProducts })(AllProducts) 



