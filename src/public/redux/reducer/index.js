import { combineReducers } from 'redux'

import products from './product'
import users from './user'
import auth from './auth'
import categories from './categories'

const appReducer = combineReducers({
	auth,
    users,
    products,
    categories
})

export default appReducer;
