import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import {forwardRef} from 'react'
import {FieldError} from 'react-hook-form';

interface InputTransactionProps extends ChakraInputProps{
    // id: number;
    type: string;
    date: string;
    category: string;
    bills: string;
    payment: string;
    bank: string;
    value: number;
    history: string; 
    error?: FieldError;   
}

//Encaminhamento de Ref no formulario, transformar a function em const

const InputTransactionBase = ({
    type, 
    date, 
    category, 
    bills, 
    payment, 
    bank, 
    value, 
    history,     
    error=null,
    ...rest}:InputTransactionProps, ref) =>{

    return (
        <FormControl isInvalid={!! error}> 
            {/* {!! label && <FormLabel htmlFor={date}>{label}</FormLabel> } */}

            <ChakraInput 
            type={type}
            date={date}
            category={category}
            bills={bills}
            payment={payment}
            bank={bank}
            value={value}
            history={history}
            // id={name}
            // type="email"
            // placeholder="Your email"
            focusBorderColor='pink.500'
            bg="gray.900"
            variant="filled"
            _hover={{
                bg: 'gray.900'
            }}
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

export const Input = forwardRef(InputTransactionBase);