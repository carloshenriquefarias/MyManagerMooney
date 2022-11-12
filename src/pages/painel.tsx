import { Box, Flex, Heading, Text, Button, VStack, SimpleGrid, Divider, Input, Icon, Table, 
    useToast, Select, Tbody, useBreakpointValue, Modal, ModalOverlay, ModalContent, ModalHeader, 
    ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, useDisclosure } from "@chakra-ui/react";
import { Header } from "../components/Header/Index";
import { SideBar } from "../components/Sidebar/index";
import { Pagination } from "../components/Pagination";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/Users/AuthContext";
import { api } from "../services/api";
// import { useDisclosure } from "@chakra-ui/core";
import React from "react";
// import { ToastContainer, useToast, toast, TypeOptions } from "react-toastify";
// import "react-toastify/ReactToastify.min.css";

export default function Painel(){

    //Autenticação do usuario em todas as paginas
    const {user} = useContext(AuthContext)

    // Verifica a requisição para liberar a página, SE O USUARIO TIVER LOGADO!
    useEffect(() => {
        api.get('/me').then(response => console.log(response));
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const toast = useToast()
     

    return (        

        <Box>
            {/* //Autenticação do usuario em todas as paginas */}
            <Text>{user.email}</Text>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Flex mb="8" justify="space-between" align="center">                        
                        <Heading size="lg" fontWeight="normal">O pin do meu cliente é: 1325</Heading>                                    
                    </Flex>
                    <VStack spacing="6">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">                                                   
                            <Button 
                                colorScheme="blue" 
                                h="40" fontSize="20" 
                                rightIcon={<Icon as={RiPencilLine}
                                fontSize="25"/>}
                                justifyContent="space-between"
                                onClick={onOpen}
                                // isLoading={formState.isSubmitting}
                                // alignItems="center"
                            >
                                Saldo                          
                            </Button>                  
                            <Button 
                                colorScheme="whatsapp" 
                                h="40"fontSize="20" 
                                rightIcon={<Icon as={RiPencilLine}
                                fontSize="25"/>}
                                justifyContent="space-between"
                                onClick={onOpen}
                            >
                                Números Comprados
                            </Button>                           
                        </SimpleGrid>
                    </VStack>
                    <VStack spacing="8" mt="10">
                        <Heading>Comprar Numero</Heading>
                        <Text>Por favor, selecione o serviço (App) para gerar (comprar) seu número virtual.</Text>
                        <SimpleGrid minChildWidth="240px" spacing="4" width="100%">                           
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                          
                            </Link>
                            <Link href="/lancamentos/registration/despesas" passHref>
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>
                            </Link>
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                         
                            </Link>
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                         
                            </Link>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="4" width="100%">                           
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                          
                            </Link>
                            <Link href="/lancamentos/registration/despesas" passHref>
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>
                            </Link>
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                         
                            </Link>
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                         
                            </Link>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="4" width="100%">                           
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                          
                            </Link>
                            <Link href="/lancamentos/registration/despesas" passHref>
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>
                            </Link>
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                         
                            </Link>
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                         
                            </Link>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="4" width="100%">                           
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                          
                            </Link>
                            <Link href="/lancamentos/registration/despesas" passHref>
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>
                            </Link>
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                         
                            </Link>
                            <Link href="/lancamentos/registration/receitas" passHref>                                
                                <Button 
                                    colorScheme="red" 
                                    h="20" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="center"
                                    // alignItems="center"
                                >
                                    Saldo                                    
                                </Button>                         
                            </Link>
                        </SimpleGrid>
                    </VStack>           
                    {/* <Pagination/> */}
                </Box>
            </Flex>
           
            <Modal
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
                        onClick={() =>
                            toast({
                            title: 'PARABÉNS',
                            description: "Sua compra foi efetuada com sucesso!",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                            })
                        } 
                    >
                        Efetuar Compra                                               
                    </Button>
                    
                    <Button onClick={onClose} bg="red.400">Cancelar</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}   
