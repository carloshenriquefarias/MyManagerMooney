import {Flex, Button, Stack, Icon, Text, Image, Box, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {Input} from '../components/Form/Input'
import {useState, FormEvent, useContext, useEffect} from 'react'
import { AuthContext } from '../components/Users/AuthContext';
import {RiEyeLine, RiEyeOffLine} from 'react-icons/ri'
import { api } from "../services/api";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import {parseCookies, setCookie} from "nookies"

//Validação de formulários
import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";
import {yupResolver } from "@hookform/resolvers/yup"

//Autenticação das páginas
import { GetServerSideProps } from 'next';
// import { withSSRGuest } from '../utils/withSSRGuest';

type SignInFormData = {
  email: string;
  password: string;
}

// interface UserData {  
//   email: string;
//   password: string;
//   // password_confirmation: string;
// }

interface CreateUserFormData { 
  email: string;
  password: string; 
}

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [listUsers, setListUsers] = useState<UserData[]>([]);
  // const [passwordUsers, setPasswordUsers] = useState<UserData[]>([]);
     
  // //Pegando os dados da API e Listando as receitas cadastradas na tabela
  // useEffect(() => {
  //   async function loadUsers() {          
  //     await api.get('/users').then( response => {
  //       setListUsers(response.data);
  //       console.log(response.data);
  //     })      
  //   }
  //   loadUsers();    
  // }, []);     

  // useEffect(() => {
  //   async function loadPassword() {          
  //     await api.get('/users').then( response => {
  //       setPasswordUsers(response.data);
  //       console.log(response.data);
  //     })      
  //   }
  //   loadPassword();    
  // }, []); 

  // __________________________________

  //Fazendo a validação do formulário
  // const signInFormSchema = yup.object().shape({   
  //   email: yup.string().required('E-mail obrigatório').email('E-mail Inválido'),
  //   password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),    
  // })  

  // const {register, handleSubmit, formState} = useForm<CreateUserFormData>({
  //   resolver: yupResolver(signInFormSchema)
  // });

  // const {errors} = formState

  // const handleSignIn: SubmitHandler<CreateUserFormData> = async (dados) =>{
  //   await new Promise (resolve => setTimeout (resolve, 2000));
  //   console.log(dados);

  //   try {
  //     const response = await api.post('/newtransaction', {                
  //       // type: dados.type,
  //       email: dados.email,
  //       password: dados.password,             
  //     })
  //     console.log(response.data)                 

  //   } catch (error) {  

  //   }        
  //   toast.success('Seu cadastro foi realizado com sucesso!', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //   });
  // }

  const {signIn} = useContext(AuthContext)

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    const data = {
      email, 
      password
    }

    await signIn(data)
  }  

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
          bg="gray.900"          
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit}
          // onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">  
            <Box>
              <Image src="images/avatar.svg" alt="Girl Coding" />
            </Box>                      
            {/* <Text>
              kjbsdfkjcjdfj
            </Text> */}
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
            <Flex flexDir="column" justifyContent="center" align="center">
              <Text fontSize="25"color="orange.400" fontWeight="bold"> Bem vindo ao My Manager Money!</Text>
              <Text fontSize="14" color="orange.400"> O Melhor sistema de finanças do Brasil</Text>
            </Flex>
            
            <Input 
              name='email' 
              placeholder='Digite seu e-mail'
              fontSize="sm"
              type='email' 
              label='E-mail'  
              value={email}              
              onChange={e => setEmail(e.target.value)}
              // onChange={e => setListUsers(e.target.value)}
              // {...register("email")}
              // error={errors.email}
            /> 
        
            <Input 
              name='password' 
              placeholder='Digite sua senha'
              fontSize="sm"
              type='password' 
              label='Senha' 
              value={password}             
              onChange={e => setPassword(e.target.value)}
              // onChange={e => setPasswordUsers(e.target.value)}
              // {...register("password")}
              // error={errors.password}
              // rightIcon={<Icon as={RiEyeLine} fontSize="35"/>}
            />
           
          </Stack>
          <Flex 
            align="center"  
            justify="space-between"
            mt="5"
          >
            <Checkbox defaultChecked fontSize="sm">Lembre-me</Checkbox>
            <Text fontSize="sm">Esqueceu a senha</Text>
          </Flex>
          <Button 
            type='submit' 
            mt="10" 
            colorScheme="orange"
            fontSize="18"
            // rightIcon={<Icon as={RiEyeLine} fontSize="35"/>} 
            // isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
          <Text fontSize="sm" mt="10">Não é cadastrado ainda? <Text color="blue.400">Cadastre-se!</Text></Text>
        </Flex>
    </Flex>
  )
}

// export const getServerSideProps = withSSRGuest(async(ctx) => {
//   // console.log(ctx);
//   return{
//     props:{}
//   }
// });
