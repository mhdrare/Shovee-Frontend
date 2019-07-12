import axios from 'axios'

const url = 'https://pure-fjord-88379.herokuapp.com/users'

export const updateImageProfile = (data) => {
    return {
        type: 'UPDATE_IMAGE_PROFILE',
        payload: axios.patch(`${url}/details`)
    }
}