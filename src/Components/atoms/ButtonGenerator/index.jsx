/* eslint-disable react/prop-types */
import { BoltIcon } from "@heroicons/react/24/outline"

function ButtonGenerator({label, fnGeneratorPassword}) {

    return(
        <>
            <button onClick={fnGeneratorPassword} className={`w-64 h-12 flex justify-center items-center gap-1  text-white text-sm bg-indigo-600 cursor-pointer font-medium rounded-xl hover:bg-indigo-700`}>
                {label}
                <BoltIcon className="w-5 text-white"/>
            </button>
        </>
    )
}

export default ButtonGenerator