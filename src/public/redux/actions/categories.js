import axios from 'axios';

const url = 'https://pure-fjord-88379.herokuapp.com/categories';

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(url)
    }
}