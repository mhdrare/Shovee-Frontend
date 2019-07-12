import { combineReducers } from 'redux'

import products from './product'
import user from './user'
import auth from './auth'
import categories from './categories'
import cart from './cart'
import wishlist from './wishlist'

const appReducer = combineReducers({
	auth,
    user,
    products,
    categories,
    cart,
    wishlist
})

export default appReducer;
