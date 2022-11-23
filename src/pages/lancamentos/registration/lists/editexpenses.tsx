import { Box, Spinner, Text, Flex, Heading, Icon, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import { Header } from "../../../../components/Header/Index";
import { SideBar } from "../../../../components/Sidebar/index";
import { Input } from "../../../../components/Form/Input";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'
import { useEffect, useState, FormEvent } from "react";
import { api } from "../../../../services/api";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

interface InputExpensesProps{
    categoryOfExpenses: string;
    bills: string;
}

const createExpensesFormSchema = yup.object().shape({
    // type: yup.string().required(''),
    categoryOfExpenses: yup.string().required('Digite uma categoria'),    
    bills: yup.string().required('Digite a nova conta')         
})

export default function EditRevenues(){

    //Validando o formulario da transação

    const {register, handleSubmit, formState} = useForm<InputExpensesProps>({
        resolver: yupResolver(createExpensesFormSchema)
    });

    const {errors} = formState

    const handleNewExpenses: SubmitHandler<InputExpensesProps> = async (dados) =>{
        // await new Promise (resolve => setTimeout (resolve, 2000));
        console.log(dados);    

        try {
            const response = await api.post('/expenses', {
                categoryOfExpenses: dados.categoryOfExpenses,
                bills: dados.bills           
                
            })
            console.log(response.data)

        } catch (error) {
            
        }
        toast.success('Sua edição foi realizada com sucesso!', {
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

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8" 
                    as="form" onSubmit={handleSubmit(handleNewExpenses)}
                >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="bold" justifyContent="space-between" alignItems="center" color="orange.400">
                            <Text>Insira a Edição da sua despesa</Text>                                              
                        </Heading>
                        <Link href="/lancamentos/registration/lists/expenses" passHref>
                            <Button colorScheme="orange">Voltar para a Lista de Despesas </Button> 
                        </Link>
                    </Flex>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%" color="gray.200">
                            <Input 
                                name="data" 
                                label="Edite a Categoria da Despesa"
                                color="gray.600" 
                                placeholder="Ex: Casa"                                                                
                                error={errors.categoryOfExpenses}
                                {...register("categoryOfExpenses")}
                            />
                            <Input 
                                name="categoria" 
                                label="Edite a conta cadastrada"
                                color="gray.600" 
                                placeholder="Ex: Móveis"                       
                                error={errors.bills}    
                                {...register("bills")}                            
                            />                            
                        </SimpleGrid>                       
                        
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4" >
                            <Link href="/lancamentos/registration/lists/expenses" passHref>
                                <Button colorScheme="red">Cancelar</Button>
                            </Link>                                                     
                            <Button 
                                colorScheme="whatsapp" 
                                type="submit"
                                isLoading={formState.isSubmitting}
                            >
                                Finalizar a Edição
                            </Button>                                                        
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
            <ToastContainer/>
        </Box>
    );
}   