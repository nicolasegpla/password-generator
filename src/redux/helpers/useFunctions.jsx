import { useDispatch } from "react-redux";
import { generateNewPassword } from "../createPassword";
import { getDataInput } from "../InputData";
import { useSelector } from "react-redux";
import { upDatePassword } from "../createPassword"
import { useContext } from "react";
import { GlobalState } from "../../context/global/GlobalState";


function useFunctions() {

    const dispatch = useDispatch()

    const { setSavePassword } = useContext(GlobalState)

    const { value } = useSelector((state) => state.newPassword)
    
    const data = useSelector((state) => state.inputData)

    function getInputData() {
        dispatch(getDataInput({newPassword: value, namePassword: data.namePassword}))
    } 

    const handleGeneratePassword = () => {
        dispatch(generateNewPassword());
    };

    function copyPasswordfn(value) {
        navigator.clipboard.writeText(value).then(() => {
            console.log('Texto copiado al portapapeles');
        });
    }
    
    function savePasswordfn(set, value) {
        set(value)
    }

    //getInputData()

    function getNamePassword({target}) {
        const namePass = target.value;
        dispatch(getDataInput({newPassword: data.newPassword, namePassword: namePass}))
    }

    function upDatePasswordfn({target}) {
        const newPass = target.value;
        dispatch(upDatePassword(newPass))
    }

    function saveData() {
        setSavePassword(true)
        dispatch(getDataInput({newPassword: value, namePassword: data.namePassword}))
    }
    
    console.log(data)
    return {
        handleGeneratePassword,
        copyPasswordfn,
        savePasswordfn,
        getInputData,
        getNamePassword,
        upDatePasswordfn,
        saveData,
    }
}

export { useFunctions }