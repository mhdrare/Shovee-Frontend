import { AsyncStorage } from 'react-native'

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
	token: '',
	isLogin: false
}

export default auth = async (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false,
                isLogin: false,
			}
		case 'LOGIN_FULFILLED':
			await AsyncStorage.setItem('Token', action.payload.data.token);
			// await AsyncStorage.setItem('Login', state.isLogin);
			console.log(state)
			return {
				...state,
				isLoading: false,
				isLogin: true,
				token: action.payload.data.token,
				data: action.payload.data.data
			}
		case 'LOGIN_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
                isLogin: false,
			}
		case 'FORGET_PASSWORD_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false
			}
		case 'FORGET_PASSWORD_FULFILLED':
			return {
				...state,
				isLoading: false,
			}
		case 'FORGET_PASSWORD_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true
			}
		default:
            return state;
	}
}