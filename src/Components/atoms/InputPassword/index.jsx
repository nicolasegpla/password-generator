import './inputpassword.css'
/* eslint-disable react/prop-types */
function InputPassword({size, placeholderLabel}) {
    return(
        <>
            <input placeholder={placeholderLabel} className={`myshadow ${size} font-medium bg-stone-800 type="text rounded-xl px-3 relative border-none text-white`} />
        </>
    )
}

export default InputPassword