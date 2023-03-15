import { Box, Flex, Heading, Button, Input, Icon, Table, Thead, Tr, Th, Td, Select, Tbody, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Pagination } from "../../components/Pagination";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'

export default function BankAnalisis(){

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
                        <Heading size="lg" fontWeight="normal">Escolha o Banco</Heading>
                        {/* as = a => converte o botao como link para outra pagina */} 
                        <Select width="30%" placeholder='Selecione o banco'variant='filled'bg="gray.700" color="gray.500">
                            <option value='option1'>Itau</option>
                            <option value='option2'>C6 Bank</option>
                            <option value='option3'>Santander</option>
                        </Select>               
                    </Flex>

                    <Table colorScheme="whiteAlpha" width="100%">
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
                    </Table>
                    {/* <Pagination/> */}
                </Box>
            </Flex>
        </Box>
    );
}   