import { Stack, Box, useBreakpointValue } from '@chakra-ui/react'
import { RiDashboardLine, RiFileList3Line, RiEdit2Line, RiAddCircleLine, RiBankCardLine, RiLogoutBoxRLine, RiNumbersLine, RiLogoutBoxLine } from 'react-icons/ri'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export function SidebarNav(){    

    return(
        <Stack spacing="12" align="flex-start">

            <NavSection title='LANÇAMENTOS'>
                <NavLink icon={RiAddCircleLine} href="/lancamentos/newtransaction">Nova Transação</NavLink>
                <NavLink icon={RiFileList3Line} href="/lancamentos/cadastros">Cadastros</NavLink>  
                <NavLink icon={RiEdit2Line} href="/lancamentos">Lançamentos</NavLink>                                              
            </NavSection>

            <NavSection title='RELATÓRIOS'>                                        
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiNumbersLine} href="/dashboard">Outros Relatórios</NavLink>
                {/* <NavLink icon={RiContactsLine} href="/lancamentos">Usuários</NavLink>                     */}
            </NavSection>
            
            <NavSection title='ACOMPANHAMENTOS'>
                <NavLink icon={RiBankCardLine} href="/acompanhamentos/creditcard">Cartão de Créditos</NavLink>
                <NavLink icon={RiLogoutBoxLine} href="/automation">Contas a Receber</NavLink>   
                <NavLink icon={RiLogoutBoxRLine} href="/acompanhamentos/billstopay">Contas a Pagar</NavLink>                  
            </NavSection>
            
        </Stack>
    );
}



