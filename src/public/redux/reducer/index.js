import { combineReducers } from 'redux'

import products from './product'
import users from './users'
import auth from './auth'

const appReducer = combineReducers({
	auth,
    users,
    products,
})

export default appReducer;