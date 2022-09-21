import { Box, Flex, Heading, Icon, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import { Header } from "../../../components/Header/Index";
import { SideBar } from "../../../components/Sidebar/index";
import { Input } from "../../../components/Form/Input";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'


export default function Bancos(){
    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Heading size="lg" fontWeight="normal">
                        Realize seu Novo Cadastro                        
                    </Heading>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input 
                                name="data" 
                                label="Informe a Categoria da Receita" 
                                placeholder="Ex: Receitas Familiares"
                            />
                            <Input 
                                name="categoria" 
                                label="Informe a conta que deseja cadastrar" 
                                placeholder="Ex: Salário"
                            />                            
                        </SimpleGrid>                       
                        
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/lancamentos/cadastros" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link> 
                            <Link href="/lancamentos/cadastros" passHref>                           
                                <Button colorScheme="whatsapp">Finalizar Cadastro </Button> 
                            </Link>                           
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
}   