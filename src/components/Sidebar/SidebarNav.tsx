import { Stack, Box, useBreakpointValue } from '@chakra-ui/react'
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export function SidebarNav(){    

    return(
        <Stack spacing="12" align="flex-start">

            <NavSection title='LANÇAMENTOS'>
                <NavLink icon={RiContactsLine} href="/lancamentos/newtransaction">Nova Transação</NavLink>
                <NavLink icon={RiContactsLine} href="/lancamentos/cadastros">Cadastros</NavLink>  
                <NavLink icon={RiContactsLine} href="/lancamentos">Lançamentos</NavLink>                                              
            </NavSection>

            <NavSection title='RELATÓRIOS'>                                        
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiDashboardLine} href="/dashboard">Outros Relatórios</NavLink>
                {/* <NavLink icon={RiContactsLine} href="/lancamentos">Usuários</NavLink>                     */}
            </NavSection>
            
            <NavSection title='ACOMPANHAMENTOS'>
                <NavLink icon={RiInputMethodLine} href="/forms">Cartão de Créditos</NavLink>
                <NavLink icon={RiGitMergeLine} href="/automation">Contas a Receber</NavLink>   
                <NavLink icon={RiGitMergeLine} href="/acompanhamentos/billstopay">Contas a Pagar</NavLink>                  
            </NavSection>
            
        </Stack>
    );
}