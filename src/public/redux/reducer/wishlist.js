import { AsyncStorage } from 'react-native'

const initialState = {
    data: {
        data: []
    },
    isLoading: false,
    isError: false,
    isLiked: false,
}

export default wishlist = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_WISHLIST_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_WISHLIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_WISHLIST_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLiked: false,
                data: action.payload.data
            }
        case 'POST_WISHLIST_PENDING':
            return {
                ...state,
                isLoading: true,
                isLiked: false,
            }
        case 'POST_WISHLIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLiked: false,
            }
        case 'POST_WISHLIST_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLiked: true,
                data: [action.payload.data.data].concat(state.data.data)
            }
        case 'DELETE_WISHLIST_PENDING':
                return {
                    ...state,
                    isLoading: true,
                    isLiked: false,
                }
        case 'DELETE_WISHLIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLiked: false,
            }
        case 'DELETE_WISHLIST_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isLiked: true,
                data: {
                    data: state.data.data.filter(wishlist => action.payload.data._id != wishlist._id)
                }
            }
        default: 
            return state
    }
}