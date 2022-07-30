import axios from 'axios'
import { setToken } from '@services/tokenService'

type AuthResponse = {
    token: string
}

export async function authRequest(action: "signup" | "login", email: string, password: string) {
    const { data } = await axios.post<AuthResponse>(`/${action}`, { email, password })
    setToken(data.token)
}