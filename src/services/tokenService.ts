import axios from 'axios'

export type User = {
    username: string,
    email: string
}

type TokenPayload = {
    exp: number,
    user: User
}

export function setToken(token: string) {
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = token
}

export function getToken() {
    const token = localStorage.getItem('token')
    return token
}

function decode(token: string) {
    const payload: TokenPayload = JSON.parse(window.atob(token.split('.').at(1)!))
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        console.error('Expired')
        throw new Error('Token has expired')
    } else {
        return payload.user
    }
}

export function getUser(): User | undefined {
    const token = getToken()
    if(token) {
        try {
            return decode(token)
        } catch (e: any) {
            return undefined
        }
    } else {
        return undefined
    }
}

export function removeToken() {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
}