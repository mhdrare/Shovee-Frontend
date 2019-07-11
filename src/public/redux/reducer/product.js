const initialState = {
    isLoading: true,
    isError: false,
    produk: []
}

export default product = (state = initialState, action) => {
    switch(action.type){
        case 'POST_PRODUCTS_PENDING':
        case 'UPDATE_PRODUCTS_PENDING':
        case 'PATCH_PRODUCTS_PENDING':
        case 'GET_PRODUCTS_PENDING':
        case 'GET_SELECTED_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_PRODUCTS_REJECTED':
        case 'POST_PRODUCTS_REJECTED':
        case 'PATCH_PRODUCTS_REJECTED':    
        case 'GET_SELECTED_PRODUCTS_REJECTED':
        case 'DELETE_PRODUCTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        
        case 'GET_PRODUCTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                produk: action.payload.result.data
            }
        
        
    }
}