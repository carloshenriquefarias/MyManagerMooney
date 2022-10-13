import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import {forwardRef} from 'react'

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
    ...rest}:InputTransactionProps, ref) =>{

    return (
        <FormControl> 
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
        </FormControl> 
    );
}

export const Input = forwardRef(InputTransactionBase);