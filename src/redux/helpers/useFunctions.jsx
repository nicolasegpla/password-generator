import { useDispatch } from "react-redux";
import { generateNewPassword } from "../createPassword";
import { getDataInput } from "../InputData";
import { useSelector } from "react-redux";
import { upDatePassword } from "../createPassword"
import { useContext } from "react";
import { GlobalState } from "../../context/global/GlobalState";
import { useEffect } from "react";


function useFunctions() {

    const dispatch = useDispatch()

    const { setSavePassword, setNameValidator, nameValidator, setPasswordValidator, setSavePasswordIsOk } = useContext(GlobalState)

    const { value } = useSelector((state) => state.newPassword)
    
    const data = useSelector((state) => state.inputData)

    function getInputData() {
        dispatch(getDataInput({newPassword: value, namePassword: data.namePassword}))
    } 

    const handleGeneratePassword = () => {
        setPasswordValidator(false)
        dispatch(generateNewPassword());
    };

    useEffect(() => {
        dispatch(getDataInput({newPassword: value, namePassword: data.namePassword}))
    })
    

    function copyPasswordfn(value) {

        if(data.newPassword == '') {
            setPasswordValidator(true)
        }else {
            navigator.clipboard.writeText(value).then(() => {
                console.log('Texto copiado al portapapeles');
            });
            setPasswordValidator(false)
        }
        
    }
    
    function savePasswordfn(set, value) {
        set(value)
    }

    //getInputData()

    function getNamePassword({target}) {
        const namePass = target.value;
        dispatch(getDataInput({newPassword: data.newPassword, namePassword: namePass}))
        setNameValidator(false)
    }

    function upDatePasswordfn({target}) {
        const newPass = target.value;
        dispatch(upDatePassword(newPass))
    }

    function saveData() {
        if(data.newPassword == '') {
            setPasswordValidator(true)
            console.log(data.newPassword)
        }else {
            setSavePassword(true)
        }
    }

    console.log(data.newPassword)

    function nameValidatorfn() {
        if(data.namePassword == '') {
            setNameValidator(true)
            console.log(nameValidator)
        }else {
            console.log('guardado perri')
            setSavePasswordIsOk(true)
            setNameValidator(false)
            dispatch(upDatePassword(''))
            dispatch(getDataInput({namePassword: ''}))
            setSavePassword(false)
            console.log(nameValidator)
        }
    }

    setTimeout(() => {
        setSavePasswordIsOk(false)
    }, '10000')
    
    console.log(data)
    return {
        handleGeneratePassword,
        copyPasswordfn,
        savePasswordfn,
        getInputData,
        getNamePassword,
        upDatePasswordfn,
        saveData,
        nameValidatorfn,
    }
}

export { useFunctions }