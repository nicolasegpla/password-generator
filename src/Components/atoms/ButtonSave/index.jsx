/* eslint-disable react/prop-types */
function ButtonSave({size, buttonFn, label, bgColor}) {

    return (
        <>
            <button type="button" onClick={buttonFn} className={`${bgColor} ${size} rounded-xl border-none font-medium text-white`}>{label}</button>
        </>
    )
}

export default ButtonSave