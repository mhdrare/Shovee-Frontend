import { combineReducers } from 'redux'

import products from './product'
import users from './user'
import auth from './auth'
<<<<<<< HEAD
import categories from './categories'
=======
import cart from './cart'
>>>>>>> d5a939dbfdf7bdf306db9ec66fc23f4b0738d539

const appReducer = combineReducers({
	auth,
    users,
<<<<<<< HEAD
    products,
    categories
=======
    cart,
    products
>>>>>>> d5a939dbfdf7bdf306db9ec66fc23f4b0738d539
})

export default appReducer;
