import { createContext, ReactNode, useState } from "react";
import {api} from '../services/api'
import Router from 'next/router'

type SignInCredentials = {
    email: string;
    password: string;
}

type User = {
    email: string;
    permissions: string[];
    roles: string[];

}

type AuthContextData ={
    signIn(credentials: SignInCredentials): Promise<void>;
    user: User;
    isAutheticated: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider ({children}: AuthProviderProps) {

    const [user, setUser] = useState<User>();
    const isAutheticated = !! user;
    

    async function signIn({email, password}: SignInCredentials){
        try{
            const response = await api.post('sessions', {
                email,
                password,
            })

            const {permissions, roles} = response.data

            setUser({
                email, 
                permissions,
                roles
            })
    
            console.log(response.data);

            Router.push('/dashboard');

        } catch(error){

        }
        
    }

    return(
        <AuthContext.Provider value={{signIn, isAutheticated, user}}>
            {children}
        </AuthContext.Provider>
    )

}