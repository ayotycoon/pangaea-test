
import { types } from '../actions/app.action'


const initialState = {

   
    cart: {},
cartOpened: false,
currency: 'USD',
products:[]

}

export default (state = initialState, action) => {
    switch (action.type) {
    
        
        case types.SET_CART:

        const newCart = {...state.cart};

        if(newCart[action.payload.id]){
            newCart[action.payload.id].quantity++;
        }else {
            newCart[action.payload.id] = {
                ...action.payload,quantity:1
            }
        }
       
            return {
                ...state, cart: newCart,cartOpened:true
            }
        
        case types.PATCH_CART:

        const newCart2 = {...state.cart};

    
            newCart2[action.payload.id] = action.payload


            return {
                ...state, cart: newCart2
            }
     
        
        case types.REMOVE_FROM_CART:

        const newCart3 = {...state.cart};

    
            delete newCart3[action.payload.id];
     
       
            return {
                ...state, cart: newCart3
            }
        case types.SET_CURRENCY:

      
    
        
            return {
                ...state, currency: action.payload
            }
     
case types.CLOSE_CART_MODAL:
    return {
        ...state, cartOpened:false
    }
case types.SET_PRODUCTS:

// check if theres an existing cart;
if(Object.keys(state.cart) == 0){
    return {
        ...state,products:action.payload
    }
}
const newCart4 = {...state.cart}
// update the prices
for(let product of action.payload){
    if(!newCart4[product.id]){
        continue;
    }
    newCart4[product.id].price = product.price;

}

return {
    ...state,products:action.payload,cart:newCart4
}



        default:
            return state;

    }

}