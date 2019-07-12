import axios from 'axios'

const url = 'https://pure-fjord-88379.herokuapp.com/cart'

export const fetchCart = () => {
    return {
        type: 'GET_CART',
        payload: axios.get(`${url}`, {
            headers: {
                'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDI2MDVhNDBjYWYwNTBmOWNhY2QyYjYiLCJpYXQiOjE1NjI4MjczMjB9.PYF2rJAEZXm0teJSij1-BDoBXvCDgZcy33g2NH27F3o'
            }
        })
    }
}

export const postCart = (id) => {
    return {
        type: 'POST_CART',
        payload: axios.post(`${url}`, {
            product: id
        }, {
            headers: {
                'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDI2MDVhNDBjYWYwNTBmOWNhY2QyYjYiLCJpYXQiOjE1NjI4MjczMjB9.PYF2rJAEZXm0teJSij1-BDoBXvCDgZcy33g2NH27F3o'
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