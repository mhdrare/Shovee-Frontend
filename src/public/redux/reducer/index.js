import { combineReducers } from 'redux'

import products from './product'
import users from './user'
import auth from './auth'

const appReducer = combineReducers({
	auth,
    users,
    products
})

export default appReducer;