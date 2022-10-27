import { Box, Text, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import { Header } from "../../../components/Header/Index";
import { SideBar } from "../../../components/Sidebar/index";
import { Input } from "../../../components/Form/Input";
import Link from 'next/link'
import { api } from "../../../services/api";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
// import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
// import { useEffect, useState, FormEvent } from "react";

import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

interface InputPaymentMethodProps{
    paymentmethod: string;   
}

const createPaymentMethodFormSchema = yup.object().shape({    
    paymentmethod: yup.string().required('Digite uma forma de pagamento'),               
})

export default function PaymentMethod(){

    //Validando o formulario da transação

    const {register, handleSubmit, formState} = useForm<InputPaymentMethodProps>({
        resolver: yupResolver(createPaymentMethodFormSchema)
    });

    const {errors} = formState

    const handleNewPaymentMethod: SubmitHandler<InputPaymentMethodProps> = async (dados) =>{
        await new Promise (resolve => setTimeout (resolve, 2000));
        console.log(dados);    

        try {
            const response = await api.post('/paymentmethod', {
                paymentmethod: dados.paymentmethod,          
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
                    as="form" onSubmit={handleSubmit(handleNewPaymentMethod)}
                >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal" justifyContent="space-between" alignItems="center">
                            <Text>Nova Forma de Pagamento</Text>                                              
                        </Heading>
                        <Link href="/lancamentos/registration/lists/payment" passHref>
                            <Button colorScheme="pink">Lista de Pagamento </Button> 
                        </Link>
                    </Flex>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input 
                                name="data" 
                                label="Informe a nova forma de pagaento" 
                                placeholder="Ex: Dinheiro"                                                                
                                error={errors.paymentmethod}
                                {...register("paymentmethod")}
                            />                      
                        </SimpleGrid>                       
                        
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4" >
                            <Link href="/lancamentos/registration/lists/payment" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
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