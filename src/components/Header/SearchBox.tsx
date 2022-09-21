import {Flex, Text, Input, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import {RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function SearchBox(){
    return (
        <Flex
                as="label"
                flex="1"
                py="4" //pading Horizontal
                px="8" //pading Vertical
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input //BARRA DE PESQUISA
                    color="gray.50"
                    variant="unstyled" //sem bordas
                    placeholder='Digite o que procura'
                    _placeholder={{color: 'gray.400'}}
                    px="4" //pading Horizontal
                    mr="4"
                />
                <Icon as={RiSearchLine} fontSize={20}/>
            </Flex>
    );
}