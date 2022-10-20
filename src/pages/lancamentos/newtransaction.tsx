import { Box, Flex, Heading, Checkbox, Divider, VStack, SimpleGrid, HStack, Button, Text} from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Input } from "../../components/Form/Input";
import Link from 'next/link'
import { FormEvent, useState, useEffect, useRef} from 'react';
import { api } from "../../services/api";
import { toast } from 'react-toastify';

import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

// import {useForm} from 'react-hook-form';

// import { useTransactions } from '../../hooks/useTransactions';

// interface RadioInputProps{
//     isActive: boolean;
// }

interface InputTransactionProps {
    // id: number;
    type: string;
    date: string;
    category: string;
    bills: string;
    payment: string;
    bank: string;
    value: number;
    history: string;    
}

//Fazendo a validação do formulário

const createTransactionFormSchema = yup.object().shape({
    type: yup.string().required(''),
    date: yup.string().required('Escolha a data'),
    category: yup.string().required('Escolha a categoria'),
    bills: yup.string().required('Escolha a conta'),
    payment: yup.string().required('Escolha a forma de pagamento'),
    bank: yup.string().required('Escolha o banco'),
    value: yup.number().required('Digite o valor da transação'),
    history: yup.string().required('Digite o histórico'),        
})

export default function CreateTransaction(){ 
    
    //Validando o formulario da transação

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createTransactionFormSchema)
    });

    const {errors} = formState

    const handleNewTransaction: SubmitHandler<InputTransactionProps> = async (valeus) =>{
        await new Promise (resolve => setTimeout (resolve, 2000));
        console.log('valeus');
    }   

    // Utilizando o useState e armazenando dados

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
        // Colocar o await
        const data = {
            type,
            date,
            category,
            bills,
            payment,
            bank,
            value,
            history
        }        
    }     

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box 
                    as="form" 
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" p="6" 
                    onSubmit={handleSubmit(handleNewTransaction)}
                > 
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
                                // bg={(props) => props.isActive ? 'green' : 'red'}
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

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200" >
                            <Input 
                                name="data" 
                                label="Data da Transação" 
                                type="date" value={date} 
                                onChange={event => setDate(event.target.value)}
                                {...register("data")}
                                error={errors.date}
                            />
                            <Input 
                                name="categoria" 
                                label="Categoria"                                
                                value={category} 
                                onChange={event => setCategory(event.target.value)}
                                {...register("categoria")}
                                error={errors.category}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="conta" 
                                label="Conta"
                                value={bills} 
                                onChange={event => setBills(event.target.value)}
                                {...register("conta")}
                                error={errors.bills}
                            />
                            <Input 
                                name="pagamento" 
                                label="Forma de Pagamento"
                                value={payment} 
                                onChange={event => setPayment(event.target.value)}
                                {...register("pagamento")}
                                error={errors.payment}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="parcelas" 
                                label="Escolha a quantidade de parcelas" 
                                {...register("parcelas")}
                                error={errors.payment}
                            />                           
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="banco" 
                                label="Banco"
                                value={bank} 
                                onChange={event => setBank(event.target.value)}
                                {...register("banco")}
                                error={errors.bank}
                            />
                            <Input 
                                name="valor" 
                                type="number" 
                                label="Valor"
                                value={value} 
                                onChange={event => setValue(Number(event.target.value))}
                                {...register("valor")}
                                error={errors.value}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="historico" 
                                label="Histórico"
                                value={history} 
                                onChange={event => setHistory(event.target.value)}
                                {...register("historico")}
                                error={errors.history}
                            />                           
                        </SimpleGrid>

                    </VStack>
                    <Flex mt="6" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/lancamentos" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>                            
                            {/* <Link href="/lancamentos" passHref>                                 */}
                                <Button 
                                    type="submit" 
                                    colorScheme="whatsapp" 
                                    // ref={searchInputRef}                                     
                                    isLoading={formState.isSubmitting}
                                >
                                    Realizar Lançamento
                                </Button>
                                    {/* if (Input !== null) {
                                        toast.error('Preencha todos os campos do formuário!')              
                                    } else {
                                        toast.success('Transação realizada com suceso!')                                 
                                    } */}
                            {/* </Link> */}
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
}   

    // const {createTransaction} = useTransactions();
    // const searchInputRef = useRef<HTMLInputElement>(null)
    // const {register, handleSubmit} = useForm();

     //     await createTransaction ({
    //         type,
    //         date,              
    //         category,
    //         bills,
    //         payment,
    //         bank,
    //         value, 
    //         history
    //     })

    //     setType('deposit');
    //     setDate('');        
    //     setCategory(''); 
    //     setBills('');       
    //     setPayment('');
    //     setBank('');
    //     setValue(0);
    //     setHistory('');        
    // }  