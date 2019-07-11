const initialState = {
    isLoading: true,
    isError: false,
    produk: []
}

export default product = (state = initialState, action) => {
    switch(action.type){
        case 'POST_PRODUCT_PENDING':
        case 'UPDATE_PRODUCT_PENDING':
        case 'PATCH_PRODUCT_PENDING':
        case 'GET_PRODUCT_PENDING':
        case 'GET_SELECTED_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_PRODUCT_REJECTED':
        case 'POST_PRODUCT_REJECTED':
        case 'PATCH_PRODUCT_REJECTED':    
        case 'GET_SELECTED_PRODUCT_REJECTED':
        case 'DELETE_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        
        
        
    }
}