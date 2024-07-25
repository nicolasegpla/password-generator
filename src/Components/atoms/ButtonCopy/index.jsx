/* eslint-disable react/prop-types */
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline"


function ButtonCopy({copyPassword, size, bgColor, sizeIcon, colorIcon, position}) {

   

    


    return (
        <>
            <button type="button" onClick={copyPassword} className={`${size} flex justify-center items-center cursor-pointer ${bgColor} ${position}`}>
                <DocumentDuplicateIcon className={`${sizeIcon} ${colorIcon}`} />
            </button>
        </>
    )
}

export default ButtonCopy