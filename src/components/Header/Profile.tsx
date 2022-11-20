import {Flex, Text, Box, Avatar, Button, useDisclosure,
    AlertDialog, AlertDialogOverlay, AlertDialogHeader, AlertDialogContent, 
    AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter,} from '@chakra-ui/react'
import React from "react";
import Link from 'next/link'

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}:ProfileProps){  
    
    //Modal do botão Excluir na tabela
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
        <Flex align="center"> 
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Carlos Henrique</Text>
                    <Text color="gray.300" fontSize="small">
                        henrique@gmail.com
                    </Text>
                </Box>                
            )}
            
            <Avatar     //IMAGEM DO USUARIO
                size="md" 
                name='Carlos Henrique'
                bg="orange.400" 
                src="https://github.com/carloshenriquepvh@hotmail.com.png">
            </Avatar>

            <Button bg="gray.900" _hover="gray.900" onClick={onOpen}>
                Sair
            </Button>

            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered                
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                <AlertDialogHeader color="gray.500">ATENÇÃO!!!</AlertDialogHeader>
                <AlertDialogCloseButton color="gray.700"/>
                <AlertDialogBody color="gray.500" fontWeight="bold">
                    Você tem certeza que deseja REALMENTE SAIR do My Manager Money?
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                        Não, Volte!
                    </Button>
                    <Link href="/" passHref>
                        <Button colorScheme='whatsapp' ml={3}>
                            Sim, Tenho certeza!
                        </Button>
                    </Link>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>                
        </Flex>        
    );
}