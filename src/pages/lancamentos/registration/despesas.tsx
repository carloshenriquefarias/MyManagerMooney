import { Box, Flex, Heading, Icon, Divider, VStack, SimpleGrid, HStack, Button} from "@chakra-ui/react";
import { Header } from "../../../components/Header/Index";
import { SideBar } from "../../../components/Sidebar/index";
import { Input } from "../../../components/Form/Input";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'
import { api } from "../../../services/api";
import { toast } from 'react-toastify';

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

export default function Despesas(){

    //Validando o formulario da transação

    const {register, handleSubmit, formState} = useForm<InputExpensesProps>({
        resolver: yupResolver(createExpensesFormSchema)
    });

    const {errors} = formState

    //Inserção de dados e chama a API e faz o post

    const handleNewExpenses: SubmitHandler<InputExpensesProps> = async (dados) =>{
        await new Promise (resolve => setTimeout (resolve, 2000));
        console.log(dados);    

        try {            
            const response = await api.post('/expenses', {
                categoryOfExpenses: dados.categoryOfExpenses,
                bills: dados.bills        
            })

            console.log(response.data)

            if (response) {
                toast.success('Seu cadastro foi realizado com sucesso!');
                return;
            }

        } catch (error) {
            
        }
      
    }

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" 
                    borderRadius={8} 
                    bg="gray.800" 
                    p="8" 
                    as="form" 
                    onSubmit={handleSubmit(handleNewExpenses)}
                > 
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Realize seu Novo Cadastro                        
                        </Heading>
                        <Link href="/lancamentos/registration/lists/expenses" passHref>
                            <Button colorScheme="pink">Lista de Despesas </Button> 
                        </Link>
                    </Flex>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input 
                                name="data" 
                                label="Informe a Categoria da Despesa" 
                                placeholder="Ex: Casa"
                                error={errors.categoryOfExpenses}
                                {...register("categoryOfExpenses")}
                            />
                            <Input 
                                name="categoria" 
                                label="Informe a conta que deseja cadastrar" 
                                placeholder="Ex: Móveis"
                                error={errors.bills}
                                {...register("bills")}
                            />                            
                        </SimpleGrid>                       
                        
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/lancamentos/registration/lists/expenses" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link> 
                            {/* <Link href="/lancamentos/cadastros" passHref>                            */}
                                <Button colorScheme="whatsapp" type="submit">Finalizar Cadastro </Button> 
                            {/* </Link>                            */}
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
}   