import { useDispatch } from "react-redux";
import { generateNewPassword } from "../createPassword";

function useFunctions() {

    //const password = useSelector((state) => state.newPassword);

    const dispatch = useDispatch()

    const handleGeneratePassword = () => {
        dispatch(generateNewPassword());
        console.log('escucha')
    };

    function copyPasswordfn(value) {
        navigator.clipboard.writeText(value).then(() => {
            console.log('Texto copiado al portapapeles');
        });
    }

    

    return {
        handleGeneratePassword,
        copyPasswordfn,
    }
}

export { useFunctions }