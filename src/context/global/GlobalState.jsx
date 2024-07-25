/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

const GlobalState = createContext();

function GlobalProvider({children}) {

    const [ valueInputNewPassword, setValueInputNewPassword ] = useState('')

    console.log(valueInputNewPassword.current)
    

    return (
        <GlobalState.Provider value={{
            setValueInputNewPassword,
            valueInputNewPassword,

        }}>
            {children}
        </GlobalState.Provider>
    )
}

export { GlobalState, GlobalProvider}