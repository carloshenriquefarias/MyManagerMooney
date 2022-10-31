import {createContext, ReactNode} from "react"

interface SingInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    signIn (Credentials): Promise<void>;
    isAuthenticated: boolean;
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){

    const isAuthenticated = false;

    async function signIn({email, password}: SingInCredentials){
        console.log({email, password});
    }

    return(
        <AuthContext.Provider value={{signIn, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}