import axios from 'axios'

const url = 'https://stormy-springs-80236.herokuapp.com/cart'

export const fetchCart = (token) => {
    return {
        type: 'GET_CART',
        payload: axios.get(`${url}`, {
            headers: {
                'x-auth-token':token
            }
        })
    }
}

export const postCart = (id, token) => {
    return {
        type: 'POST_CART',
        payload: axios.post(`${url}`, {
            product: id
        }, {
            headers: {
                'x-auth-token':token
            }
        })
    }
}



export const changePage = (page) => {
    return {
        type: 'PAGE',
        payload: page
    }
}