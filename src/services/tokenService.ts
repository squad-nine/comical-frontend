type User = {
    username: string,
    email: string
}

type TokenPayload = {
    exp: number,
    user: User
}

export function setToken(token: string) {
    localStorage.setItem('token', token)
}

export function getToken() {
    const token = localStorage.getItem('token')
    return token
}

function decode(token: string) {
    const payload: TokenPayload = JSON.parse(window.atob(token.split('.').at(1)!))
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        throw new Error('Token has expired')
    } else {
        return payload.user
    }
}

export function getUserFromToken(): User | null {
    const token = getToken()
    if(token) {
        try {
            return decode(token)
        } catch (e: any) {
            return null
        }
    } else {
        return null
    }
}

export function removeToken() {
    localStorage.removeItem('token')
}