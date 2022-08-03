import { useNavigate } from 'react-router-dom'

import { removeToken } from '@services/tokenService'

const SignoutButton = () => {

    const navigate = useNavigate()

    const signoutAction = () => {
        removeToken()
        navigate('/login')
    }

    return (
        <button type="button" onClick={signoutAction} className="self-end hover:opacity-90 bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 rounded-full text-white text-lg md:text-2xl f-f-p transition-opacity">Log Out</button>
    )
}

export default SignoutButton