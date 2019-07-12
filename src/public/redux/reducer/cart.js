const initialState = {
    isLoading: true,
    isError: false,
    data: [],
    page: 'Me'
}

export default product = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CART_PENDING':
        case 'POST_CART_PENDING':    
            return {
                ...state,
                isLoading: true
            }

        case 'GET_CART_REJECTED':
        case 'POST_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        
        case 'GET_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }

        case 'POST_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [...state.data, action.payload.data.data]
            }
		case 'PAGE':
			return {
				...state,
				page: action.payload
			}
        default:
            return state   
    }
}