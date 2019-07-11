import axios from 'axios'

const url = 'https://pure-fjord-88379.herokuapp.com/users'

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/authenticate`, {
            user: data.username,
            password: data.password,
        })
    }
}

export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: axios.post(`${url}/register`, {
            username: data.username,
            phone: data.phone,
            email: data.email,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirm,
        })
    }
}

export const forgetPassword = (email) => {
    return {
        type: 'FORGET_PASSWORD',
        payload: axios.post(`${url}/forgetpassword`, {
            email: email,
        })
    }
}