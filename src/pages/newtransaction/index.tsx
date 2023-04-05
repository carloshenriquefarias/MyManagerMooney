import Link from 'next/link'
import { FormEvent, useState, useEffect, useRef} from 'react';
import React from "react";
import Select from 'react-select'
import makeAnimated from "react-select/animated";

import { Box, Flex, Heading,  Checkbox, Radio, RadioGroup,
    Divider, VStack, SimpleGrid, HStack, Button, Text, Stack,
    FormErrorMessage, FormLabel, FormControl, Alert, Show, 
    Slider, SliderTrack, SliderFilledTrack, SliderThumb, 
    NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper,
NumberDecrementStepper} from "@chakra-ui/react";

import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Input } from "../../components/Form/Input";
// import { Select } from "../../components/Form/Select";

import { api } from "../../services/api";

import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

//Validação de formularios
import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"


interface TransactionProps {
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

const options = [
    { value: "produto 01", label: "Produto 01" },
    { value: "produto 02", label: "Produto 02" },
    { value: "produto 03", label: "Produto 03" },
    { value: "produto 04", label: "Produto 04" },
    { value: "produto 05", label: "Produto 05" },
    { value: "produto 06", label: "Produto 06" },
    { value: "produto 07", label: "Produto 07" },
    { value: "produto 08", label: "Produto 08" },
];

export default function CreateTransaction(){  

    const animatedComponents = makeAnimated();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleSelect = () => {
        console.log(selectedOptions);
    };

    //Numero de Parcelas
    const [value, setValue] = React.useState(0)
    const handleChange = (value) => setValue(value)

    const [ListRevenuesTable, setListRevenuesTable] = useState<ListRevenues[]>([]);    
    const [ListBanks, setListBanks] = useState<ListBanks[]>([]); 
    const [ListPaymentMethod, setListPaymentMethod] = useState<ListPaymentMethod[]>([]);
    const [parcelas, setParcelas] = useState('');

    //Validando o formulario da transação    
    const createTransactionFormSchema = yup.object().shape({
        // type:yup.string().required('Escolha o tipo da transação'),
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

    //Listando novas transações
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
    useEffect(() => {
        //Receitas
        async function loadRevenues() {          
            await api.get('/revenues').then( response => {
                setListRevenuesTable(response.data);
                console.log(response.data);
            })      
        }
        //Bancos
        async function ListBanks() {          
            await api.get('/banks').then( response => {
                setListBanks(response.data);
                console.log(response.data);
            })      
        }
        //Pagamentos
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
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6"bg="gray.900">
                <SideBar />
                
                <Box 
                    as="form" 
                    flex="1" 
                    borderRadius={8} 
                    bg="gray.800" p="6" 
                    onSubmit={handleSubmit(handleNewTransaction)}
                > 
                    <Heading size="lg" fontWeight="bold" color="orange.400">Cadastrar Nova Transação</Heading>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    {/* <Text mb="25" fontSize="25" color="orange.400">Escolha o tipo de transação que deseja realizar</Text> */}

                    <VStack spacing="6" >                        
                        
                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.600" fontSize="sm"> 
                            {/* <Select                                
                                name="transação" 
                                label="Escolha a nova transação" 
                                color="gray.200"   
                                // color="orange.400"                 
                                error={errors.category}                                 
                                // fontSize="sm"                                                              
                                option={ListRevenuesTable.map(revenue => {
                                    return (
                                        <option key={revenue.id} value={revenue.id}>
                                            {revenue.categoryOfRevenue}
                                        </option>
                                    )
                                })}

                                {...register("category")}                               
                            > 
                                                                  
                            </Select>                      */}
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.600" >
                           <Input 
                                name="data" 
                                label="Data da Transação"
                                color="gray.200" 
                                type="date"                                
                                {...register("date")}
                                error={errors.date}
                            />

                            <Select
                                defaultValue={[options[0], options[2]]}
                                components={animatedComponents}
                                isMulti
                                options={options}
                                // onChange={(item) => setSelectedOptions(item)}
                                className="select"
                                isClearable={true}
                                isSearchable={true}
                                isDisabled={false}
                                isLoading={false}
                                isRtl={false}
                                closeMenuOnSelect={false}
                            />

                            {/* <button onClick={handleSelect}>Imprimir itens</button> */}

                            {/* <Select                                
                                name="categoria" 
                                label="Escolha a categoria" 
                                color="gray.200"                     
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
                            </Select>                   */}
                        </SimpleGrid>   

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.600" >                            
                            {/* <Select                                                        
                                name="conta" 
                                label="Conta"
                                color="gray.200"                                            
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
                                color="gray.200"                      
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
                            </Select>                             */}
                        </SimpleGrid>     
                        {/* <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <label htmlFor="">Parcelas: {parcelas}</label>
                        </SimpleGrid> */}
                                 

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.600">
                            {/* //Data de Vencimento da Parcela */}
                            <Input 
                                name="vencimento" 
                                label="Escolha a data de vencimento das parcelas"
                                color="gray.200"
                                type="date" 
                                // {...register("parcelas")}
                                // error={errors.payment}
                            /> 
                            {/* {(parcelas=='Cartão') ?  */}  

                            <Flex mt="9">
                                {/* <Text>Parcelas</Text> */}
                                <NumberInput maxW='100px' mr='2rem' value={value} onChange={handleChange} color="gray.200">
                                    <NumberInputField />
                                    <NumberInputStepper boxSize="30">
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                <Slider
                                    flex='1'
                                    focusThumbOnChange={false}
                                    value={value}
                                    onChange={handleChange}                                    
                                >
                                    <SliderTrack >
                                        <SliderFilledTrack/>
                                    </SliderTrack>
                                    <SliderThumb fontSize='sm' boxSize='32px' children={value} />
                                </Slider>
                            </Flex>                            
                            
                            {/* : null } */}
                        </SimpleGrid>                       
                       
                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.600">                    
                            {/* <Select                                
                                name="bank"                                 
                                label="Nome do banco"  
                                color="gray.200"                    
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
                            </Select>      */}
                            <Input 
                                name="valor" 
                                type="number" 
                                label="Valor" 
                                color="gray.200"                       
                                error={errors.value}
                                // fontSize="sm">{new Intl.NumberFormat('pt-BR', {
                                //     style: 'currency',
                                //     currency: 'BRL'
                                // })}
                                {...register("value")}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.600">
                            <Input 
                                name="historico" 
                                label="Histórico"
                                color="gray.200"                         
                                error={errors.history}
                                {...register("history")}
                            />                           
                        </SimpleGrid>                       

                    </VStack>
                    <Flex mt="6" justify="space-between">
                        {/* <HStack spacing="4"> */}
                            <Link href="/lancamentos" passHref>
                                <Button bg="red.500">Cancelar</Button>
                            </Link>                      
                            <Button 
                                type="submit" 
                                colorScheme="whatsapp" 
                                // ref={searchInputRef}                                     
                                isLoading={formState.isSubmitting}                                                      
                            >
                                Realizar Lançamento
                            </Button>                   
                        {/* </HStack> */}
                    </Flex>

                </Box>
            </Flex>
            <ToastContainer/>
        </Box>
    );
}   

