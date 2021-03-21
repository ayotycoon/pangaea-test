
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { currencyFormatter, getProducts } from '../../../Providers/misc';
import { closeCartModal,patchCart,setCurrency,removeProductFromCart,setProducts } from '../../../store/actions/app.action';
import ProductCount from '../ProductCount/ProductCount';
import './CartModal.scss';
import  gql from 'graphql-tag';
import { Query } from '@apollo/react-components';

const GET_CURRENCIES_QUERY = gql`
query {
    
        currency
      
}

`;


const CartModal = (props) => {
    const carts = Object.values(props.app.cart);
    
    const totalPrice = carts.length ? carts.reduce((t,b) =>  t + (b.price * b.quantity),0) : 0;

    return (
       props.app.cartOpened ?  <div className='CartModal'>
            <div className={"CartModalInner " + (props.app.cartOpened ? "slideIn": "slideOut")}>
              
                    <div className='cart-header'>
                        <div>
                            <div onClick={()=> {
                                props.closeCartModal()
                            }} className='close-modal'>
                                <img src='./close-modal.svg'></img>
                            </div>


                        </div>
                        <div className='cart-title'>YOUR CART</div>
                        <div></div>
                    </div>
                    <select onChange={async (e) => {
                    
                       props.setCurrency(e.target.value);
                       const newProducts = await getProducts(e.target.value);
                       props.setProducts(newProducts)
                    }} value={props.app.currency}>
                    <Query query={GET_CURRENCIES_QUERY}>
{
    ({loading,error,data}) =>{
    
        return  data ? data.currency.map(currency => {
            return (

                <option key={currency} value={currency}>{currency}</option>
            )
        }) : ""

    }
}
                    </Query>
                

                    </select>
                    <br />
                    <br />
                    <div className="cartlist-container">
                    {carts.length == 0 &&<div>You have no products in your cart</div>}
                    {carts.map(product => {
                        return (

                            <div key={product.id} className='cart-item'>
                                <div className='cart-item-flex'>
                                    <div className='cart-item-left'>
                                        <span className='text-field cart-product-title' style={{fontWeight:'500'}}>
                                            {product.title}
                                        </span>
                                        <span className='text-field'>
                                            MADE FOR: <small  className='text-field text-field-small d-inline'>all</small>
                                        </span>
                                        <span className='text-field text-field-small'>
                                            <small>Combination | 25-34</small>
                                        </span>
                                        <span className='text-field text-field-small'>
                                            <small>One time purchase of Two Month supply.</small>
                                        </span>


                                        <div className='cart-item-bottom'>
                                    
                                        <ProductCount value={product.quantity} onAdd={(newValue) => {
product.quantity = newValue
props.patchCart(product)
                                        }} />


<span className='bottom-currency'>
{props.app.currency} {currencyFormatter(product.price * product.quantity) }
</span>



    </div>

                                    </div>
                                  

<div className='cart-item-right'>
<div className='cart-item-remove'>
    <div onClick={()=> {
                                props.removeProductFromCart(product)
                            }}>
                              x
                            </div>

        </div>
<div className='img-container'>
 
                    <img src={product.image_url}></img>
                    </div>
    </div>
                                </div>

                            </div>
                        )
                    })}


                </div>
              
                <div className="cartlist-container-footer">
                    <div className="cartlist-container-footer-header">
                        <div>Subtotal</div>
                       <div> <b>{props.app.currency}  {currencyFormatter(totalPrice)}</b></div>
                    </div>
<br />
<br />
                    <button className='button proceed-checkout'>
                                   PROCEED TO CHECKOUT
                                </button>

                </div>
            </div>
        </div>:<></>

    )


}

const mapStateToProps = (state) => ({

    app: state.app,

  })
  
export default connect(mapStateToProps, { closeCartModal,patchCart,setCurrency,removeProductFromCart,setProducts })(CartModal) 



