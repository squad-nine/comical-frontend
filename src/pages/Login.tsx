import { useContext, type FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'

import { authRequest } from '@services/userService'
import EmailField from '@components/Fields/Email'
import PasswordField from '@components/Fields/Password'
import { UserContext } from '../App'

const Login = () => {

    const navigate = useNavigate()

    const [ user, setUser ] = useContext(UserContext)

    return (
        <div className="h-full w-full py-16 px-4 bg-sky-400">
            <div className="flex flex-col items-center justify-center">
                <Formik initialValues={{ email: '', password: '', passwordConfirm: '' }} onSubmit={ ({ email, password }, { setSubmitting, setStatus }) => {
                    setSubmitting(true)
                    authRequest('login', email, password)
                        .then(authenticated => {
                            setUser(authenticated)
                            navigate('/comics')
                        })
                        .catch(e => {
                            setStatus({ success: false, message: `Sorry, an unexpected ${e.message} has occured.`})
                            setSubmitting(false)
                        })
                }}>
                    {({ isSubmitting, status }) => (
                        <Form className="text-white border-8 border-black shadow-hard-border bg-dots-pattern bg-dots-color lg:w-1/3  md:w-1/2 w-full p-10 mt-16 flex flex-col gap-6">
                            <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-outline-black text-2xl font-extrabold leading-6">Sign In</p>
                            <p className="text-sm mt-4 font-medium leading-none stroke-black">
                                Need an account?{" "}
                                <Link to="/signup">
                                    <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline cursor-pointer">
                                        Sign up here
                                    </span>
                                </Link>
                            </p>
                            <Field as={EmailField} name="email" />
                            <Field as={PasswordField} name="password" />
                            { status && !status.success ? (
                                <div className="border-2 border-hero-yellow p-2 bg-black bg-opacity-50">{status.message}</div>
                            ) : null }
                            <div className="mt-8">
                                <button type="submit" role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full disabled:cursor-wait disabled:bg-indigo-400" disabled={isSubmitting}>Sign in</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login
