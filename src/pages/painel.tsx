import { Box, Flex, Heading, Text, Button, VStack, SimpleGrid, Divider, Input, Icon, Table, Thead, Tr, Th, Td, Select, Tbody, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header/Index";
import { SideBar } from "../components/Sidebar/index";
import { Pagination } from "../components/Pagination";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'

export default function BankAnalisis(){

    // const isWideVersion = useBreakpointValue({
    //     base: false,
    //     lg: true,
    // });

    return (
        <Box>
            {/* <Header/> */}
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                {/* <SideBar /> */}
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Flex mb="8" justify="space-between" align="center">
                        {/* <Text>O pin do meu cliente é: 1325</Text> */}
                        <Heading size="lg" fontWeight="normal">O pin do meu cliente é: 1325</Heading>
                        
                        {/* as = a => converte o botao como link para outra pagina */} 
                        {/* <Select width="30%" placeholder='Selecione o banco'variant='filled'bg="gray.700" color="gray.500">
                            <option value='option1'>Itau</option>
                            <option value='option2'>C6 Bank</option>
                            <option value='option3'>Santander</option>
                        </Select>                */}
                    </Flex>
                    <VStack spacing="6">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">                           
                            <Link href="/lancamentos/registration/receitas" passHref> 
                                                           
                                <Button 
                                    colorScheme="blue" 
                                    h="40" fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="space-between"
                                    // alignItems="center"
                                >
                                    Saldo
                                    {/* <Text mt="20" p="10">1536,00 R$</Text> */}
                                    {/* <Flex>
                                        <Divider mt="10" my="6" borderColor="gray.700"></Divider>
                                        <Text mt="20" p="3">1536,00 R$</Text>
                                    </Flex>                             */}
                                </Button>                         
                                
                            </Link>
                            <Link href="/lancamentos/registration/despesas" passHref>
                                <Button 
                                    colorScheme="whatsapp" 
                                    h="40"fontSize="20" 
                                    rightIcon={<Icon as={RiPencilLine}
                                    fontSize="25"/>}
                                    justifyContent="space-between"
                                >
                                    Números Comprados
                                </Button>
                            </Link>
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
        </Box>
    );
}   

{/* <Table colorScheme="whiteAlpha" width="100%">
        <Thead>
            <Tr>                                
                <Th>Saldo Inicial</Th>
                <Th>Entradas</Th>
                <Th>Saidas</Th>
                <Th>Saldo</Th>
                <Th>Acumulado</Th>
                <Th>Lucratividade</Th>                                                              
            </Tr>
        </Thead> 
        <Tbody>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Janeiro</Td>
                <Td fontSize="sm">1.000,00 R$</Td>  
                <Td fontSize="sm">2.000,00 R$</Td>  
                <Td fontSize="sm">1.500,00 R$</Td>   
                <Td fontSize="sm">1.500,00 R$</Td>  
                <Td fontSize="sm">50%</Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Fevereiro</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Março</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Abril</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Maio</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Junho</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Julho</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Agosto</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Setembro</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Outubro</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Novembro</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Dezembro</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr> 
            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                <Td fontSize="sm">Total</Td>
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>   
                <Td fontSize="sm"></Td>  
                <Td fontSize="sm"></Td>                                                               
            </Tr>                   
        </Tbody>
    </Table> */}