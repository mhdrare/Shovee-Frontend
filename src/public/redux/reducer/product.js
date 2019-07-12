const initialState = {
    isLoading: true,
    isError: false,
    produk: []
}

export default product = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_PRODUCTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case 'POST_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
            }
        case 'GET_PRODUCTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                produk: action.payload.data
            }
        default:
            return state   
    }
}