import { Box, Flex, Heading, Spinner, Button, Icon, Text, Table, Thead, Tr, Th, Td, 
    Checkbox, Tbody, useBreakpointValue, useDisclosure,
    AlertDialog, AlertDialogOverlay, AlertDialogHeader, AlertDialogContent, 
    AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter } from "@chakra-ui/react";

import {RiAddLine, RiPencilLine, RiDeleteBin3Line } from 'react-icons/ri'
import Link from 'next/link'
import React from "react";

interface ProfileProps{
    showProfileData?: boolean;
}

export default function DeleteButton(){  

      //Modal do botão Excluir na tabela
      const { isOpen, onOpen, onClose } = useDisclosure()
      const cancelRef = React.useRef()        

    return (
        <Box>                            
            <>      
                {/* <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}                                        
                > 
                    Editar
                </Button> */}
                <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple"
                    leftIcon={<Icon as={RiDeleteBin3Line} fontSize="15"/>}
                    mt="2"
                    onClick={onOpen}
                > 
                    Excluir
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
                        Você tem certeza que deseja REALMENTE EXCLUIR esta receita?
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
            </> 
        </Box>
    );
}   