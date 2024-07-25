/* eslint-disable react/prop-types */
import InputPassword from "../../atoms/InputPassword"
import ButtonCopy from "../../atoms/ButtonCopy"
import ButtonSave from "../../atoms/ButtonSave"

function FormNewPassword({position}) {
    return(
        <>
            <form action="" className={`  w-72 h-32  flex flex-col gap-2 justify-center items-end relative ${position}`}>
                <p className={`w-full pl-1 text-left text-zinc-400 font-normal`}>New Password</p>
                <div className="relative w-72 h-11 rounded-xl">
                    <InputPassword size={`w-72 h-11`} placeholderLabel={'qwdqw#334.)'}/>
                    <ButtonCopy size={`w-10 h-10`} sizeIcon={`size-6`} position={`absolute inset-y-0 right-2 z-50`} colorIcon={`text-white`}/>
                </div>
                <ButtonSave size={`w-32 h-10 text-sm`} />

            </form>
        </>
    )
}

export default FormNewPassword