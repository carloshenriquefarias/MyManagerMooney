import { Box, Spinner, Text, Flex, Heading, Icon, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import { Header } from "../../../components/Header/Index";
import { SideBar } from "../../../components/Sidebar/index";
import { Input } from "../../../components/Form/Input";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'
import { useEffect, useState, FormEvent } from "react";
import { api } from "../../../services/api";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

interface InputRevenuesProps{
    categoryOfRevenue: string;
    bills: string;
}

const createRevenuesFormSchema = yup.object().shape({
    // type: yup.string().required(''),
    categoryOfRevenue: yup.string().required('Digite uma categoria'),    
    bills: yup.string().required('Digite a nova conta')         
})

export default function Receitas(){

    //Validando o formulario da transação

    const {register, handleSubmit, formState} = useForm<InputRevenuesProps>({
        resolver: yupResolver(createRevenuesFormSchema)
    });

    const {errors} = formState

    const handleNewRevenues: SubmitHandler<InputRevenuesProps> = async (dados) =>{
        // await new Promise (resolve => setTimeout (resolve, 2000));
        console.log(dados);    

        try {
            const response = await api.post('/revenues', {
                categoryOfRevenue: dados.categoryOfRevenue,
                bills: dados.bills           
                
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

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8" 
                    as="form" onSubmit={handleSubmit(handleNewRevenues)}
                >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="bold" justifyContent="space-between" alignItems="center" color="orange.400">
                            <Text>Informe a Nova Receita</Text>                                              
                        </Heading>
                        <Link href="/lancamentos/registration/lists/revenues" passHref>
                            <Button colorScheme="orange">Lista de Receitas </Button> 
                        </Link>
                    </Flex>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%" color="gray.200">
                            <Input 
                                name="data" 
                                label="Informe a Categoria da Receita"
                                color="gray.600" 
                                placeholder="Ex: Receitas Familiares"                                                                
                                error={errors.categoryOfRevenue}
                                {...register("categoryOfRevenue")}
                            />
                            <Input 
                                name="categoria" 
                                label="Informe a conta que deseja cadastrar"
                                color="gray.600" 
                                placeholder="Ex: Salário"                       
                                error={errors.bills}    
                                {...register("bills")}                            
                            />                            
                        </SimpleGrid>                       
                        
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4" >
                            <Link href="/lancamentos/registration/lists/revenues" passHref>
                                <Button colorScheme="red">Cancelar</Button>
                            </Link>                                                     
                            <Button 
                                colorScheme="whatsapp" 
                                type="submit"
                                isLoading={formState.isSubmitting}
                            >
                                Finalizar Cadastro 
                            </Button>                                                        
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
            <ToastContainer/>
        </Box>
    );
}   