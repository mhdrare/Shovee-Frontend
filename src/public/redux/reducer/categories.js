const intialState = {
    category: [],
    isLoading: false,
    isError: false
}

export default categories = (state = intialState, action) => {
    switch(action.type) {
        case 'GET_CATEGORIES_PENDING':
        case 'PATCH_CATEGORIES_PENDING':
        case 'POST_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_CATEGORIES_REJECTED':
        case 'POST_CATEGORIES_REJECTED':
        case 'PATCH_CATEGORIES_REJECTED':    
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case 'GET_CATEGORIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                category: action.payload.data
            }
        default:
            return state;
    }
}