import type { FC } from 'react'
import { useField, type FieldAttributes } from 'formik'
import ErrorMessage from '@components/ErrorMessage'

const CustomTextInput: FC<FieldAttributes<string>> = props => {
    const [ field, meta ] = useField<string>(props)
    const errorMessage = meta.error && meta.touched ? meta.error : undefined
    return (
        <div>
            <label className="text-outline-black" htmlFor={props.name}>{props.placeholder || props.name.at(0)?.toUpperCase() + props.name.slice(1)}</label>
            <input className="form-input bg-gray-200 border border-black text-xs font-medium leading-none w-full mt-2 text-black" type={props.type} id={props.name} {...field} />
            <ErrorMessage message={errorMessage} />
        </div>
    )
}

export const CustomTextAreaInput: FC<FieldAttributes<string>> = props => {
    const [ field, meta ] = useField<string>(props)
    return (
        <div>
            <label htmlFor={props.name}>{props.placeholder}</label><br />
            <textarea id={props.name} {...field} />
        </div>
    )
}

export default CustomTextInput