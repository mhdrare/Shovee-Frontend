import axios from 'axios'

const url = 'https://pure-fjord-88379.herokuapp.com/products'

export const fetchProducts = () => {
    return {
        type: 'GET_PRODUCTS',
        payload: axios.get(`${url}`)
    }
}