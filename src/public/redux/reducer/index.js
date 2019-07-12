import { combineReducers } from 'redux'

import products from './product'
import users from './user'
import auth from './auth'
import cart from './cart'

const appReducer = combineReducers({
	auth,
    users,
    cart,
    products
})

export default appReducer;
