import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'


// fixed bug
const initialState = {}
const middleware = [thunk]


const compose_ = compose(applyMiddleware(...middleware))


const store = createStore(rootReducer, initialState, 
  compose_
    )

export {store, Provider};