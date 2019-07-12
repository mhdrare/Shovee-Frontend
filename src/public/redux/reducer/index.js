import { combineReducers } from 'redux'

import products from './product'
import users from './user'
import auth from './auth'
import categories from './categories'

import cart from './cart'

const appReducer = combineReducers({
	auth,
    users,
    products,
    categories,
    cart,
    products
})

export default appReducer;
