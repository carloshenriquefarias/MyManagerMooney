import { ButtonGroup, Heading, IconButton, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiArrowGoBackLine, RiKeyboardBoxFill } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Form/Button';
import { Input } from '../components/Form/Input';
import { Logo } from '../components/Form/Logo';
import { Page } from '../components/Layout/PageDefault/Page';
import { useAppToast } from '../context/ToastContext';
import { validate } from '../utils/validate';

export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { toast } = useAppToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function handleEmail() {
    try {
      setIsLoading(true);

      await api.post('users/forgot-password', {
        email: email,
      });

      setIsLoading(false);

      toast.success('Feito!', 'Confira seu email para mais informações!');
    } catch (error: any) {
      setIsLoading(false);
      toast.error('Detalhes do erro:', `${error.response.data.message}`);
    }
  }

  return (
    <Page background={["url('./images/bg_1.jpg')", "url('./images/bg_3.jpg')"]}>
      <Logo />

      <Heading size="md" alignSelf={'center'} mb={4}>
        Problemas para entrar?
      </Heading>

      <Text opacity={0.7} textAlign={'center'} mb={'4'}>Insira o seu CNPJ, e enviaremos um link para você voltar e recuperar sua conta.</Text>

      <VStack spacing={4}>
        <Input
          icon={<RiKeyboardBoxFill />}
          placeholder='Digite seu CNPJ'
          type='number'
          name='cnpj'
          error={errors?.email}
          register={register}
          options={{
            required: 'É necessário informar um cnpj.',
            validate: (value: string) => validate.cnpj(value) || 'CNPJ inválido.'
          }}
        />
      </VStack>

      <ButtonGroup mt='8' mb='4'>
        <IconButton onClick={() => history.push('/')}
          variant='outline'
          colorScheme='green'
          aria-label='Go back'
          icon={<RiArrowGoBackLine />}
        />

        <Button
          type="submit"
          size="md"
          width={'100%'}
          isDisabled={isLoading === true ? true : false}
          isLoading={isLoading === true ? true : false}
        // onClick={handleEmail}
        >
          Enviar código para o email
        </Button>
      </ButtonGroup>
    </Page>
  );
}



