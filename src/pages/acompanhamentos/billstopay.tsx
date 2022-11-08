import { Box, Flex, Heading, Button, Input, Icon, Table, Select, Thead, Tr, Th, Td, Checkbox, Tbody, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Pagination } from "../../components/Pagination";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'

export default function BillsToPay(){

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
                        <Heading size="lg" fontWeight="normal">Contas a Receber</Heading>
                        {/* as = a => converte o botao como link para outra pagina */}     
                        {/* leftIcon={<Icon as={RiFilter2Line}fontSize="16"/>}                    */}
                        {/* <Input placeholder="Selecione a Categoria" w="50" fontSize="sm"></Input> 
                        <Input placeholder="Selecione a Categoria" w="50" fontSize="sm"></Input>
                        <Input placeholder="Selecione a Categoria" w="50" fontSize="sm"></Input>
                        <Button 
                            // as="a" 
                            size="md" 
                            fontSize="sm" 
                            colorScheme="whatsapp"
                            leftIcon={<Icon as={RiSearchLine}fontSize="20"/>}
                        > 
                            Pesquisar
                        </Button>                      */}
                        <Flex>                        
                            <Select
                                name="select"
                                bg="gray.900"                                
                                // w="25%"
                                // size=""
                                // fontsize="sm"                                 
                                // label="Nome do banco"                             
                            >
                                <option value='option1' color="gray.700">Janeiro</option>
                                <option value='option2' color="gray.700">Fevereiro</option>
                                <option value='option3' color="gray.700">Março</option>
                            </Select>
                            <Select
                                name="select"
                                bg="gray.900"
                                // w="25%"
                                // fontsize="sm"                                 
                                // label="Nome do banco"                             
                            >
                                <option value='option1' color="gray.700">Janeiro</option>
                                <option value='option2' color="gray.700">Fevereiro</option>
                                <option value='option3' color="gray.700">Março</option>
                            </Select>
                        </Flex>
                        
                    </Flex>
                    <Table colorScheme="whiteAlpha" width="100%">
                        <Thead>
                            <Tr>
                                {/* <Th px={["4","6"]} color="gray.300" width="8"> */}
                                    
                                    {/* <Checkbox colorScheme="pink"/>*/}
                                {/* </Th> */}
                                <Th>Descrição da Conta</Th>
                                <Th>Data do Vencimento</Th>
                                <Th>Categoria</Th>
                                <Th>Parcelas</Th>
                                <Th>Valor Total da Compra</Th>
                                <Th>Valor Pago Atualmente</Th>
                                <Th>Valor Restante a Pagar</Th>  
                                <Th>Status da Compra</Th>                              
                            </Tr>
                        </Thead> 
                        <Tbody fontSize="10" textAlign="center">
                            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                <Td fontSize="sm">Compra do Computador</Td>
                                <Td fontSize="sm">Segunda, 12 de Setembro de 2022</Td>  
                                <Td fontSize="sm">Alimentação</Td>  
                                <Td fontSize="sm">3 de 10</Td> 
                                <Td fontSize="sm">2.000,00 R$</Td>  
                                <Td fontSize="sm">1.500,00 R$</Td>  
                                <Td fontSize="sm">500,00 R$</Td>
                                <Td fontSize="sm">Em Andamento</Td>                             
                                {/* { isWideVersion && <Td>12 de setembro de 2022</Td>} */}                                
                            </Tr>
                            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                <Td fontSize="sm">Compra do Computador</Td>
                                <Td fontSize="sm">Segunda, 12 de Setembro de 2022</Td>  
                                <Td fontSize="sm">Alimentação</Td>  
                                <Td fontSize="sm">3 de 10</Td> 
                                <Td fontSize="sm">3.000,00 R$</Td> 
                                <Td fontSize="sm">1.000,00 R$</Td>  
                                <Td fontSize="sm">200,00 R$</Td>
                                <Td fontSize="sm">Atrasada</Td>                             
                                {/* { isWideVersion && <Td>12 de setembro de 2022</Td>} */}                                
                            </Tr>
                            <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                <Td fontSize="sm">Compra do Computador</Td>
                                <Td fontSize="sm">Segunda, 12 de Setembro de 2022</Td>  
                                <Td fontSize="sm">Alimentação</Td>  
                                <Td fontSize="sm">3 de 10</Td>  
                                <Td fontSize="sm">5.000,00 R$</Td> 
                                <Td fontSize="sm">2.000,00 R$</Td>  
                                <Td fontSize="sm">3.000,00 R$</Td>
                                <Td fontSize="sm">Paga</Td>                             
                                {/* { isWideVersion && <Td>12 de setembro de 2022</Td>} */}                                
                            </Tr>
                            
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    );
}   