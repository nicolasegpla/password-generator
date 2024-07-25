import { useDispatch } from "react-redux";
import { generateNewPassword } from "../createPassword";

function useFunctions() {

    //const password = useSelector((state) => state.newPassword);

    const dispatch = useDispatch()

    const handleGeneratePassword = () => {
        dispatch(generateNewPassword());
        console.log('escucha')
    };


    

    return {
        handleGeneratePassword
    }
}

export { useFunctions }