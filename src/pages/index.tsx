import {Flex, Button, Stack, useFormErrorStyles, Text, Image, Box, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {Input} from '../components/Form/Input'
import {useState, FormEvent, useContext} from 'react'
import { AuthContext } from '../components/Users/AuthContext';

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

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext)

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    const data = {
      email, 
      password
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
      justify="space-evenly">
        <Flex 
          as="form" 
          w="100%" 
          maxWidth={360}
          bg="gray.800"
          // SE QUISER SABER EM PX multiplique por 4, se for em rem divide por 4
          p="8"
          borderRadius={8}
          flexDir="column"
          // onSubmit={handleSubmit}
          // onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">  
            <Box>
              <Image src="images/avatar.svg" alt="Girl Coding" />
            </Box>                      
            <Text>
              kjbsdfkjcjdfj
            </Text>
          </Stack>          
        </Flex>
        <Flex 
          as="form" 
          w="100%" 
          maxWidth={500}
          bg="gray.800"
          // SE QUISER SABER EM PX multiplique por 4, se for em rem divide por 4
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit}
          // onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">  
            <Input 
              name='email' 
              placeholder='Digite seu email'
              type='email' 
              label='E-mail'  
              value={email}
              onChange={e => setEmail(e.target.value)}
            /> 
            {/* //errors={errors.email} */}
            <Input 
              name='password' 
              placeholder='Digite sua senha'
              type='password' 
              label='Senha' 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {/* errors={errors.password}       */}
          </Stack>
          <Flex 
            align="center"  
            justify="space-between"
            mt="5"
          >
            <Checkbox defaultChecked fontSize="sm">Lembre-me</Checkbox>
            <Text fontSize="sm">Esqueceu a senha</Text>
           {/* <Text fontSize="sm">Esqueceu a senha</Text>
            <Text fontSize="sm">Esqueceu a senha</Text>  */}
          </Flex>
          <Button 
            type='submit' 
            mt="10" 
            colorScheme="pink" 
            // isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
          <Text fontSize="sm" mt="10">Não é cadastrado ainda? <Text color="blue.400">Cadastre-se!</Text></Text>
        </Flex>
    </Flex>
  )
}

