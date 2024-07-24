/* eslint-disable react/prop-types */
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline"

function ButtonCopy({copyPassword, size, bgColor, sizeIcon, colorIcon}) {
    return (
        <>
            <button className={`${size} flex justify-center items-center cursor-pointer ${bgColor}`} onClick={copyPassword}>
                <DocumentDuplicateIcon className={`${sizeIcon} ${colorIcon}`} />
            </button>
        </>
    )
}

export default ButtonCopy