import axios, {AxiosError}from 'axios';
import {parseCookies, setCookie} from "nookies"
import { AuthProvider } from '../components/Users/AuthContext';

interface AxiosErrorResponse {
    code?: string;
}

let cookies = parseCookies();

export const api = axios.create({
    // baseURL: 'http://localhost:3000/api',   
    baseURL: 'http://localhost:3333',
    headers:{
        Authorization: `Bearer ${cookies['nextauth.token']}`
    }
})

// Apenas na 1 vez qu eo usuario fizer login
api.interceptors.response.use(response => {
    return response;
}, (error: AxiosError<AxiosErrorResponse>) => {
// (error: AxiosError) =>{
    if (error.response.status === 401){
        if(error.response.data?.code === 'token.expired'){
            cookies = parseCookies();
            //renovar o token
            const {'nextauth.refreshtoken': refreshtoken } = cookies;
            api.post('/refresh',{
                refreshtoken,                
            }). then( response =>{
                const {token} = response.data

                setCookie(undefined, 'nextauth.token', token, {
                    maxAge: 60 * 60 * 24 * 30, //30 dias, tempo de vida do cookie
                    path: '/'
                })                
               
                setCookie(undefined, 'nextauth.refreshtoken', response.data.refreshToken,{
                    maxAge: 60 * 60 * 24 * 30, //30 dias, tempo de vida do cookie
                    path: '/'
                })

                api.defaults.headers['Authorization'] = `Bearer ${token}`;
            });
        } else{
            //deslogar usuario
        }
    };
})

