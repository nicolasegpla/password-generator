/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

const GlobalState = createContext();

function GlobalProvider({children}) {

    const [ valueInputNewPassword, setValueInputNewPassword ] = useState('')
    const [ savePassword, setSavePassword ] = useState(false)
    
    return (
        <GlobalState.Provider value={{
            setValueInputNewPassword,
            valueInputNewPassword,
            savePassword,
            setSavePassword,

        }}>
            {children}
        </GlobalState.Provider>
    )
}

export { GlobalState, GlobalProvider}