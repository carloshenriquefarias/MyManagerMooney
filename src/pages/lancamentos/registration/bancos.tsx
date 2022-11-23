import { Box, Flex, Heading, Text, Icon, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import { Header } from "../../../components/Header/Index";
import { SideBar } from "../../../components/Sidebar/index";
import { Input } from "../../../components/Form/Input";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'
import { api } from "../../../services/api";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

interface InputBanksProps{
    bank: string;
}

const createBanksFormSchema = yup.object().shape({
    // type: yup.string().required(''),
    bank: yup.string().required('Digite seu banco'),             
})

export default function Bancos(){

    //Validando o formulario da transação

    const {register, handleSubmit, formState} = useForm<InputBanksProps>({
        resolver: yupResolver(createBanksFormSchema)
    });

    const {errors} = formState

    const handleNewBank: SubmitHandler<InputBanksProps> = async (dados) =>{
        await new Promise (resolve => setTimeout (resolve, 1000));
        console.log(dados);    

        try {
            const response = await api.post('/banks', {
                bank: dados.bank,            
            })

            console.log(response.data)

            if (response) {
                toast.success('Seu cadastro foi realizado com sucesso!');
                return;
            }

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
                as="form" onSubmit={handleSubmit(handleNewBank)}
                > 
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="bold" justifyContent="space-between" alignItems="center" color="orange.400">
                            <Text>Informe seu banco e saldo</Text>                                              
                        </Heading>
                        <Link href="/lancamentos/registration/lists/banks" passHref>
                            <Button colorScheme="orange">Lista de Bancos </Button> 
                        </Link>
                    </Flex>
                    {/* <Heading size="lg" fontWeight="normal">
                        Realize seu Novo Cadastro                        
                    </Heading> */}
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input 
                                name="data" 
                                label="Informe o Banco" 
                                placeholder="Ex: Itaú"
                                error={errors.bank}
                                {...register("bank")}
                            />   
                            <Input 
                                name="data" 
                                label="Informe o Saldo" 
                                placeholder="Ex: 500,00 R$"
                                error={errors.bank}
                                {...register("bank")}
                            />                          
                        </SimpleGrid>                       
                        
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/lancamentos/registration/lists/banks" passHref>
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