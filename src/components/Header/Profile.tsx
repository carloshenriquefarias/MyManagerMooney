import {Flex, Text, Box, Avatar} from '@chakra-ui/react'

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}:ProfileProps){    

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
                    src="https://github.com/carloshenriquepvh@hotmail.com.png">
                </Avatar>
                
            </Flex>
    );
}