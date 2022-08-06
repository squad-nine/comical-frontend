import type { FC } from 'react'
import { useField, type FieldAttributes } from 'formik'

import ErrorMessage from '@components/ErrorMessage'

const EmailField: FC<FieldAttributes<string>> = props => {
    const [ { name, ...field}, meta ] = useField(props)
    const errorMessage = meta.error && meta.touched ? meta.error : undefined
    return (
        <div>
            <label htmlFor={name} className="text-sm font-medium leading-none">Email</label>
            <input id={name} aria-label="enter email adress" role="input" type="email" className="text-black bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none py-3 w-full pl-3 mt-2" {...field}/>
            <ErrorMessage message={errorMessage} />
        </div>
    )
}

export default EmailField