import axios from 'axios'

const url = 'https://pure-fjord-88379.herokuapp.com/users'

export const updateImageProfile = (data) => {
    return {
        type: 'UPDATE_IMAGE_PROFILE',
        payload: axios.patch(`${url}/details`)
    }
}

export const getUserDetail = (token) => {
	return {
		type: 'GET_PROFILE',
		payload: axios.get(`${url}/details`, {
			headers: { 'x-auth-token': token }
		})
	}
}

export const updateImage = (token, image) => {
	var data = new FormData()
	data.append('images', {
		uri: image.uri,
		name: image.fileName,
		type: 'image/jpg'
	})
	return {
       type: 'UPDATE_PROFILE',
       payload: axios.patch(`${url}/details`, data, {
           headers: {
               'x-auth-token': token
           }
       })
   }
}