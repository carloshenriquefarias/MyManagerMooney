import { Box, Spinner, Text, Flex, Heading, Icon, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import { Header } from "../../../components/Header/Index";
import { SideBar } from "../../../components/Sidebar/index";
import { Input } from "../../../components/Form/Input";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'
import { useEffect, useState, FormEvent } from "react";
import { api } from "../../../services/api";
import { toast } from 'react-toastify';


export default function Receitas(){

    const [categoryOfRevenue, setcategoryOfRevenue] = useState('');
    const [bills, setBills] = useState(''); 

    async function handleNewCreateRevenue(event: FormEvent){
        event.preventDefault();   
        console.log('valor do categoryOfRevenue: ', categoryOfRevenue)
        console.log('valor do bills: ', bills)

        try {
            const response = await api.post('/revenues', {
                categoryOfRevenue : categoryOfRevenue,
                bills: bills               
                
            })

            console.log(response.data)

            if (response) {
                toast.success('Seu cadastro foi realizado com sucesso!');
                return;
            }

        } catch (error) {
            
        }

        // await handleNewCreateRevenue ({
        //     categoryOfRevenue, 
        //     bills            
        // })

        // setcategoryOfRevenue('');
        // setBills('');        
    }

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8" 
                    as="form" onSubmit={handleNewCreateRevenue}
                >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" justifyContent="space-between" alignItems="center">
                            <Text>Informe a Nova Receita</Text>                                              
                        </Heading>
                        <Link href="/lancamentos/registration/lists/revenues" passHref>
                            <Button colorScheme="pink">Lista de Receitas </Button> 
                        </Link>
                    </Flex>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input 
                                name="data" 
                                label="Informe a Categoria da Receita" 
                                placeholder="Ex: Receitas Familiares"
                                value={categoryOfRevenue} 
                                onChange={event => setcategoryOfRevenue(event.target.value)}
                            />
                            <Input 
                                name="categoria" 
                                label="Informe a conta que deseja cadastrar" 
                                placeholder="Ex: Salário"
                                value={bills} 
                                onChange={event => setBills(event.target.value)}
                            />                            
                        </SimpleGrid>                       
                        
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4" >
                            <Link href="/lancamentos/registration/lists/revenues" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link> 
                            {/* <Link href="/lancamentos/registration/lists/revenues" passHref>                            */}
                            <Button 
                                colorScheme="whatsapp" 
                                type="submit"
                            >
                                Finalizar Cadastro 
                            </Button> 
                                {/* <Spinner size="sm" color="gray.500" ml="4"/> */}
                            {/* </Link>                            */}
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
}   