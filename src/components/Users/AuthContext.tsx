import {createContext, ReactNode, useState} from "react"
import { api } from "../../services/api";
import Router from "next/router";

interface SingInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    signIn (Credentials): Promise<void>;
    isAuthenticated: boolean;
    user:User
}

interface AuthProviderProps{
    children: ReactNode
}

interface User{
    email: string;
    permissions: string[];
    roles: string[];
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<User>()
      const isAuthenticated = !!user;

    async function signIn({email, password}: SingInCredentials){
        // console.log({email, password});
        try{
            const response =  await api.post('sessions',{
                email,
                password,
            })

            const {permissions, roles} = response.data

            setUser({
                email,
                permissions,
                roles,
            })

            //Direncionando o usuario para a pagina (so vai funcionar se ele estiver logado)
            Router.push('/painel');

            // console.log(response.data);
        } catch (err){
            console.log(err)
        }
        
        
    }

    return(
        <AuthContext.Provider value={{signIn, isAuthenticated, user}}>
            {children}
        </AuthContext.Provider>
    )
}