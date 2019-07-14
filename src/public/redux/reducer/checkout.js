const initialState = {
    isLoading: true,
    isError: false,
    data: [],
}

export default product = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CHECKOUT_PENDING':
        case 'POST_CHECKOUT_PENDING':    
            return {
                ...state,
                isLoading: true
            }

        case 'GET_CHECKOUT_REJECTED':
        case 'POST_CHECKOUT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        
        case 'GET_CHECKOUT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        case 'POST_CHECKOUT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [...state.data, action.payload.data.data]
            }
        default:
            return state   
    }
}