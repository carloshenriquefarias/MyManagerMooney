import { Box, Flex, Heading, Button, Icon, Text, Table, Thead, Tr, Th, Td, Checkbox, Tbody, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Pagination } from "../../components/Pagination";
import {RiAddLine, RiPencilLine, RiDeleteBin3Line } from 'react-icons/ri'
import Link from 'next/link'
import { cursorTo } from "readline";
import { useTransactions } from '../../hooks/useTransactions';

export default function TransactionsTable(){

    const {transactions} = useTransactions();  

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Lançamentos Realizados</Heading>
                        {/* as = a => converte o botao como link para outra pagina */}
                        
                        <Link href="/lancamentos/newtransaction" passHref>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine}fontSize="20"/>}
                            > 
                                Cadastrar Novo Lançamento
                            </Button>
                        </Link>
                        
                    </Flex>
                    <Table colorScheme="whiteAlpha" width="100%">
                        <Thead>
                            <Tr>                                
                                <Th>Data</Th>
                                <Th>Categoria</Th>
                                <Th>Conta</Th>
                                <Th fontSize="sm" textAlign="center">Forma de Pagamento</Th>
                                <Th>Tipo de Banco</Th>
                                <Th>Valor da Transação</Th>
                                <Th>Histórico</Th>                                
                                <Th w="8">Ações</Th>
                            </Tr>
                        </Thead> 
                        <Tbody>
                            
                            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                <Td fontSize="sm">12/08/2022</Td>
                                <Td fontSize="sm">Alimentação</Td>  
                                <Td fontSize="sm">Lanches</Td>  
                                <Td fontSize="sm" textAlign="center">À Vista</Td>   
                                <Td fontSize="sm">Banco do Brasil</Td>  
                                <Td fontSize="sm">5.000,00 R$</Td>
                                <Td fontSize="sm">Compra de Pizza</Td>                             
                                {/* { isWideVersion && <Td>12 de setembro de 2022</Td>} */}
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
                            
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    );
}   