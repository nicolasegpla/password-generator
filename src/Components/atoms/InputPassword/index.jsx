import './inputpassword.css'
import { useRef } from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../../context/global/GlobalState'
/* eslint-disable react/prop-types */
function InputPassword({size, placeholderLabel, value, inputFn, type, readOnly}) {

    const { setValueInputNewPassword } = useContext(GlobalState)

    const refInput = useRef('')

    setTimeout(() => {
        setValueInputNewPassword(refInput)
    },'500ms')

    return(
        <>
            <input type={type} readOnly={readOnly} onChange={inputFn} ref={refInput} placeholder={placeholderLabel} defaultValue={value} className={`myshadow ${size} font-medium bg-stone-800 type="text rounded-xl px-3 relative border-none text-white`} />
            
        </>
    )
}

export default InputPassword