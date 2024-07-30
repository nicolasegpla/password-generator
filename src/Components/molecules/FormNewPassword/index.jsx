/* eslint-disable react/prop-types */
import { useContext } from "react"
import { useSelector } from 'react-redux'
import { useFunctions } from "../../../redux/helpers/useFunctions"
import { GlobalState } from "../../../context/global/GlobalState"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import InputPassword from "../../atoms/InputPassword"
import ButtonCopy from "../../atoms/ButtonCopy"
import ButtonSave from "../../atoms/ButtonSave"


function FormNewPassword({position}) {

    const {valueInputNewPassword, savePassword, nameValidator, passwordValidator, savePasswordIsOk} = useContext(GlobalState)
    const {copyPasswordfn, getNamePassword, upDatePasswordfn, saveData, nameValidatorfn } = useFunctions()

    const {value} = useSelector((state) => state.newPassword)
    const {namePassword} = useSelector((state) => state.inputData)
    console.log(namePassword)
    
    return(
        <>
            <form action="" className={`  w-72 h-auto  flex flex-col gap-2 justify-center items-end relative ${position}`}>
               
                <p className={`w-full pl-1 text-left text-zinc-400 font-normal`}>New Password</p>
                    {
                        savePassword ? <InputPassword value={namePassword} inputFn={getNamePassword} placeholderLabel={'ex: Facebook'} size={`w-72 h-11`} /> : null
                    }
                    {
                        nameValidator ? <p className='w-full text-left text-fuchsia-500 flex justify-start items-center gap-2'><ExclamationTriangleIcon className="size-5"/> Enter a valid name</p> : null
                    }
                    
                
                <div className="relative w-72 h-auto rounded-xl">
                    <InputPassword readOnly={'readOnly'} type={'text'} inputFn={upDatePasswordfn} size={`w-72 h-11`} placeholderLabel={'ex: qwdqw#334.)'} value={value}/>
                    {
                        passwordValidator ? <p className='w-full mt-2 text-left text-fuchsia-500 flex justify-start items-center gap-2'><ExclamationTriangleIcon className="size-5"/> Generate a password first</p> : null
                    }
                    {
                    savePasswordIsOk ? <p className='w-full text-left text-emerald-400 flex justify-start items-center gap-2 mt-2'><CheckBadgeIcon className="size-5"/> Password saved successfully</p> : null
                    }
                    <ButtonCopy copyPassword={() => copyPasswordfn(valueInputNewPassword.current.value)} size={`w-10 h-10`} sizeIcon={`size-6`} position={`absolute inset-y-0 right-2 z-50`} colorIcon={`text-white`}/>
                    
                </div>
                {
                    !savePassword ? <ButtonSave label={'Save Password'} buttonFn={saveData} size={`w-32 h-10 text-sm`} bgColor={'bg-indigo-600'} /> : <ButtonSave label={'Confirm'} buttonFn={nameValidatorfn} size={`w-32 h-10 text-sm`} bgColor={'bg-fuchsia-500'} type={'button'} />
                }
                
                

            </form>
        </>
    )
}

export default FormNewPassword