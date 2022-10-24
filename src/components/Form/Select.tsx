import { FormControl, FormErrorMessage, FormLabel, Select as ChakraSelect, SelectProps as ChakraSelectProps } from "@chakra-ui/react";
import {forwardRef, ForwardRefRenderFunction} from 'react';
import {FieldError} from 'react-hook-form';

interface SelectProps extends ChakraSelectProps{
    name: string;
    label?: string;
    error?: FieldError;
    data: any;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> 
= ({name, label, error=null, data, ...rest}: SelectProps, ref) =>{

    //Encaminhamento de Ref no formulario, transformar a function em const

    return (
        <FormControl isInvalid={!!error}> 
            {!! label && <FormLabel htmlFor={name}>{label}</FormLabel> }

            <ChakraSelect 
                name={name} 
                id={name}
                focusBorderColor='pink.500'
                bg="gray.900"
                variant="filled"
                _hover={{
                    bg: 'gray.900'
                }}
                ref={ref}
                size="lg"
                {...rest}                
            >
                {data.map(transaction => {
                    return (
                        <option key={transaction.id} value={transaction.id}>
                            {transaction.description}
                        </option>
                    )
                })} 
            </ChakraSelect>
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}           
            
        </FormControl> 
    );
}

export const Select = forwardRef(SelectBase);