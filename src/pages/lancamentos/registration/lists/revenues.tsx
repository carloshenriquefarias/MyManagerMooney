import { Box, Flex, Heading, Spinner, Button, Icon, Text, Table, Thead, Tr, Th, Td, Checkbox, Tbody, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../../../components/Header/Index";
import { SideBar } from "../../../../components/Sidebar/index";
import { Pagination } from "../../../../components/Pagination";
import {RiAddLine, RiPencilLine, RiDeleteBin3Line } from 'react-icons/ri'
import { useEffect, useState } from "react";
import Link from 'next/link'
import {api} from "../../../../services/api"

// import {useQuery} from 'react-query'
// import { cursorTo } from "readline";
// import { useTransactions } from '../../hooks/useTransactions';
// import { Transactions } from "../../../../services/hooks/useTransactions";
// import {api} from "../../services/api"

interface ListRevenues{
    // id: number;
    categoryOfRevenue: string;
    bills: string;           
}

export default function RevenuesTable(){  

    const [ListRevenuesTable, setListRevenuesTable] = useState<ListRevenues[]>([]);
     
    //Pegando os dados da API e Listando as receitas cadastradas na tabela
    useEffect(() => {
        async function loadRevenues() {          
            await api.get('/revenues').then( response => {
                setListRevenuesTable(response.data);
                console.log(response.data);
            })      
        }
        loadRevenues();    
    }, []);     

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="bold" color="orange.400">Receitas Cadastradas</Heading>
                        {/* as = a => converte o botao como link para outra pagina */}
                        
                        <Link href="/lancamentos/registration/receitas" passHref>
                            <Button 
                                as="a" 
                                // size="sm" 
                                fontSize="sm" 
                                colorScheme="orange"
                                leftIcon={<Icon as={RiAddLine}fontSize="20"/>}
                            > 
                                Cadastrar Nova Receita
                            </Button>
                        </Link>
                        
                    </Flex>                    
                        <>                        
                            <Table colorScheme="whiteAlpha" width="100%">
                                <Thead>
                                    {/* Colocar a Key e o ID das transacoes */}
                                    <Tr>                               
                                        <Th>Categoria da Receita</Th>
                                        <Th>Conta</Th>                                                                       
                                        <Th w="8">Ações</Th>
                                    </Tr>
                                </Thead> 
                                <Tbody>
                                    {ListRevenuesTable.map((ListRevenuesTable) => (                                                      
                                        <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                            <Td fontSize="sm">{ListRevenuesTable.categoryOfRevenue}</Td>
                                            <Td fontSize="sm">{ListRevenuesTable.bills}</Td>                                   
                                            <Td>
                                                <Button 
                                                    as="a" 
                                                    size="sm" 
                                                    fontSize="sm" 
                                                    colorScheme="purple"
                                                    leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}                                        
                                                > 
                                                    Editar
                                                </Button>
                                                <Button 
                                                    as="a" 
                                                    size="sm" 
                                                    fontSize="sm" 
                                                    colorScheme="purple"
                                                    leftIcon={<Icon as={RiDeleteBin3Line} fontSize="15"/>}
                                                    mt="2"
                                                > 
                                                    Excluir
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))}     
                                    {/* <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                        <Td fontSize="sm">Receitas Financeiras</Td>
                                        <Td fontSize="sm">Salário</Td>                                                          
                                        
                                        <Td>
                                            <Button 
                                                as="a" 
                                                size="sm" 
                                                fontSize="sm" 
                                                colorScheme="purple"
                                                leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}                                        
                                            > 
                                                Editar
                                            </Button>
                                            <Button 
                                                as="a" 
                                                size="sm" 
                                                fontSize="sm" 
                                                colorScheme="purple"
                                                leftIcon={<Icon as={RiDeleteBin3Line} fontSize="15"/>}
                                                mt="2"
                                            > 
                                                Excluir
                                            </Button>
                                        </Td>
                                    </Tr>                           */}
                                    
                                </Tbody>
                            </Table>
                            {/* <Pagination/> */}
                        </>                  
                </Box>
            </Flex>
        </Box>
    );
}   