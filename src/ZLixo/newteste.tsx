import {Flex, Button, Stack, Icon, Text, Image, Box, Checkbox, CheckboxGroup, SimpleGrid, VStack } from '@chakra-ui/react'
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

export default function NewUser() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState(''); 

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

  return (
    <Flex 
      w="100vw" 
      // mx="auto"
      h="100vh" 
      align="center"  
      justify="center"
      bg="red"
      // flexDir="column"
      // maxWidth={1480}       
      >
        <Flex 
          bg="blue" 
          w="100%"         
          maxWidth={1200}  
          // flex="1"
          // maxWidth={1480} 
          mx="auto"                
          p="2" 
          gap="2"
        >
          <SimpleGrid flex="1" gap="4" minChildWidth="240px" alignItems="flex-start" >

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
              <SimpleGrid flex="1" gap="4" minChildWidth="240px" alignItems="flex-start" >  
                <Image boxSize={['240px', '500px']} src="images/avatar.svg" alt="Girl Coding" />         
                <Box ml="10">
                  <Text fontSize={["2xl", "40"]} color="orange.400" fontWeight="bold" mt="15">
                    Junte-se a nós e controle suas finanças de uma maneira incrível!
                  </Text>
                  <Text fontSize="20" color="orange.400" fontWeight="bold" >
                    O Melhor sistema de finanças do Brasil
                  </Text>             
                </Box>                
              </SimpleGrid>
            </Flex>

            <Flex 
              as="form" 
              w="100%"           
              maxWidth={1000}
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
                    // label='Digite seu primeiro nome'  
                    value={firstName}
                    // onChange={e => setFirstName(e.target.value)}
                    error={errors.firstname}
                    {...register("firstname")}
                  /> 
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='nome' 
                    placeholder='Digite seu primeiro nome'
                    fontSize="sm"         
                    // label='Digite seu primeiro nome'  
                    value={firstName}
                    // onChange={e => setFirstName(e.target.value)}
                    error={errors.firstname}
                    {...register("firstname")}
                  /> 
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='nome' 
                    placeholder='Digite seu primeiro nome'
                    fontSize="sm"         
                    // label='Digite seu primeiro nome'  
                    value={firstName}
                    // onChange={e => setFirstName(e.target.value)}
                    error={errors.firstname}
                    {...register("firstname")}
                  /> 
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='nome' 
                    placeholder='Digite seu primeiro nome'
                    fontSize="sm"         
                    // label='Digite seu primeiro nome'  
                    value={firstName}
                    // onChange={e => setFirstName(e.target.value)}
                    error={errors.firstname}
                    {...register("firstname")}
                  /> 
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="4" width="100%">
                  <Input 
                    name='nome' 
                    placeholder='Digite seu primeiro nome'
                    fontSize="sm"         
                    // label='Digite seu primeiro nome'  
                    value={firstName}
                    // onChange={e => setFirstName(e.target.value)}
                    error={errors.firstname}
                    {...register("firstname")}
                  /> 
                </SimpleGrid>                
              </VStack>              
                <Button 
                  type='submit' 
                  mt="10" 
                  colorScheme="orange"
                  fontSize="18"               
                  isLoading={formState.isSubmitting}
                >
                  Efetuar Cadastro
                </Button>             

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
          </SimpleGrid>
        </Flex>
    </Flex>
  )
}