import { type  FC } from 'react'
import { useToggle } from 'react-use'
import { useField, type FieldAttributes } from 'formik'

import { EyeSolid as EyeIcon, EyeOffSolid as EyeOffIcon } from '@graywolfai/react-heroicons'

type PasswordFieldProps = FieldAttributes<string> & {
    confirm: boolean
}

const PasswordField: FC<PasswordFieldProps> = props => {

    const { confirm } = props
    const [ passwordVisibility, togglePasswordVisibility ] = useToggle(false)

    const [ { name, ...field }, meta ] = useField(props)
    return (
    <div className="mt-6 w-full">
        <label htmlFor={name} className="text-sm font-medium leading-none">{ confirm ? 'Confirm' : null} Password</label>
        <div className="relative flex items-center justify-center">
            <input id={name} aria-label="enter Password" role="input" type={ passwordVisibility ? 'text' : 'password' } className="text-black bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none py-3 w-full pl-3 mt-2" {...field} />
            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                { passwordVisibility ? (
                    <EyeIcon width={16} height={16} className="stroke-black fill-black" onClick={togglePasswordVisibility} />
                    ) : (
                    <EyeOffIcon width={16} height={16} className="stroke-black fill-black" onClick={togglePasswordVisibility} />
                )}
            </div>
        </div>
    </div>
    )
}

export default PasswordField