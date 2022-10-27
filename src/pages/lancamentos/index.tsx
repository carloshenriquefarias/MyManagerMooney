import { Box, Flex, Heading, Spinner, Button, Icon, Text, Table, Thead, Tr, Th, Td, Checkbox, Tbody, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Pagination } from "../../components/Pagination";
import {RiAddLine, RiPencilLine, RiDeleteBin3Line } from 'react-icons/ri'
import Link from 'next/link'
import {useQuery} from 'react-query';
import { useEffect, useState } from "react";
import {api} from "../../services/api"

// import { cursorTo } from "readline";
// import { useTransactions } from '../../hooks/useTransactions'

interface Transaction{
    // id: number;
    type: string;
    date: string;
    category: string;
    bills: string;
    payment: string;
    bank: string;
    value: number;
    history: string;           
}

export default function TransactionsTable(){   

    //Pegando os dados da API e Listando as receitas cadastradas na tabela

    // const {data, isLoading, error} = useQuery('transactions_list', async () => {
    //     const response = await fetch('http://localhost:3000/api/lancamentos/registration');
    //     const data = await response.json();
    // }) 

    const [transactions, setTransactions] = useState<Transaction[]>([]);  

    useEffect(() => {
        async function transactions() {          
        await api.get('/newtransaction').then( response => {
            setTransactions(response.data);
            console.log(response.data);
        })      
        }
        transactions();    
    }, []);
    
    //Reduzindo o tamanho da tela

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

                    {/* {isLoading ? (
                        <Flex justify="center">
                            <Spinner/>
                        </Flex>
                    ): error ?(
                        <Flex justify="center">
                           <Text >Falha ao obter dados dos usuários</Text>
                        </Flex>                        
                    ): ( */}
                        <>                        
                            <Table colorScheme="whiteAlpha" width="100%">
                                <Thead>
                                    {/* Colocar a Key e o ID das transacoes */}
                                    <Tr>    
                                        <Th>Tipo</Th>                           
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
                                    {transactions.map((transaction) => (
                                        <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                            <Td fontSize="sm">{transaction.type}</Td>
                                            <Td fontSize="sm">{transaction.date}</Td>
                                            {/* <Td fontSize="sm">{new Intl.DateTimeFormat('pt-BR').format(                              
                                                new Date(transaction.date)
                                            )}</Td> */}
                                            <Td fontSize="sm">{transaction.category}</Td>  
                                            <Td fontSize="sm">{transaction.bills}</Td>  
                                            <Td fontSize="sm" textAlign="center">{transaction.payment}</Td>   
                                            <Td fontSize="sm">{transaction.bank}</Td>  
                                            <Td fontSize="sm">{new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(transaction.value)}</Td>
                                            <Td fontSize="sm">{transaction.history}</Td>                             
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
                                    ))}                             
                                </Tbody>
                            </Table>
                            {/* <Pagination/> */}
                        </>
                    {/* )} */}
                </Box>
            </Flex>
        </Box>
    );
}   
