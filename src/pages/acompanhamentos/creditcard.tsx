import { Box, Flex, Heading, Icon, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Input } from "../../components/Form/Input";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'


export default function CreditCard(){
    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Heading size="lg" fontWeight="normal">Cartões Atuais</Heading>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">                           
                            
                            <Button 
                                colorScheme="orange" 
                                h="60" fontSize="25" 
                                leftIcon={<Icon as={RiSearchLine}
                                justifyContent="space-between"
                                alignItems="center"/>}
                            >
                                Banco Inter
                                {/* Limite do cartão
                                Valor consumido
                                Próxima Fatura */}
                            </Button>
                            
                            <Link href="/lancamentos/registration/despesas" passHref>
                                <Button colorScheme="purple" h="60"fontSize="35" leftIcon={<Icon as={RiSearchLine}fontSize="35"/>}>Nubank</Button>
                            </Link>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">                           
                            <Link href="/lancamentos/registration/bancos" passHref>
                                <Button colorScheme="yellow" color="blue" h="60"fontSize="35"leftIcon={<Icon as={RiSearchLine}fontSize="35"/>}>Banco do Brasil</Button>
                            </Link>
                            <Link href="/lancamentos/registration/outros" passHref>
                                <Button colorScheme="red" h="60"fontSize="35"leftIcon={<Icon as={RiSearchLine}fontSize="35"/>}>Bradesco</Button>
                            </Link>
                        </SimpleGrid>
                        
                    </VStack>                    

                </Box>
            </Flex>
        </Box>
    );
}   