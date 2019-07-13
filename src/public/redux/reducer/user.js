import { AsyncStorage } from 'react-native'

const initialState = {
	isLoading: true,
	isError: false,
}

export default user = (state = initialState, action) => {
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
				data: state.data.map(user => 
					(user._id == action.payload.data.data._id) ? 
					action.payload.data.data : 
					data)
			}
		case 'UPDATE_PROFILE_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
			}
		case 'GET_PROFILE_PENDING':
			return {
				...state,
				isLoading: true,
			}
		case 'GET_PROFILE_REJECTED':
			return {
				...state,
				isLoading: false,
                isError: true,
			}
		case 'GET_PROFILE_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data
			}

		default:
            return state;
	}
}