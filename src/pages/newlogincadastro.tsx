import {Flex, Button, Stack, Icon, Text, Image, Box, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {Input} from '../components/Form/Input'
import {useState, FormEvent, useContext} from 'react'
import { AuthContext } from '../components/Users/AuthContext';
import {RiEyeLine, RiEyeOffLine} from 'react-icons/ri'

import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

type SignInFormData = {
  email: string;
  password: string;
}

// type CreateUserFormData = {
//   name: string;
//   email: string;
//   password: string;
//   password_confirmation: string;
// }

// const signInFormSchema = yup.object().shape({
//   name: yup.string().required('Nome Obrigatório'),
//   email: yup.string().required('E-mail obrigatório').email('E-mail Inválido'),
//   password: yup.string().required('Senha obrigatório').min(6, 'No mínimo 6 caracteres'),
//   password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais' )
// })

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const {signIn} = useContext(AuthContext)

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    const data = {
      email, 
      password, 
      firstName,
      lastName,
      passwordConfirmation
    }

    await signIn(data)
  }

  // const {register, handleSubmit, formState, formState: { errors, isSubmitting }} = useForm({
  //   resolver: yupResolver(signInFormSchema)
  // });

  // const handleSignIn: SubmitHandler<SignInFormData> = async (valeus) =>{
  //   await new Promise (resolve => setTimeout (resolve, 2000));
  //   console.log(valeus);
  // }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center"  
      justify="center"
      >
        <Flex         
          w="100%"         
          maxWidth={800}
          bg="gray.900"          
          p="8"        
          flexDir="column"  
        >
            <Flex flexDir="column" align="center">
                {/* <Text fontSize="25" color="orange.400" fontWeight="bold" mb="15">JRS Productions</Text> */}
                <Text fontSize="35" color="orange.400" fontWeight="bold" mb="35">My Manager Money</Text>
            </Flex>            
            
            <Flex justify="space-between">                
              <Image boxSize='350px' src="images/avatar.svg" alt="Girl Coding" />  
              <Box>
                <Text fontSize="45" color="gray.100"  fontWeight="bold" mb="15">Junte-se a nós e controle suas finanças de uma maneira incrivel!</Text>
              </Box>
                          
            </Flex>                      
            <Text>
                O Melhor sistema de finanças do Brasil
            </Text>         
        </Flex>

        <Flex 
          as="form" 
          w="100%" 
        //   h="70%"
          maxWidth={400}
          bg="gray.800"
          // SE QUISER SABER EM PX multiplique por 4, se for em rem divide por 4
          p="12"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit}
          // onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">  
            <Flex flexDir="column" >
              <Text fontSize="25"color="gray.200" fontWeight="bold"> Crie sua conta</Text>
              {/* <Text fontSize="14" color="orange.400"> O Melhor sistema de finanças do Brasil</Text> */}
            </Flex>
            
            <Input 
              name='nome' 
              placeholder='Digite seu primeiro nome'
              fontSize="sm"
            //   type='' 
            //   label='Digite seu primeiro nome'  
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            /> 
            {/* //errors={errors.email} */}
            <Input 
              name='password' 
              placeholder='Digite seu ultimo nome'
              fontSize="sm"
            //   type='password' 
            //   label='Digite seu ultimo nome' 
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              // rightIcon={<Icon as={RiEyeLine} fontSize="35"/>}
            />
            {/* errors={errors.password}       */}
            <Input 
              name='email' 
              placeholder='Digite seu e-mail'
              fontSize="sm"
              type='email' 
            //   label='E-mail'  
              value={email}
              onChange={e => setEmail(e.target.value)}
            /> 
            {/* //errors={errors.email} */}
            <Input 
              name='password' 
              placeholder='Digite sua senha'
              fontSize="sm"
              type='password' 
            //   label='Senha' 
              value={password}
              onChange={e => setPassword(e.target.value)}
              // rightIcon={<Icon as={RiEyeLine} fontSize="35"/>}
            />
            {/* errors={errors.password}       */}
            <Input 
              name='password' 
              placeholder='Confirme sua senha'
              fontSize="sm"
              type='password' 
            //   label='Confirme sua senha' 
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
              // rightIcon={<Icon as={RiEyeLine} fontSize="35"/>}
            />
            {/* errors={errors.password}       */}
          </Stack>
          {/* <Flex 
            align="center"  
            justify="space-between"
            mt="5"
          >
            <Checkbox defaultChecked fontSize="sm">Lembre-me</Checkbox>
            <Text fontSize="sm">Esqueceu a senha</Text>
          </Flex> */}
          <Button 
            type='submit' 
            mt="10" 
            colorScheme="orange"
            fontSize="18"
            // rightIcon={<Icon as={RiEyeLine} fontSize="35"/>} 
            // isLoading={formState.isSubmitting}
          >
            Efetuar Cadastro
          </Button>
          {/* <Text fontSize="sm" mt="10">Não é cadastrado ainda? <Text color="blue.400">Cadastre-se!</Text></Text> */}
        </Flex>
    </Flex>
  )
}