import { Box, Flex, Heading, Spinner, Button, Icon, Text, Table, Thead, Tr, Th, Td, 
    Checkbox, Tbody, useBreakpointValue, useDisclosure,
    AlertDialog, AlertDialogOverlay, AlertDialogHeader, AlertDialogContent, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, 
    Modal, ModalOverlay, ModalContent, ModalHeader, 
    ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Pagination } from "../../components/Pagination";
import {RiAddLine, RiPencilLine, RiDeleteBin3Line, RiSearchLine } from 'react-icons/ri'
import Link from 'next/link'
import {useQuery} from 'react-query';
import { useEffect, useState } from "react";
import {api} from "../../services/api"
import React from "react";
import { cursorTo } from "readline";

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

export default function TransactionRecord(){   

    //Modal do botão Excluir na tabela
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    // const { isOpen, onOpen, onClose } = useDisclosure()
    
    //MOdal do botão Editar na tabela
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

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
                        <Heading size="lg" fontWeight="bold" color="orange.400">Lançamentos Realizados</Heading>
                        {/* as = a => converte o botao como link para outra pagina */}
                        {isWideVersion && (
                            <Link href="/lancamentos/newtransaction" passHref>
                                <Button 
                                    as="a" 
                                    // size="sm" 
                                    fontSize="sm" 
                                    colorScheme="orange"
                                    leftIcon={<Icon as={RiAddLine}fontSize="20"/>}
                                > 
                                    Cadastrar Novo Lançamento
                                </Button>
                            </Link> 
                        )}                       
                    </Flex>

                    <Flex mb="8" align="center" justify="space-between">
                        {/* <Heading size="md" fontWeight="normal" color="gray.200">Selecione um período</Heading> */}
                        {isWideVersion && (
                            <Flex gap="3" direction="row">                         
                                <Input
                                    name="calendario"
                                    bg="gray.700"
                                    color="gray.200"   
                                    type="date"
                                    size="md"                                                                            
                                >                            
                                </Input>  
                                <Input
                                    name="calendario"
                                    bg="gray.700"  
                                    color="gray.200" 
                                    type="date"                                            
                                >                            
                                </Input>                            
                            </Flex>
                        )}
                        <Button 
                            // as="a" 
                            size="md" 
                            // w="100"
                            fontSize="sm" 
                            colorScheme="orange"
                            leftIcon={<Icon as={RiSearchLine}fontSize="20"/>}
                        > 
                            Pesquisar
                        </Button>                                   
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
                                        { isWideVersion && <Th>Tipo</Th>}                          
                                        <Th>Data</Th>
                                        { isWideVersion && <Th>Categoria</Th>}
                                        <Th>Conta</Th>
                                        { isWideVersion && <Th fontSize="sm" textAlign="center">Forma de Pagamento</Th>}
                                        { isWideVersion && <Th>Tipo de Banco</Th>}
                                        <Th>Valor da Transação</Th>
                                        { isWideVersion && <Th>Histórico</Th>}                               
                                        <Th w="8">Ações</Th>
                                    </Tr>
                                </Thead> 
                                <Tbody>
                                    {transactions.map((transaction) => (
                                        <Tr px={["2","3"]} _hover={{bg: 'gray.700'}}>
                                            { isWideVersion && <Td fontSize="sm">{transaction.type}</Td>}
                                            <Td fontSize="sm">{transaction.date}</Td>
                                            {/* <Td fontSize="sm">{new Intl.DateTimeFormat('pt-BR').format(                              
                                                new Date(transaction.date)
                                            )}</Td> */}
                                            { isWideVersion && <Td fontSize="sm">{transaction.category}</Td>}  
                                            <Td fontSize="sm">{transaction.bills}</Td>  
                                            { isWideVersion && <Td fontSize="sm" textAlign="center">{transaction.payment}</Td>}   
                                            { isWideVersion && <Td fontSize="sm">{transaction.bank}</Td>}  
                                            <Td fontSize="sm">{new Intl.NumberFormat('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            }).format(transaction.value)}</Td>
                                            { isWideVersion && <Td fontSize="sm">{transaction.history}</Td>}                                   
                                            <Td>
                                                <Link href="/lancamentos/edittransaction" passHref>
                                                    <Button 
                                                        // onClick={onOpen}
                                                        as="a" 
                                                        _hover={{bg:'blue.700'}}
                                                        size="sm" 
                                                        fontSize="sm" 
                                                        colorScheme="purple" 
                                                        leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}                                        
                                                    > 
                                                        Editar
                                                    </Button>
                                                </Link>

                                                <Button onClick={onOpen}
                                                    as="a" 
                                                    size="sm" 
                                                    fontSize="sm" 
                                                    colorScheme="purple"
                                                    leftIcon={<Icon as={RiDeleteBin3Line} fontSize="15"/>}
                                                    mt="2"
                                                    >Excluir
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
                                                        <AlertDialogHeader color="red.500">A exclusão deste registro pode gerar alterações no sistema!</AlertDialogHeader>
                                                        <AlertDialogCloseButton color="gray.700"/>
                                                        <AlertDialogBody color="red.500">
                                                            Você tem certeza que deseja REALMENTE EXCLUIR este registro?
                                                        </AlertDialogBody>
                                                        <AlertDialogFooter>
                                                            <Button colorScheme='blue' ref={cancelRef} onClick={onClose}>
                                                            Não, Cancele!
                                                            </Button>
                                                            <Button colorScheme='red' ml={3}>
                                                            Sim, Tenho certeza!
                                                            </Button>
                                                        </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>

                                            </Td>
                                        </Tr>                           
                                    ))}                             
                                </Tbody>
                            </Table>
                            {/* <Pagination/>                             */}
                        </>
                    {/* )} */}
                </Box>
            </Flex>
        </Box>
    );
}   




















{/* <Modal
    initialFocusRef={initialRef}
    finalFocusRef={finalRef}
    isOpen={isOpen}
    onClose={onClose}
>
    <ModalOverlay />
    <ModalContent>
    <ModalHeader color="gray.700">Comprar novo número</ModalHeader>
    <ModalHeader color="blue.400">Saldo Atual: 152,36 R$</ModalHeader>
    <ModalCloseButton color="gray.700"/>
    <ModalBody pb={6}>
        <FormControl>
        <FormLabel color="gray.700">Serviço Selecionado</FormLabel>
        <Input ref={initialRef} color="gray.200" placeholder='Comida' fontSize="sm" />
        </FormControl>

        <FormControl mt={4}>
        <FormLabel color="gray.700">Selecione o País</FormLabel>
        <Select placeholder='Brasil' color="gray.200" fontSize="sm"/>
        </FormControl>

        <FormControl mt={4}>
        <FormLabel color="gray.700">Selecione a Operadora</FormLabel>
        <Select color="gray.200" placeholder='VIVO' fontSize="sm"/>
        </FormControl>

        <FormControl mt={4}>
        <FormLabel color="gray.700">Digite o Valor do Serviço</FormLabel>
        <Input color="gray.200" placeholder='15,00 R$' fontSize="sm"/>
        </FormControl>
    </ModalBody>

    <ModalFooter>
        <Button colorScheme='blue' mr={3} 
            // onClick={() =>
            //     toast({
            //     title: 'PARABÉNS',
            //     description: "Sua compra foi efetuada com sucesso!",
            //     status: 'success',
            //     duration: 9000,
            //     isClosable: true,
            //     })
            // } 
        >
            Efetuar Compra                                               
        </Button>
        
        <Button onClick={onClose} bg="red.400">Cancelar</Button>
    </ModalFooter>
    </ModalContent>
</Modal> */}