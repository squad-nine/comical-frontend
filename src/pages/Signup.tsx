import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import YupPassword from 'yup-password'

import EmailField from '@components/Fields/Email'
import PasswordField from '@components/Fields/Password'
import { authRequest } from '@services/userService'
import { UserContext } from '../App'

YupPassword(yup)

const Signup = () => {

    const navigate = useNavigate()

    const [ user, setUser ] = useContext(UserContext)

    const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().password()
            .min(8)
            .minUppercase(1)
            .minSymbols(1)
            .required(),
        passwordConfirm: yup.string()
            .oneOf([ yup.ref('password'), null ], 'passwords must match')
            .required()
    })

    return (
        <div className="h-full w-full py-16 px-4 bg-sky-400">
            <div className="flex flex-col items-center justify-center">
                <Formik isInitialValid={false} validationSchema={validationSchema} initialValues={{ email: '', password: '', passwordConfirm: '' }} onSubmit={ ({ email, password }, { setSubmitting, setStatus }) => {
                    setSubmitting(true)
                    authRequest('signup', email, password)
                        .then(newUser => {
                            setUser(newUser)
                            navigate('/comics')
                        })
                        .catch(e => {
                            setStatus({ success: false, message: `Sorry, an unexpected ${e.message} has occured.`})
                            setSubmitting(false)
                        })
                }}>
                    {({ isSubmitting, status, isValid }) => (
                        <Form className="text-white border-8 border-black shadow-hard-border bg-dots-pattern bg-dots-color lg:w-1/3  md:w-1/2 w-full p-10 mt-16 flex flex-col gap-6">
                            <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-outline-black text-2xl font-extrabold leading-6">
                                Create a new account
                            </p>
                            <p className="text-sm mt-4 font-medium leading-none stroke-black">
                                Already have an account?{" "}
                                <Link to="/login">
                                    <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline cursor-pointer">
                                        Sign in here
                                    </span>
                                </Link>
                            </p>
                            <Field as={EmailField} name="email" />
                            <Field as={PasswordField} name="password" />
                            <Field as={PasswordField} confirm name="passwordConfirm" />
                            { status && !status.success ? (
                                <div className="border-2 border-hero-yellow p-2 bg-black bg-opacity-50">{status.message}</div>
                            ) : null }
                            <div className="mt-8">
                                <button type="submit" role="button" aria-label="create my account" className="disabled:opacity-80 disabled:cursor-not-allowed w-full bg-hero-red ring-4 ring-inset ring-hero-yellow border-2 border-hero-red py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-lg md:text-2xl f-f-p" disabled={isSubmitting || !isValid }>
                                    Create my account
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Signup
