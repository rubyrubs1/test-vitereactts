import { createContext, useState } from "react";

//step1
export type User = {
    name: string
    email: string
}

//step 2
//step no 6 inside notes
export type UserContextType = {
    user: User, 
    setUser: React.Dispatch<React.SetStateAction<User>> //Dispatch<SetStateAction<User>>
}

//step 3
//step no 7 inside notes
//inside notes using null, but if u dont know what to put inside (), use partial
//if u know what type of data for the user, just do it like this:
/* const UserContext = createContext<UserContextInterface>({ user : {
    name: '',
    email '',
    },
    setUser: (user: User) => {}
}) */
/* export const UserContext = createContext<Partial<UserContextType>>({})  */

//or we can do step no 3 like this
// declare first the defaultState then put it inside createContext

const defaultState = {
    user: {
        name: '',
        email: '',
    },
    setUser: (user: User) => {}
} as UserContextType

export const UserContext = createContext(defaultState)

//step 4
type UserContextProviderProps = {
    children: React.ReactNode
}

//step 5
export const UserContextProvider = ({children} : UserContextProviderProps) => {

    const [user,setUser] = useState<User>({
        name: '',
        email: '',
    });
    return (
        //if u use naming file ts instead of tsx, there will be an error cannot find namespace context
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}