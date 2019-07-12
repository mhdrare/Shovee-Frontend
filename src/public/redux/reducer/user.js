import { AsyncStorage } from 'react-native'

const initialState = {
	data: [],
	isLoading: false,
	isError: false,
}

export default user = async (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_PROFILE_PENDING':
			return {
				...state,
				isLoading: true,
                isError: false,
			}
		case 'UPDATE_PROFILE_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data
			}
		case 'UPDATE_PROFILE_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
			}
		default:
            return state;
	}
}