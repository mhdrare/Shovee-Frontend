import { combineReducers } from 'redux'

import products from './product'
import user from './user'
import auth from './auth'
import categories from './categories'
import cart from './cart'

const appReducer = combineReducers({
	auth,
    user,
    products,
    categories,
    cart,
})

export default appReducer;
