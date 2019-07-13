import axios from 'axios';

const url = 'https://stormy-springs-80236.herokuapp.com/categories';

export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get(url)
    }
}