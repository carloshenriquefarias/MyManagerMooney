import {Flex, Button, Stack, Icon, Text, Image, Box, useBreakpointValue, Checkbox, CheckboxGroup, SimpleGrid, VStack } from '@chakra-ui/react'
import {Input} from '../components/Form/Input'
import {useState, FormEvent, useContext} from 'react'
import { AuthContext } from '../components/Users/AuthContext';
import {RiEyeLine, RiEyeOffLine} from 'react-icons/ri'
import Link from 'next/link'
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { api } from "../services/api";

import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

// type SignInFormData = {
//   email: string;
//   password: string;
// }

type CreateNewUserFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  password_confirmation: string;
}

// const isWideVersion = useBreakpointValue({ //Na versao MOBO deixar somente a imagem do usuario
//   base: false,
//   lg: true,
// })

export default function SignUp() {

  //Validando o formulario da transação
  const newUserFormSchema = yup.object().shape({
    firstname: yup.string().required('Primeiro Nome é Obrigatório'),
    lastname: yup.string().required('Último Nome é Obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail Inválido'),
    password: yup.string().required('Senha obrigatório').min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais' )
  })

  const {register, handleSubmit, formState} = useForm<CreateNewUserFormData>({
    resolver: yupResolver(newUserFormSchema)
  });

  const {errors} = formState

  const handleNewRegister: SubmitHandler<CreateNewUserFormData> = async (dados) =>{
    await new Promise (resolve => setTimeout (resolve, 2000));
    console.log(dados);

    try {
      const response = await api.post('/users', {   
        firstname: dados.firstname,
        lastname: dados.lastname,
        email: dados.email,
        password: dados.password, 
        passwordConfirmation: dados.password_confirmation            
      })
      console.log(response.data)                 

    } catch (error) {  

    }        
    toast.success('Seu login foi realizado com sucesso!', {
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

  console.log(handleNewRegister);

  return (
    <Flex 
      w="100vw" 
      // mx="auto"
      h="100vh" 
      align="center"  
      justify="center"
      bg="gray.900"
      // flexDir="column"
      // maxWidth={1480}       
      >
        <Flex 
          bg="gray.900" 
          w="100%"         
          maxWidth={1200}  
          // flex="1"
          // maxWidth={1480} 
          mx="auto"                
          p="2" 
          gap="2"
        >
          {/* <SimpleGrid flex="1" gap="2" minChildWidth="240px" alignItems="flex-start" bg="blue">           */}
          
            <Flex         
              w="100%"         
              maxWidth={1000}
              minWidth="240px"
              mx="auto"
              bg="gray.900"          
              p="4"        
              // flexDir="column"  
              justify="space-between" 
              flexDir="row"
              borderRadius={8}
              
            >      
              {/* {!isWideVersion && ( */}
                <Image boxSize='600px' src="images/avatar.svg" alt="Girl Coding" />
                  <SimpleGrid flex="1" gap="2" minChildWidth="240px" alignItems="flex-start" > 
                    <Box ml="2" >
                      <Text fontSize="35" color="orange.400" fontWeight="bold" >
                        Junte-se a nós e controle suas finanças de uma maneira incrível!
                      </Text>
                      <Text fontSize="16" color="gray.200" fontWeight="bold" mt="95" >
                        O Melhor sistema de finanças do Brasil
                      </Text>             
                    </Box>
                  </SimpleGrid>  
              {/* // )} */}
            </Flex>

            <Flex 
              as="form" 
              w="100%"           
              maxWidth={400}
              // minWidth="240px"
              mx="auto"
              bg="gray.800"            
              p="6"
              borderRadius={8}
              flexDir="column"            
              onSubmit={handleSubmit(handleNewRegister)}
            >
              <VStack spacing="4"> 
                
                <Text fontSize="25"color="gray.200" fontWeight="bold" textAlign="left"> 
                  Crie sua conta
                </Text>    
                
                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='nome' 
                    placeholder='Digite seu primeiro nome'
                    fontSize="sm"              
                    error={errors.firstname}
                    {...register("firstname")}
                  /> 
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='ultimo nome' 
                    placeholder='Digite seu último nome'
                    fontSize="sm"                    
                    error={errors.lastname}
                    {...register("lastname")}
                  /> 
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='nome' 
                    placeholder='Digite seu e-mail'
                    fontSize="sm"                        
                    error={errors.email}
                    {...register("email")}
                  /> 
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='nome' 
                    placeholder='Digite sua senha'
                    fontSize="sm"                  
                    error={errors.password}
                    {...register("password")}
                  /> 
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='nome' 
                    placeholder='Confirme sua senha'
                    fontSize="sm"                   
                    error={errors.password_confirmation}
                    {...register("password_confirmation")}
                  /> 
                </SimpleGrid>
                
              </VStack>

              {/* <Link href="/" passHref> */}
                <Button 
                  type='submit' 
                  mt="10" 
                  colorScheme="orange"
                  fontSize="18"               
                  isLoading={formState.isSubmitting}
                >
                  Efetuar Cadastro
                </Button>
              {/* </Link> */}

              <Box textAlign="center">
                <Text 
                  fontSize="15" 
                  mt="5"
                  textAlign="center"
                >
                  Ao se registrar, você aceita nossos 
                    <Link href="/" passHref >
                      <Text color="orange" _hover={{cursor:'pointer'}}>
                        termos de uso
                      </Text>
                    </Link> 
                    <Text>e a nossa</Text>                 
                    <Text color="orange" _hover={{cursor:'pointer'}}>
                      política de privacidade.
                    </Text>
                </Text>
              </Box>
              
            </Flex>
        {/* </SimpleGrid>  */}
        </Flex>
    </Flex>
  )
}

  // const {signIn} = useContext(AuthContext)

  // async function handleSubmit(event: FormEvent){
  //   event.preventDefault();
  //   const data = {
  //     email, 
  //     password, 
  //     firstName,
  //     lastName,
  //     passwordConfirmation
  //   }

  //   await signIn(data)
  // }

