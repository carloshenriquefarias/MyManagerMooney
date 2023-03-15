import { Box, Flex, Heading, Text, Image, Button, VStack, SimpleGrid, Divider, Input, Icon, 
    Table, Thead, Tr, Th, Td, Select, Tbody, useBreakpointValue, Modal, 
    ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, 
    ModalCloseButton, FormControl, FormLabel, useDisclosure } from "@chakra-ui/react";
import { Header } from "../components/Header/Index";
import { SideBar } from "../components/Sidebar/index";
import { Pagination } from "../components/Pagination";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'
import React from "react";

export default function Saldo(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    // const isWideVersion = useBreakpointValue({
    //     base: false,
    //     lg: true,
    // });

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Flex mb="8" flexDirection="column">                        
                        <Heading size="lg" fontWeight="bold">Adicionar Saldo</Heading>
                        <Text mt="5">Clique em recarregar e depois insira o valor da recarga, valor mínimo: R$ 7,20</Text>
                    </Flex>
                    <VStack spacing="6">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">                                                                               
                            <Button 
                                colorScheme="blue"  
                                h="40"
                                onClick={onOpen}                                   
                                // alignItems="center"
                            > 
                                <VStack width="100%">
                                    <Flex 
                                        fontSize="20"                                            
                                        justifyContent="space-between"
                                        align="center"
                                    >                                        
                                        <Text mt="0">Saldo no PIX:</Text>                                            
                                        {/* <Image src="favicon.png" alt="Girl Coding"/> */}
                                    </Flex> 
                                    <Text mt="10" fontSize="25">12,00 R$</Text> 
                                    <Divider mt="10" mb="10" borderColor="gray.100"></Divider> 
                                    <Flex 
                                        fontSize="20"                                            
                                        justifyContent="center"
                                    >                                        
                                        <Text mt="2"color="blue.100">Recaregar Agora!</Text>
                                    </Flex>
                                </VStack>                                                     
                            </Button>

                            <Button 
                                colorScheme="whatsapp"  
                                h="40"                                   
                                // alignItems="center"
                            > 
                                <VStack width="100%">
                                    <Flex 
                                        fontSize="20"                                            
                                        justifyContent="space-between"
                                        align="center"
                                    >                                        
                                        <Text mt="0">Saldo no Picpay:</Text>                                            
                                        {/* <Image src="favicon.png" alt="Girl Coding"/> */}
                                    </Flex> 
                                    <Text mt="10" fontSize="25">13,92 R$</Text> 
                                    <Divider mt="10" mb="10" borderColor="gray.100"></Divider> 
                                    <Flex 
                                        fontSize="20"                                            
                                        justifyContent="center"
                                    >                                        
                                        <Text mt="2"color="green.200">Recaregar Agora!</Text>
                                    </Flex>
                                </VStack>                                                     
                            </Button> 

                            <Button 
                                colorScheme="orange"  
                                h="40"                                   
                                // alignItems="center"
                            > 
                                <VStack width="100%">
                                    <Flex 
                                        fontSize="20"                                            
                                        justifyContent="space-between"
                                        align="center"
                                    >                                        
                                        <Text mt="0">Saldo em Criptomoedas:</Text>                                            
                                        {/* <Image src="favicon.png" alt="Girl Coding"/> */}
                                    </Flex> 
                                    <Text mt="10" fontSize="25">17,85 R$</Text> 
                                    <Divider mt="10" mb="10" borderColor="gray.100"></Divider> 
                                    <Flex 
                                        fontSize="20"                                            
                                        justifyContent="center"
                                    >                                        
                                        <Text mt="2"color="orange.100">Recaregar Agora!</Text>
                                    </Flex>
                                </VStack>                                                     
                            </Button>                          
                                
                            
                            
                        </SimpleGrid>
                    </VStack> 
                    <Heading mt="10">Histórico de recargas</Heading>    
                    <Table colorScheme="whiteAlpha" width="100%" mt="10">
                        <Thead>
                            <Tr>                                
                                <Th>Forma de Pagamento</Th>
                                <Th>Data</Th>
                                <Th>Hora</Th>
                                <Th>Valor da Recarga</Th>
                                <Th>Status</Th>                                                                                           
                            </Tr>
                        </Thead> 
                        <Tbody>
                            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                <Td fontSize="sm">PIX</Td>
                                <Td fontSize="sm">20/10/2022</Td>  
                                <Td fontSize="sm">17:53:12</Td>  
                                <Td fontSize="sm">500,00 R$</Td>   
                                <Td fontSize="sm">Expirado</Td>                                                                                              
                            </Tr>
                            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                <Td fontSize="sm">PIX</Td>
                                <Td fontSize="sm">20/10/2022</Td>  
                                <Td fontSize="sm">17:53:12</Td>  
                                <Td fontSize="sm">500,00 R$</Td>   
                                <Td fontSize="sm">Expirado</Td>                                                                                              
                            </Tr>                  
                        </Tbody>
                    </Table>         
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
                <ModalHeader color="gray.700">Adicionar o Saldo</ModalHeader>
                {/* <ModalHeader color="blue.400">Saldo Atual: 152,36 R$</ModalHeader> */}
                <ModalCloseButton color="gray.700"/>
                <ModalBody pb={6}>
                    <FormControl>
                    <FormLabel color="gray.700">Digite o Valor da Recarga</FormLabel>
                    <Input ref={initialRef} color="gray.200" placeholder='O valor mínimo precisa ser de 7,20 R$' fontSize="sm" />
                    </FormControl>                    
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Efetuar Compra
                    </Button>
                    <Button onClick={onClose} bg="red.400">Cancelar</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}  

{/* <Link href="/lancamentos/registration/despesas" passHref>
    <Button 
        colorScheme="orange" 
        h="40"fontSize="20" 
        rightIcon={<Icon as={RiPencilLine}
        fontSize="25"/>}
        justifyContent="space-between"
    >
        Criptomoedas
    </Button>
</Link> */}