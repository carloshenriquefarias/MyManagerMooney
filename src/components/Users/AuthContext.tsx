import {createContext, ReactNode, useEffect, useState} from "react"
import { api } from "../../services/api";
import Router from "next/router";
import {setCookie, parseCookies} from "nookies"

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
    
    //Quando o usuario fizer o login pela 1 vez
    useEffect(() => {
        const {'nextauth.token': token} = parseCookies()

        if(token){
            api.get('/me').then(response =>{
                const {email, permissions, roles} = response.data

                setUser({email, permissions, roles})
            })
        }

    }, [])

    async function signIn({email, password}: SingInCredentials){
        // console.log({email, password});
        try{
            const response =  await api.post('sessions',{
                email,
                password,
            })

            const {token, refreshToken, permissions, roles} = response.data

            setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, //30 dias, tempo de vida do cookie
                path: '/'
            })
            setCookie(undefined, 'nextauth.refreshtoken', refreshToken,{
                maxAge: 60 * 60 * 24 * 30, //30 dias, tempo de vida do cookie
                path: '/'
            })

            setUser({
                email,
                permissions,
                roles,
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

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