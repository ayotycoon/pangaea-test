
export const types = {
   SET_PRODUCTS : 'SET_PRODUCTS',
   SET_CART : 'SET_CART',
   PATCH_CART : 'PATCH_CART',
   SET_CURRENCY : 'SET_CURRENCY',
   REMOVE_FROM_CART : 'REMOVE_FROM_CART',
   CLOSE_CART_MODAL : 'CLOSE_CART_MODAL',
 
 
}


export const setCart = (data) => (dispatch) => {
    

        dispatch({
            type: types.SET_CART,
            payload: data
        })
   
}

export const patchCart = (data) => (dispatch) => {
    

        dispatch({
            type: types.PATCH_CART,
            payload: data
        })
   
}


export const removeProductFromCart = (data) => (dispatch) => {
    

        dispatch({
            type: types.REMOVE_FROM_CART,
            payload: data
        })
   
}


export const setCurrency = (data) => (dispatch) => {
    

        dispatch({
            type: types.SET_CURRENCY,
            payload: data
        })
   
}

export const closeCartModal = () => (dispatch) => {

        dispatch({
            type: types.CLOSE_CART_MODAL,
        })
   
}
export const setProducts = (data) => (dispatch) => {

        dispatch({
            type: types.SET_PRODUCTS,
            payload:data
        })
   
}