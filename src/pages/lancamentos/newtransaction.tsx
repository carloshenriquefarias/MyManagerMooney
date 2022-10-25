import { Box, Flex, Heading, Select, Checkbox, NumberInput, Divider, VStack, SimpleGrid, HStack, Button, Text, FormErrorMessage, FormLabel, FormControl} from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Input } from "../../components/Form/Input";
// import { Select } from "../../components/Form/Select";
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

//Fazendo a validação do formulário

export default function CreateTransaction(){  

    const [ListRevenuesTable, setListRevenuesTable] = useState<ListRevenues[]>([]);
    // const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

    //Validando o formulario da transação

    const createTransactionFormSchema = yup.object().shape({
        // type: yup.string().required(''),
        // product: yup.string().required("Please select a product").oneOf(products),
        date: yup.string().required('Escolha a data'),
        category:yup.string().required('Escolha a categoria'),
        // selectCategory: yup.string().required()
        //     .oneOf(["usa", "mexico"])
        //     .label("Selected Country"),
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

    const handleNewTransaction: SubmitHandler<TransactionProps> = async (dados) =>{
        await new Promise (resolve => setTimeout (resolve, 1200));
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

            if (response) {
                toast.success('Seu cadastro foi realizado com sucesso!');
                return;
            }

        } catch (error) {  

        }
    }   
        
    //Pegando os dados da API e Listando as receitas cadastradas na tabela

    useEffect(() => {
        async function loadRevenues() {          
            await api.get('/revenues').then( response => {
                setListRevenuesTable(response.data);
                console.log(response.data);
            })      
        }
        loadRevenues();    
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
                        {/* <SimpleGrid minChildWidth="240px" spacing="6" width="100%">                            
                            <Button 
                                colorScheme="purple" 
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
                                colorScheme="purple" 
                                gap="2"
                                type='button'
                                // onClick={() => {setType('withdraw');}} 
                                // activeColor="red"
                                // isActive={type === 'withdraw'}
                            >
                                    <Checkbox colorScheme="red"/>
                                    Despesas
                            </Button>                            
                        </SimpleGrid> */}

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200" >
                           <Input 
                                name="data" 
                                label="Data da Transação" 
                                type="date"                                
                                {...register("date")}
                                error={errors.date}
                            /> 
                            {/* <Select
                                name="categoria" 
                                label="Escolha a categoria"                     
                                error={errors.category}
                                {...register("category")}
                                data={ListRevenuesTable}  
                            >
                                {ListRevenuesTable.map(revenue => {
                                    return (
                                        <option key={revenue.id} value={revenue.id}>
                                            {revenue.categoryOfRevenue}
                                        </option>
                                    )
                                })} 
                            </Select>    */}                

                            <FormControl > 
                                <FormLabel htmlFor={"category"}>{"Escolha a categoria"}</FormLabel>
                                <Select                                
                                    focusBorderColor='pink.500'
                                    _hover={{bg: 'gray.900'}}                                
                                    bg="gray.900"
                                    variant="filled"
                                    size="lg"  
                                    {...register("category")}                                                                     
                                >                                       
                                    {ListRevenuesTable.map(revenue => {
                                        return (
                                            <option key={revenue.id} value={revenue.id}>
                                                {revenue.categoryOfRevenue}
                                            </option>
                                        )
                                    })}                     
                                
                                </Select>
                            </FormControl>                                                            
                            
                        </SimpleGrid>                       

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="conta" 
                                label="Conta"                                
                                {...register("bills")}
                                error={errors.bills}
                            />
                            <Input 
                                name="pagamento" 
                                label="Forma de Pagamento"                                
                                {...register("payment")}
                                error={errors.payment}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input 
                                name="parcelas" 
                                label="Escolha a quantidade de parcelas"
                                type="number" 
                                // {...register("parcelas")}
                                // error={errors.payment}
                            />                                                       
                        </SimpleGrid>                       
                       
                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">                            
                            <Input 
                                name="bank" 
                                // type="number" 
                                label="Nome do banco"                                                            
                                error={errors.bank}
                                {...register("bank")}
                            />
                            <Input 
                                name="valor" 
                                type="number" 
                                label="Valor"                                
                                {...register("value")}
                                error={errors.value}
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
                                    {/* if (Input !== null) {
                                        toast.error('Preencha todos os campos do formuário!')              
                                    } else {
                                        toast.success('Transação realizada com suceso!')                                 
                                    } */}
                           
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

     