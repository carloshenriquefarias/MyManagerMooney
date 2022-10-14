import {Flex, Button, Stack, useFormErrorStyles } from '@chakra-ui/react'
import {Input} from '../components/Form/Input'

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

const signInFormSchema = yup.object().shape({
  name: yup.string().required('Nome Obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail Inválido'),
  password: yup.string().required('Senha obrigatório').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais' )
})

export default function SignIn() {

  const {register, handleSubmit, formState, formState: { errors, isSubmitting }} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (valeus) =>{
    await new Promise (resolve => setTimeout (resolve, 2000));
    console.log(valeus);
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center"  
      justify="center">
        <Flex 
          as="form" 
          w="100%" 
          maxWidth={360}
          bg="gray.800"
          // SE QUISER SABER EM PX multiplique por 4, se for em rem divide por 4
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">  
            <Input name='email' type='email' label='E-mail' ref={register} /> 
            {/* //errors={errors.email} */}
            <Input name='password' type='password' label='Senha'ref={register} />     
            {/* errors={errors.password}       */}
          </Stack>
        <Button type='submit' mt="6" colorScheme="pink" isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
    </Flex>
  )
}

