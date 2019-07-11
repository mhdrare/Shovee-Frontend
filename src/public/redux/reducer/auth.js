import { AsyncStorage } from 'react-native'

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
	token: []
}

export default auth = async (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false
			}
		case 'LOGIN_FULFILLED':
			return {
				...state,
				isLoading: false,
			}
		case 'LOGIN_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true
			}
		default:
            return state;
	}
}