import { Box, Flex, Heading,  Checkbox, 
    Divider, VStack, SimpleGrid, HStack, Button, Text, 
    FormErrorMessage, FormLabel, FormControl, Alert, Show
} from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Input } from "../../components/Form/Input";
import { Select } from "../../components/Form/Select";
import Link from 'next/link'
import { FormEvent, useState, useEffect, useRef} from 'react';
import { api } from "../../services/api";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

// interface RadioInputProps{
//     isActive: boolean;
// }

interface TransactionProps {
    // id: number;
    // type: string;
    date: string;
    category: string;
    bills: string;
    payment: string;
    bank: string;
    value: number;
    history: string;    
}

interface ListRevenues{
    id: string;
    categoryOfRevenue: string;
    bills: string;           
}

interface ListBanks{
    id: string;
    bank: string;              
}

interface ListPaymentMethod{
    id: string;
   description: string;              
}

//Fazendo a validação do formulário

export default function CreateTransaction(){  

    const [ListRevenuesTable, setListRevenuesTable] = useState<ListRevenues[]>([]);    
    const [ListBanks, setListBanks] = useState<ListBanks[]>([]); 
    const [ListPaymentMethod, setListPaymentMethod] = useState<ListPaymentMethod[]>([]);
    const [parcelas, setParcelas] = useState('');
    //Validando o formulario da transação

    const createTransactionFormSchema = yup.object().shape({
        // type: yup.string().required(''),
        date: yup.string().required('Escolha a data'),
        category:yup.string().required('Escolha a categoria'),
        bills: yup.string().required('Escolha a conta'),
        payment: yup.string().required('Escolha a forma de pagamento'),
        bank: yup.string().required('Escolha o banco'),
        value: yup.number().required('Digite o valor da transação'),
        history: yup.string().required('Digite o histórico'),
    })

    const {register, handleSubmit, formState} = useForm<TransactionProps>({
        resolver: yupResolver(createTransactionFormSchema)
    });

    const {errors} = formState


    function handleParcelas(value){
        setParcelas(value)
    }
    //Listando novas transações

    const handleNewTransaction: SubmitHandler<TransactionProps> = async (dados) =>{
        // await new Promise (resolve => setTimeout (resolve, 1200));
        console.log(dados);        

        try {
            const response = await api.post('/newtransaction', {                
                // type: dados.type,
                date: dados.date,
                category: dados.category,
                bills: dados.bills,
                payment: dados.payment,
                bank: dados.bank,
                value: dados.value,
                history: dados.history                
            })
            console.log(response.data)                 

        } catch (error) {  

        }        
        toast.success('Seu cadastro foi realizado com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }   
        
    //Pegando os dados da API e Listando as receitas cadastradas na tabela

    //Receitas
    useEffect(() => {
        async function loadRevenues() {          
            await api.get('/revenues').then( response => {
                setListRevenuesTable(response.data);
                console.log(response.data);
            })      
        }

        async function ListBanks() {          
            await api.get('/banks').then( response => {
                setListBanks(response.data);
                console.log(response.data);
            })      
        }
        async function ListPaymentMethod() {          
            await api.get('/payment').then( response => {
                setListPaymentMethod(response.data);
                console.log(response.data);
            })      
        }



        loadRevenues();    
        ListBanks(); 
        ListPaymentMethod();   
    }, []); 

    
   
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

                    <VStack spacing="6" >                        
                        <Text>Escolha o tipo de transação que deseja realizar</Text>
                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%">                            
                            <Button 
                                colorScheme="teal" 
                                gap="2" 
                                type='button' 
                                // onClick={() => {setType('deposit');}}
                                // isActive={type === 'deposit'}
                                // bg={(props) => props.isActive ? 'green' : 'red'}
                                // activeColor="green"
                            >
                                <Checkbox colorScheme="green"/>
                                Receitas
                            </Button>
                            <Button 
                                colorScheme="teal" 
                                gap="2"
                                type='button'
                                // onClick={() => {setType('withdraw');}} 
                                // activeColor="red"
                                // isActive={type === 'withdraw'}
                            >
                                <Checkbox colorScheme="red"/>
                                Despesas
                            </Button>                            
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200" >
                           <Input 
                                name="data" 
                                label="Data da Transação" 
                                type="date"                                
                                {...register("date")}
                                error={errors.date}
                            /> 
                            <Select                                
                                name="categoria" 
                                label="Escolha a categoria"                     
                                error={errors.category}                                                               
                                option={ListRevenuesTable.map(revenue => {
                                    return (
                                        <option key={revenue.id} value={revenue.id}>
                                            {revenue.categoryOfRevenue}
                                        </option>
                                    )
                                })}
                                {...register("category")}                               
                            >                              
                            </Select>                  
                        </SimpleGrid>   

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200" >                            
                            <Select                                                        
                                name="conta" 
                                label="Conta"                                            
                                error={errors.bills}                                                               
                                option={ListRevenuesTable.map(revenue => {
                                    return (                                        
                                        <option key={revenue.id} value={revenue.id}>
                                            {revenue.bills}
                                        </option>
                                    )
                                })}  
                                {...register("bills")}                               
                            >                              
                            </Select>                        
                            <Select      
                                
                                onChange={event => setParcelas(event.target.value)}                        
                                name="pagamento" 
                                label="Forma de Pagamento"                      
                                error={errors.payment}                                                               
                                option={ListPaymentMethod.map(ListPayment => {
                                    return (
                                        <option key={ListPayment.id} value={ListPayment.id}>
                                            {ListPayment.description}
                                        </option>
                                    )
                                })}  
                                {...register("payment")}                               
                            >                              
                            </Select>                            
                        </SimpleGrid>     
                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <label htmlFor="">Parcelas: {parcelas}</label>
                        </SimpleGrid>
                                 

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            {/* <Input 
                                name="parcelas" 
                                label="Escolha a quantidade de parcelas"
                                type="number" 
                                // {...register("parcelas")}
                                // error={errors.payment}
                            />  */}
                            {(parcelas=='Cartão') ? 
                                
                            <NumberInput defaultValue={0} min={0} max={2000}>                                
                                <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                            </NumberInput> 
                            
                            : null }
                        </SimpleGrid>                       
                       
                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">                    
                            <Select                                
                                name="bank"                                 
                                label="Nome do banco"                      
                                error={errors.bank}                                                               
                                option={ListBanks.map(BankList => {
                                    return (
                                        <option key={BankList.id} value={BankList.id}>
                                            {BankList.bank}
                                        </option>
                                    )
                                })}  
                                {...register("bank")}                               
                            >                              
                            </Select>     
                            <Input 
                                name="valor" 
                                type="number" 
                                label="Valor"                        
                                error={errors.value}
                                {...register("value")}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="historico" 
                                label="Histórico"                                
                                {...register("history")}
                                error={errors.history}
                            />                           
                        </SimpleGrid>                       

                    </VStack>
                    <Flex mt="6" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/lancamentos" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>                      
                            <Button 
                                type="submit" 
                                colorScheme="whatsapp" 
                                // ref={searchInputRef}                                     
                                isLoading={formState.isSubmitting}                                                      
                            >
                                Realizar Lançamento
                            </Button>                   
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
            <ToastContainer/>
        </Box>
    );
}   

