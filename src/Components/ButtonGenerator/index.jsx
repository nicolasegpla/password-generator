import { BoltIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from 'react-redux';
import { generateNewPassword } from '../../redux/createPassword'


/* eslint-disable react/prop-types */


function ButtonGenerator({label}) {

    const password = useSelector((state) => state.newPassword);
    const dispatch = useDispatch()

    console.log(password)

    const handleGeneratePassword = () => {
        dispatch(generateNewPassword());
    };

    return(
        <>
            <button onClick={handleGeneratePassword} className={`w-64 h-12 flex justify-center items-center gap-1  text-white text-sm bg-indigo-600 cursor-pointer font-medium rounded-xl hover:bg-indigo-700`}>
                {label}
                <BoltIcon className="w-5 text-white"/>
            </button>
        </>
    )
}

export default ButtonGenerator