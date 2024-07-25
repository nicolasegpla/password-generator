import { useSelector } from 'react-redux'
import './inputpassword.css'
import { useRef } from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../../context/global/GlobalState'
/* eslint-disable react/prop-types */
function InputPassword({size, placeholderLabel}) {

    const { setValueInputNewPassword } = useContext(GlobalState)

    const refInput = useRef('')

    
    
    setTimeout(() => {
        setValueInputNewPassword(refInput)
    },'500ms')

    const {value} = useSelector((state) => state.newPassword)
    console.log(value)

    return(
        <>
            <input ref={refInput} placeholder={placeholderLabel} value={value} className={`myshadow ${size} font-medium bg-stone-800 type="text rounded-xl px-3 relative border-none text-white`} />
        </>
    )
}

export default InputPassword