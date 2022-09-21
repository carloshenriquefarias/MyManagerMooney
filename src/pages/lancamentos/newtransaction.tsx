import { Box, Flex, Heading, Checkbox, Divider, VStack, SimpleGrid, HStack, Button, Text} from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Input } from "../../components/Form/Input";
import Link from 'next/link'
import { FormEvent, useState} from 'react';
import { useTransactions } from '../../hooks/useTransactions';


export default function CreateTransaction(){

    const {createTransaction} = useTransactions();

    const [type, setType] = useState('deposit');
    const [date, setDate] = useState('');    
    const [category, setCategory] = useState('');
    const [bills, setBills] = useState('');
    const [payment, setPayment] = useState('');
    const [bank, setBank] = useState('');
    const [value, setValue] = useState(0);
    const [history, setHistory] = useState('')

    async function handleNewCreateTransaction(event: FormEvent){
        event.preventDefault();   

        await createTransaction ({
            type,
            date,              
            category,
            bills,
            payment,
            bank,
            value, 
            history
        })

        setType('deposit');
        setDate('');        
        setCategory(''); 
        setBills('');       
        setPayment('');
        setBank('');
        setValue(0);
        setHistory('');        
    }

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="6"> 
                    <Heading size="lg" fontWeight="normal">Cadastrar Nova Transação</Heading>
                    <Divider my="6" borderColor="gray.700"></Divider>

                    <VStack spacing="6" onSubmit={handleNewCreateTransaction}>
                        
                        <Text>Escolha o tipo de transação que deseja realizar</Text>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%">                            
                            <Button 
                                colorScheme="purple" 
                                gap="2" 
                                type='button' 
                                onClick={() => {setType('deposit');}}
                                isActive={type === 'deposit'}
                                // activeColor="green"
                            >
                                    <Checkbox colorScheme="green"/>
                                    Receitas
                            </Button>
                            <Button 
                                colorScheme="purple" 
                                gap="2"
                                type='button'
                                onClick={() => {setType('withdraw');}} 
                                // activeColor="red"
                                isActive={type === 'withdraw'}
                            >
                                    <Checkbox colorScheme="red"/>
                                    Despesas
                            </Button>                            
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="data" 
                                label="Data da Transação" 
                                type="date" value={date} 
                                onChange={event => setDate(event.target.value)}
                            />
                            <Input 
                                name="categoria" 
                                label="Categoria"                                
                                value={category} 
                                onChange={event => setCategory(event.target.value)}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="conta" 
                                label="Conta"
                                value={bills} 
                                onChange={event => setBills(event.target.value)}
                            />
                            <Input 
                                name="pagamento" 
                                label="Forma de Pagamento"
                                value={payment} 
                                onChange={event => setPayment(event.target.value)}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input name="parcelas" label="Escolha a quantidade de parcelas"/>                           
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="banco" 
                                label="Banco"
                                value={bank} 
                                onChange={event => setBank(event.target.value)}
                            />
                            <Input 
                                name="valor" 
                                type="number" 
                                label="Valor"
                                // value={value} 
                                // onChange={event => setValue(Number(event.target.value))}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="historico" 
                                label="Histórico"
                                value={history} 
                                onChange={event => setHistory(event.target.value)}
                            />                           
                        </SimpleGrid>

                    </VStack>
                    <Flex mt="6" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/lancamentos" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>                            
                            <Link href="/lancamentos" passHref>
                                <Button colorScheme="whatsapp">Realizar Lançamento</Button>
                            </Link>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
}   