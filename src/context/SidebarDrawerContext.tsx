import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import {createContext, ReactNode, useContext, useEffect} from 'react'
import {useRouter} from 'next/router'


interface SidebarDrawerProviderProps{
    children: ReactNode,
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData );

export function SidebarDrawerProvider({children}:SidebarDrawerProviderProps){

    const disclosure = useDisclosure() //Abrir e fechar o Sidebar Drawer
    const router = useRouter() //

    useEffect(() => { //Toda vez que eu clicar em uma nova rota o Drawer vai fechar
        disclosure.onClose()
    }, [router.asPath]) //Caminho da rota

    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);