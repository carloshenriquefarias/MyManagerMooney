import { FormControl, Icon, FormErrorMessage, FormLabel, Input as ChakraInput, 
    InputProps as ChakraInputProps } from "@chakra-ui/react";
import {forwardRef, ForwardRefRenderFunction} from 'react';
import {FieldError} from 'react-hook-form';
import {RiEyeLine, RiEyeOffLine} from 'react-icons/ri'

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
= ({name, label, error=null, ...rest}: InputProps, ref) =>{

    //Encaminhamento de Ref no formulario, transformar a function em const

    return (
        <FormControl isInvalid={!!error}> 
            {!! label && <FormLabel htmlFor={name}>{label}</FormLabel> }

            <ChakraInput 
                name={name} 
                id={name}
                // rightIcon={<Icon as={RiEyeLine} fontSize="35"/>}
                focusBorderColor='orange.500'
                bg="gray.900"
                variant="filled"
                _hover={{
                    bg: 'gray.900'
                }}
                ref={ref}
                size="lg"
                {...rest}
            />
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
            
        </FormControl> 
    );
}

export const Input = forwardRef(InputBase);