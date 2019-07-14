import axios from 'axios'

const url = 'https://stormy-springs-80236.herokuapp.com/checkout'

export const fetchCheckout= (token) => {
    return {
        type: 'GET_CHECKOUT',
        payload: axios.get(`${url}`, {
            headers: {
                'x-auth-token':token
            }
        })
    }
}

export const postCheckout = (data, token, playerId) => {
    return {
        type: 'POST_CHECKOUT',
        payload: axios.post(`${url}`, data, {
            headers: {
                'x-auth-token':token
            },
            params: {
                playerId
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