import { Header } from "../components/Header/Index";
import { SideBar } from "../components/Sidebar/index";
import {Flex, Box, Text, Button, VStack, Stack, Divider, SimpleGrid, Table, Thead, Tr, Tbody, Td, Th } from '@chakra-ui/react'
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";
import { Tooltip } from "@chakra-ui/core";
import {Icon, HStack} from '@chakra-ui/react'
import {RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

import { useContext, useEffect } from "react";
// import { api } from "../services/apiClient";
import { AuthContext } from "../components/Users/AuthContext";
// import { withSSRAuth } from "../utils/withSSRAuth";
// import { setupAPIClient } from "../services/api";

export default function Dashboard(){
    return (        
        <Flex direction="column" height="100vh"> 
            <Header/>              
                    
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />                
                                        
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start"> 
                    <Flex direction="column"> 

                        {/* //Paineis                    */}
                        <Stack spacing="6" >
                            <SimpleGrid minChildWidth="240px" spacing="4" width="100%">                                                                               
                                <Button 
                                    bg="gray.50"  
                                    h="40"
                                    // onClick={onOpen}                                   
                                    // alignItems="center"
                                > 
                                    <VStack width="100%">
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="flex-start"
                                            align="left"
                                            // bg="red"
                                        >                                                                                  
                                            <Icon as={RiNotificationLine} fontSize={20} color="gray.600"/>
                                            <Text mt="0"></Text>
                                        </Flex> 
                                        <Text mt="12" fontSize="50" color="gray.600">120</Text> 
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="center"
                                        >                                        
                                            <Text mt="2"color="gray.600">Total de Pedidos</Text>
                                        </Flex>
                                    </VStack>                                                     
                                </Button>

                                <Button 
                                    bg="gray.50"  
                                    h="40"
                                    // onClick={onOpen}                                   
                                    // alignItems="center"
                                > 
                                    <VStack width="100%">
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="flex-start"
                                            align="left"
                                            // bg="red"
                                        >                                                                                  
                                            <Icon as={RiNotificationLine} fontSize={20} color="gray.600"/>
                                            <Text mt="0"></Text>
                                        </Flex> 
                                        <Text mt="12" fontSize="50" color="gray.600">186</Text> 
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="center"
                                        >                                        
                                            <Text mt="2"color="gray.600">Pedidos em Trânsito</Text>
                                        </Flex>
                                    </VStack>                                                     
                                </Button>

                                <Button 
                                    bg="gray.50"  
                                    h="40"
                                    // onClick={onOpen}                                   
                                    // alignItems="center"
                                > 
                                    <VStack width="100%">
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="flex-start"
                                            align="left"
                                            // bg="red"
                                        >                                                                                  
                                            <Icon as={RiNotificationLine} fontSize={20} color="gray.600"/>
                                            <Text mt="0"></Text>
                                        </Flex> 
                                        <Text mt="12" fontSize="50" color="gray.600">359</Text> 
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="center"
                                        >                                        
                                            <Text mt="2"color="gray.600">Pedidos Entregues</Text>
                                        </Flex>
                                    </VStack>                                                     
                                </Button>

                                <Button 
                                    bg="gray.50"  
                                    h="40"
                                    // onClick={onOpen}                                   
                                    // alignItems="center"
                                > 
                                    <VStack width="100%">
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="flex-start"
                                            align="left"
                                            // bg="red"
                                        >                                                                                  
                                            <Icon as={RiNotificationLine} fontSize={20} color="gray.600"/>
                                            <Text mt="0"></Text>
                                        </Flex> 
                                        <Text mt="12" fontSize="50" color="gray.600">78</Text> 
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="center"
                                        >                                        
                                            <Text mt="2"color="gray.600">Pedidos Cancelados</Text>
                                        </Flex>
                                    </VStack>                                                     
                                </Button>                      
                            </SimpleGrid>
                        </Stack> 

                        <HStack 
                            fontSize="20"                                            
                            justifyContent="flex-start"
                            align="center"
                            mt={10}
                            // bg="red"
                        >                                                                                  
                            <Icon as={RiNotificationLine} fontSize={20} color="gray.600"/>
                            <Text mt="0" fontSize={20}>Últimos Pedidos</Text>
                        </HStack>  

                        <Text mt="5">23 de Fevereiro de 2023</Text>
{/*                        
                        <Stack spacing="5">
                            <SimpleGrid minChildWidth="240px" width="50%">                                                                               
                                <Flex direction="column">
                                    <VStack 
                                        width="100%" 
                                        bg="gray.50" 
                                        borderRadius={10}
                                        h="40"
                                        pt={5} 
                                        mt={5} 
                                        justifyContent="flex-start" 
                                        alignItems="left"
                                    >
                                        <HStack bg="gray.50" h="15" width="100%" pl={5}>
                                            <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                            <HStack justifyContent="space-between" alignItems="center">
                                                <Text fontSize="15" color="gray.600" fontWeight="bold">Status do Produto:</Text>
                                                <Text fontSize="15" color="gray.600">Entregue</Text>
                                            </HStack>
                                        </HStack>  

                                        <HStack bg="gray.50" h="15" width="100%" pl={5} mb={5}>
                                            <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                            <HStack justifyContent="space-between" alignItems="center">
                                                <Text fontSize="15" color="gray.600" fontWeight="bold">Número do Pedido:</Text>
                                                <Text fontSize="15" color="gray.600">1054896352</Text>
                                            </HStack>
                                        </HStack>   

                                        <HStack bg="gray.50" h="15" width="100%" pl={5} mt={5}>
                                            <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                            <HStack justifyContent="space-between" alignItems="center">
                                                <Text fontSize="15" color="gray.600">Nota Fiscal:</Text>
                                                <Text fontSize="15" color="gray.600">125.965.982.874</Text>
                                            </HStack>
                                        </HStack>  

                                        <HStack bg="gray.50" h="15" width="100%" pl={5}>
                                            <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                            <HStack justifyContent="space-between" alignItems="center">
                                                <Text fontSize="15" color="gray.600">Previsão de Entrega:</Text>
                                                <Text fontSize="15" color="gray.600">10 de março de 2023</Text>
                                            </HStack>
                                        </HStack>  

                                        <HStack bg="gray.50" h="15" width="100%" pl={5}>
                                            <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                            <HStack justifyContent="space-between" alignItems="center">
                                                <Text fontSize="15" color="gray.600">Valor do Pedido:</Text>
                                                <Text fontSize="15" color="gray.600">R$ 156,58</Text>
                                            </HStack>
                                        </HStack> 

                                        <Text 
                                            mt="5" 
                                            pr={5} 
                                            color="blue.500" 
                                            fontWeight="bold" 
                                            fontSize="10"
                                            alignSelf="right"
                                            textAlign="right"
                                        >
                                            Mostrar detalhes do produto
                                        </Text>                                                                        
                                    </VStack> 
                                </Flex>                                                                               
                            </SimpleGrid>                            
                        </Stack>       */}


                        <SimpleGrid minChildWidth="240px" width="100%" spacing="2" justifyContent="space-between" alignItems="center">
                            {/* <Stack spacing="10"> */}
                                <SimpleGrid minChildWidth="240px" width="100%" pr={2}>                                                                               
                                    <Flex direction="column">
                                        <HStack
                                            width="100%" 
                                            bg="gray.50" 
                                            borderRadius={10}
                                            h="40"
                                            // pt={5} 
                                            // mt={5} 
                                            justifyContent="flex-start" 
                                            alignItems="left"
                                        >
                                            <Box 
                                                fontSize="60" 
                                                width="20" 
                                                h={40} 
                                                color="gray.600" 
                                                fontWeight="bold" 
                                                p={5} 
                                                pt={8}
                                                // borderRadius='100%' 
                                                bg="gray.100"
                                                alignItems="center"
                                                justifyContent="center"
                                                // ml={-20}
                                            > 
                                                1
                                            </Box>
                                        
                                            <VStack 
                                                width="100%" 
                                                bg="gray.50" 
                                                borderRadius={10}
                                                h="40"
                                                pt={5} 
                                                mt={5} 
                                                justifyContent="flex-start" 
                                                alignItems="left"
                                            >
                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Status do Produto:</Text>
                                                        <Text fontSize="15" color="gray.600">Entregue</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mb={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Número do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">1054896352</Text>
                                                    </HStack>
                                                </HStack>   

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mt={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Nota Fiscal:</Text>
                                                        <Text fontSize="15" color="gray.600">125.965.982.874</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Previsão de Entrega:</Text>
                                                        <Text fontSize="15" color="gray.600">10 de março de 2023</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Valor do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">R$ 156,58</Text>
                                                    </HStack>
                                                </HStack> 

                                                <Text 
                                                    mt="5" 
                                                    pr={5} 
                                                    color="blue.500" 
                                                    fontWeight="bold" 
                                                    fontSize="10"
                                                    alignSelf="right"
                                                    textAlign="right"
                                                >
                                                    Mostrar detalhes do produto
                                                </Text>                                                                         
                                            </VStack> 
                                        </HStack>
                                    </Flex>                                                                               
                                </SimpleGrid>                            
                            {/* </Stack>    */}

                            <Stack spacing="5">
                                <SimpleGrid minChildWidth="240px" width="100%">                                                                               
                                    <Flex direction="column">
                                        <HStack
                                            width="100%" 
                                            bg="gray.50" 
                                            borderRadius={10}
                                            h="40"
                                            // pt={5} 
                                            // mt={5} 
                                            justifyContent="flex-start" 
                                            alignItems="left"
                                        >
                                            <Box 
                                                fontSize="60" 
                                                width="20" 
                                                h={40} 
                                                color="gray.600" 
                                                fontWeight="bold" 
                                                p={5} 
                                                pt={8}
                                                // borderRadius='100%' 
                                                bg="gray.100"
                                                alignItems="center"
                                                justifyContent="center"
                                                // ml={-20}
                                            > 
                                                2
                                            </Box>
                                        
                                            <VStack 
                                                width="100%" 
                                                bg="gray.50" 
                                                borderRadius={10}
                                                h="40"
                                                pt={5} 
                                                mt={5} 
                                                justifyContent="flex-start" 
                                                alignItems="left"
                                            >
                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Status do Produto:</Text>
                                                        <Text fontSize="15" color="gray.600">Entregue</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mb={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Número do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">1054896352</Text>
                                                    </HStack>
                                                </HStack>   

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mt={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Nota Fiscal:</Text>
                                                        <Text fontSize="15" color="gray.600">125.965.982.874</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Previsão de Entrega:</Text>
                                                        <Text fontSize="15" color="gray.600">10 de março de 2023</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Valor do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">R$ 156,58</Text>
                                                    </HStack>
                                                </HStack> 

                                                <Text 
                                                    mt="5" 
                                                    pr={5} 
                                                    color="blue.500" 
                                                    fontWeight="bold" 
                                                    fontSize="10"
                                                    alignSelf="right"
                                                    textAlign="right"
                                                >
                                                    Mostrar detalhes do produto
                                                </Text>                                                                         
                                            </VStack> 
                                        </HStack>
                                    </Flex>                                                                               
                                </SimpleGrid>                            
                            </Stack>
                        </SimpleGrid>  

                         <SimpleGrid minChildWidth="240px" width="100%" mt={4} spacing="2" justifyContent="space-between" alignItems="center">
                            {/* <Stack spacing="10"> */}
                                <SimpleGrid minChildWidth="240px" width="100%" pr={2}>                                                                               
                                    <Flex direction="column">
                                        <HStack
                                            width="100%" 
                                            bg="gray.50" 
                                            borderRadius={10}
                                            h="40"
                                            // pt={5} 
                                            // mt={5} 
                                            justifyContent="flex-start" 
                                            alignItems="left"
                                        >
                                            <Box 
                                                fontSize="60" 
                                                width="20" 
                                                h={40} 
                                                color="gray.600" 
                                                fontWeight="bold" 
                                                p={5} 
                                                pt={8}
                                                // borderRadius='100%' 
                                                bg="gray.100"
                                                alignItems="center"
                                                justifyContent="center"
                                                // ml={-20}
                                            > 
                                                3
                                            </Box>
                                        
                                            <VStack 
                                                width="100%" 
                                                bg="gray.50" 
                                                borderRadius={10}
                                                h="40"
                                                pt={5} 
                                                mt={5} 
                                                justifyContent="flex-start" 
                                                alignItems="left"
                                            >
                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Status do Produto:</Text>
                                                        <Text fontSize="15" color="gray.600">Entregue</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mb={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Número do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">1054896352</Text>
                                                    </HStack>
                                                </HStack>   

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mt={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Nota Fiscal:</Text>
                                                        <Text fontSize="15" color="gray.600">125.965.982.874</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Previsão de Entrega:</Text>
                                                        <Text fontSize="15" color="gray.600">10 de março de 2023</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Valor do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">R$ 156,58</Text>
                                                    </HStack>
                                                </HStack> 

                                                <Text 
                                                    mt="5" 
                                                    pr={5} 
                                                    color="blue.500" 
                                                    fontWeight="bold" 
                                                    fontSize="10"
                                                    alignSelf="right"
                                                    textAlign="right"
                                                >
                                                    Mostrar detalhes do produto
                                                </Text>                                                                         
                                            </VStack> 
                                        </HStack>
                                    </Flex>                                                                               
                                </SimpleGrid>                            
                            {/* </Stack>    */}

                            <Stack spacing="5">
                                <SimpleGrid minChildWidth="240px" width="100%">                                                                               
                                    <Flex direction="column">
                                        <HStack
                                            width="100%" 
                                            bg="gray.50" 
                                            borderRadius={10}
                                            h="40"
                                            // pt={5} 
                                            // mt={5} 
                                            justifyContent="flex-start" 
                                            alignItems="left"
                                        >
                                            <Box 
                                                fontSize="60" 
                                                width="20" 
                                                h={40} 
                                                color="gray.600" 
                                                fontWeight="bold" 
                                                p={5} 
                                                pt={8}
                                                // borderRadius='100%' 
                                                bg="gray.100"
                                                alignItems="center"
                                                justifyContent="center"
                                                // ml={-20}
                                            > 
                                                4
                                            </Box>
                                        
                                            <VStack 
                                                width="100%" 
                                                bg="gray.50" 
                                                borderRadius={10}
                                                h="40"
                                                pt={5} 
                                                mt={5} 
                                                justifyContent="flex-start" 
                                                alignItems="left"
                                            >
                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Status do Produto:</Text>
                                                        <Text fontSize="15" color="gray.600">Entregue</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mb={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Número do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">1054896352</Text>
                                                    </HStack>
                                                </HStack>   

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mt={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Nota Fiscal:</Text>
                                                        <Text fontSize="15" color="gray.600">125.965.982.874</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Previsão de Entrega:</Text>
                                                        <Text fontSize="15" color="gray.600">10 de março de 2023</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Valor do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">R$ 156,58</Text>
                                                    </HStack>
                                                </HStack> 

                                                <Text 
                                                    mt="5" 
                                                    pr={5} 
                                                    color="blue.500" 
                                                    fontWeight="bold" 
                                                    fontSize="10"
                                                    alignSelf="right"
                                                    textAlign="right"
                                                >
                                                    Mostrar detalhes do produto
                                                </Text>                                                                         
                                            </VStack> 
                                        </HStack>
                                    </Flex>                                                                               
                                </SimpleGrid>                            
                            </Stack>
                        </SimpleGrid> 

                        <SimpleGrid minChildWidth="240px" width="100%" mt={4} spacing="2" justifyContent="space-between" alignItems="center">
                            {/* <Stack spacing="10"> */}
                                <SimpleGrid minChildWidth="240px" width="100%" pr={2}>                                                                               
                                    <Flex direction="column">
                                        <HStack
                                            width="100%" 
                                            bg="gray.50" 
                                            borderRadius={10}
                                            h="40"
                                            // pt={5} 
                                            // mt={5} 
                                            justifyContent="flex-start" 
                                            alignItems="left"
                                        >
                                            <Box 
                                                fontSize="60" 
                                                width="20" 
                                                h={40} 
                                                color="gray.600" 
                                                fontWeight="bold" 
                                                p={5} 
                                                pt={8}
                                                // borderRadius='100%' 
                                                bg="gray.100"
                                                alignItems="center"
                                                justifyContent="center"
                                                // ml={-20}
                                            > 
                                                5
                                            </Box>
                                        
                                            <VStack 
                                                width="100%" 
                                                bg="gray.50" 
                                                borderRadius={10}
                                                h="40"
                                                pt={5} 
                                                mt={5} 
                                                justifyContent="flex-start" 
                                                alignItems="left"
                                            >
                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Status do Produto:</Text>
                                                        <Text fontSize="15" color="gray.600">Entregue</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mb={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Número do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">1054896352</Text>
                                                    </HStack>
                                                </HStack>   

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mt={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Nota Fiscal:</Text>
                                                        <Text fontSize="15" color="gray.600">125.965.982.874</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Previsão de Entrega:</Text>
                                                        <Text fontSize="15" color="gray.600">10 de março de 2023</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Valor do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">R$ 156,58</Text>
                                                    </HStack>
                                                </HStack> 

                                                <Text 
                                                    mt="5" 
                                                    pr={5} 
                                                    color="blue.500" 
                                                    fontWeight="bold" 
                                                    fontSize="10"
                                                    alignSelf="right"
                                                    textAlign="right"
                                                >
                                                    Mostrar detalhes do produto
                                                </Text>                                                                         
                                            </VStack> 
                                        </HStack>
                                    </Flex>                                                                               
                                </SimpleGrid>                            
                            {/* </Stack>    */}

                            <Stack spacing="5">
                                <SimpleGrid minChildWidth="240px" width="100%">                                                                               
                                    <Flex direction="column">
                                        <HStack
                                            width="100%" 
                                            bg="gray.50" 
                                            borderRadius={10}
                                            h="40"
                                            // pt={5} 
                                            // mt={5} 
                                            justifyContent="flex-start" 
                                            alignItems="left"
                                        >
                                            <Box 
                                                fontSize="60" 
                                                width="20" 
                                                h={40} 
                                                color="gray.600" 
                                                fontWeight="bold" 
                                                p={5} 
                                                pt={8}
                                                // borderRadius='100%' 
                                                bg="gray.100"
                                                alignItems="center"
                                                justifyContent="center"
                                                // ml={-20}
                                            > 
                                                6
                                            </Box>
                                        
                                            <VStack 
                                                width="100%" 
                                                bg="gray.50" 
                                                borderRadius={10}
                                                h="40"
                                                pt={5} 
                                                mt={5} 
                                                justifyContent="flex-start" 
                                                alignItems="left"
                                            >
                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Status do Produto:</Text>
                                                        <Text fontSize="15" color="gray.600">Entregue</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mb={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600" fontWeight="bold">Número do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">1054896352</Text>
                                                    </HStack>
                                                </HStack>   

                                                <HStack bg="gray.50" h="15" width="100%" pl={3} mt={5}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Nota Fiscal:</Text>
                                                        <Text fontSize="15" color="gray.600">125.965.982.874</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Previsão de Entrega:</Text>
                                                        <Text fontSize="15" color="gray.600">10 de março de 2023</Text>
                                                    </HStack>
                                                </HStack>  

                                                <HStack bg="gray.50" h="15" width="100%" pl={3}>
                                                    <Icon as={RiNotificationLine} fontSize={15} color="gray.600"/>
                                                    <HStack justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="15" color="gray.600">Valor do Pedido:</Text>
                                                        <Text fontSize="15" color="gray.600">R$ 156,58</Text>
                                                    </HStack>
                                                </HStack> 

                                                <Text 
                                                    mt="5" 
                                                    pr={5} 
                                                    color="blue.500" 
                                                    fontWeight="bold" 
                                                    fontSize="10"
                                                    alignSelf="right"
                                                    textAlign="right"
                                                >
                                                    Mostrar detalhes do produto
                                                </Text>                                                                         
                                            </VStack> 
                                        </HStack>
                                    </Flex>                                                                               
                                </SimpleGrid>                            
                            </Stack>
                        </SimpleGrid>                                  
                    </Flex>
                </SimpleGrid>
            </Flex>
        </Flex>
        
    )
}
