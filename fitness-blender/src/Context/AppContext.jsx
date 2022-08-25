import { useState } from "react"
import { createContext } from "react"


export const AppContext = createContext()




export default function AppContextProvider ({children}){

    const [con,setcon] = useState({isAuth:false})

    const logs = () => {
        setcon({...con,
        isAuth:true
        })
    }

    return (
        <>
       <AppContext.Provider value={{con,logs}}>
        {children}
       </AppContext.Provider> 
       

        </>
    )
}