import { FormControl, Icon, FormErrorMessage, FormLabel, Input as ChakraInput, 
    InputProps as ChakraInputProps } from "@chakra-ui/react";
// import {forwardRef, ForwardRefRenderFunction} from 'react';
import {FieldError} from 'react-hook-form';
import {RiEyeLine, RiEyeOffLine} from 'react-icons/ri'

interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    // error?: FieldError;
}

export const NewInput = ({name, label,...rest}: InputProps) =>{    

    return (
        
        <ChakraInput 
            name={name} 
            id={name}
            rightIcon={<Icon as={RiEyeLine} fontSize="35"/>}
            focusBorderColor='orange.500'
            bg="gray.900"
            variant="filled"
            _hover={{
                bg: 'gray.900'
            }}
            // ref={ref}
            size="lg"
            {...rest}
        />        
        
    );
}

// export const Input = forwardRef(InputBase);