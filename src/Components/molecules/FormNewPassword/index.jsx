/* eslint-disable react/prop-types */
import { useContext } from "react"
import { useSelector } from 'react-redux'
import { useFunctions } from "../../../redux/helpers/useFunctions"
import { GlobalState } from "../../../context/global/GlobalState"
import InputPassword from "../../atoms/InputPassword"
import ButtonCopy from "../../atoms/ButtonCopy"
import ButtonSave from "../../atoms/ButtonSave"


function FormNewPassword({position}) {

    const {valueInputNewPassword, savePassword} = useContext(GlobalState)
    const {copyPasswordfn, getNamePassword, upDatePasswordfn, saveData } = useFunctions()

    const {value} = useSelector((state) => state.newPassword)
    
    return(
        <>
            <form action="" className={`  w-72 h-44  flex flex-col gap-2 justify-center items-end relative ${position}`}>
               
                <p className={`w-full pl-1 text-left text-zinc-400 font-normal`}>New Password</p>
                    {
                        savePassword ? <InputPassword inputFn={getNamePassword} placeholderLabel={'ex: Facebook'} size={`w-72 h-11`} /> : null
                    }
                
                <div className="relative w-72 h-11 rounded-xl">
                    <InputPassword readOnly={'readOnly'} type={'text'} inputFn={upDatePasswordfn} size={`w-72 h-11`} placeholderLabel={'ex: qwdqw#334.)'} value={value}/>
                    <ButtonCopy copyPassword={() => copyPasswordfn(valueInputNewPassword.current.value)} size={`w-10 h-10`} sizeIcon={`size-6`} position={`absolute inset-y-0 right-2 z-50`} colorIcon={`text-white`}/>
                </div>
                {
                    !savePassword ? <ButtonSave label={'Save Password'} buttonFn={saveData} size={`w-32 h-10 text-sm`} bgColor={'bg-indigo-600'} /> : <ButtonSave label={'Confirm'} buttonFn={saveData} size={`w-32 h-10 text-sm`} bgColor={'bg-fuchsia-500'} />
                }
                

            </form>
        </>
    )
}

export default FormNewPassword