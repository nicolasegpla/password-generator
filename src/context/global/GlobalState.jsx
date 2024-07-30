/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

const GlobalState = createContext();

function GlobalProvider({children}) {

    const [ valueInputNewPassword, setValueInputNewPassword ] = useState('')
    const [ savePassword, setSavePassword ] = useState(false)
    const [ nameValidator, setNameValidator ] = useState(false)
    const [ passwordValidator, setPasswordValidator ] = useState(false)
    const [ savePasswordIsOk, setSavePasswordIsOk] = useState(false)
    
    return (
        <GlobalState.Provider value={{
            setValueInputNewPassword,
            valueInputNewPassword,
            savePassword,
            setSavePassword,
            setNameValidator,
            nameValidator,
            setPasswordValidator,
            passwordValidator,
            savePasswordIsOk,
            setSavePasswordIsOk,

        }}>
            {children}
        </GlobalState.Provider>
    )
}

export { GlobalState, GlobalProvider}