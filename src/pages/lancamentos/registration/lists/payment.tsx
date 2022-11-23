import { Box, Flex, Heading, Spinner, Button, Icon, Text, Table, Thead, Tr, Th, Td, 
    Checkbox, Tbody, useBreakpointValue, useDisclosure,
    AlertDialog, AlertDialogOverlay, AlertDialogHeader, AlertDialogContent, 
    AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter } from "@chakra-ui/react";
import { Header } from "../../../../components/Header/Index";
import { SideBar } from "../../../../components/Sidebar/index";
import { Pagination } from "../../../../components/Pagination";
import {RiAddLine, RiPencilLine, RiDeleteBin3Line } from 'react-icons/ri'
import { useEffect, useState } from "react";
import Link from 'next/link'
import {api} from "../../../../services/api"
import React from "react";

// import {useQuery} from 'react-query'
// import { cursorTo } from "readline";
// import { useTransactions } from '../../hooks/useTransactions';
// import { Transactions } from "../../../../services/hooks/useTransactions";
// import {api} from "../../services/api"

interface ListPaymentMethod{
    // id: number;
    payment: string;              
}

interface ProfileProps{
    showProfileData?: boolean;
}

export default function PaymentMethodTable(){  

       //Modal do botão Excluir na tabela
       const { isOpen, onOpen, onClose } = useDisclosure()
       const cancelRef = React.useRef()

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
                        <Heading size="lg" fontWeight="bold" color="orange.400">Métodos de Pagamentos Cadastrados</Heading>
                        {/* as = a => converte o botao como link para outra pagina */}
                        
                        <Link href="/lancamentos/registration/NewPayment" passHref>
                            <Button 
                                as="a" 
                                size="md" 
                                fontSize="sm" 
                                colorScheme="orange"
                                leftIcon={<Icon as={RiAddLine}fontSize="20"/>}
                            > 
                                Cadastrar Nova Forma de Pagamento
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
                                                <Link href="/lancamentos/registration/lists/editpayment" passHref>
                                                    <Button 
                                                        as="a" 
                                                        size="sm" 
                                                        fontSize="sm" 
                                                        colorScheme="purple"
                                                        leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}                                        
                                                    > 
                                                        Editar
                                                    </Button>
                                                </Link>
                                                
                                                <Button 
                                                    as="a" 
                                                    size="sm" 
                                                    fontSize="sm" 
                                                    colorScheme="purple"
                                                    leftIcon={<Icon as={RiDeleteBin3Line} fontSize="15"/>}
                                                    mt="2"
                                                    onClick={onOpen}
                                                > 
                                                    Excluir
                                                </Button>

                                                <AlertDialog
                                                    motionPreset='slideInBottom'
                                                    leastDestructiveRef={cancelRef}
                                                    onClose={onClose}
                                                    isOpen={isOpen}
                                                    isCentered                
                                                >
                                                    <AlertDialogOverlay />

                                                    <AlertDialogContent>
                                                    <AlertDialogHeader color="gray.500">ATENÇÃO!!!</AlertDialogHeader>
                                                    <AlertDialogCloseButton color="gray.700"/>
                                                    <AlertDialogBody color="gray.500" fontWeight="bold">
                                                        Você tem certeza que deseja REALMENTE EXCLUIR esta forma de pagamento?
                                                    </AlertDialogBody>
                                                    <AlertDialogFooter>
                                                        <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                                                            Não, Volte!
                                                        </Button>
                                                        <Link href="/" passHref>
                                                            <Button colorScheme='whatsapp' ml={3}>
                                                                Sim, Tenho certeza!
                                                            </Button>
                                                        </Link>
                                                    </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog> 
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