import { useState } from "react"
import { createContext } from "react"


export const AppContext = createContext()




export default function AppContextProvider ({children}){

    const [con,setcon] = useState({isAuth:false,qty:0})

    const logs = () => {
        setcon({...con,
        isAuth:true
        })
    }

    const orderAdd = (value) => {
        setcon({...con,
        qty:value
        })
    }

    const OrderRemove = (value) =>{
       setcon({...con,
      qty:con.qty+value
    })
    }

    return (
        <>
       <AppContext.Provider value={{con,logs,OrderRemove,orderAdd}}>
        {children}
       </AppContext.Provider> 
       

        </>
    )
}