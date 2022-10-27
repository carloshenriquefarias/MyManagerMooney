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

interface ListPaymentMethod{
    // id: number;
    payment: string;              
}

export default function PaymentMethodTable(){  

    const [ListPaymentMethod, setListPaymentMethod] = useState<ListPaymentMethod[]>([]);
     
    //Pegando os dados da API e Listando as receitas cadastradas na tabela
    useEffect(() => {
        async function loadPaymentMethod() {          
            await api.get('/payment').then( response => {
                setListPaymentMethod(response.data);
                console.log(response.data);
            })      
        }
        loadPaymentMethod();    
    }, []);     

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Metodos de Pagamentos Cadastrados</Heading>
                        {/* as = a => converte o botao como link para outra pagina */}
                        
                        <Link href="/lancamentos/registration/NewPayment" passHref>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="whatsapp"
                                leftIcon={<Icon as={RiAddLine}fontSize="20"/>}
                            > 
                                Cadastrar Nova Forma de pagamento
                            </Button>
                        </Link>
                        
                    </Flex>                    
                        <>                        
                            <Table colorScheme="whiteAlpha" width="100%">
                                <Thead>
                                    {/* Colocar a Key e o ID das transacoes */}
                                    <Tr>                               
                                        <Th>Métodos de Pagamentos</Th>                                                                                                              
                                        <Th w="8">Ações</Th>
                                    </Tr>
                                </Thead> 
                                <Tbody>
                                    {ListPaymentMethod.map((ListPaymentMethod) => (                                                      
                                        <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                            <Td fontSize="sm">{ListPaymentMethod.payment}</Td>                                                                              
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
                </Box>
            </Flex>
        </Box>
    );
}   