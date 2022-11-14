import { Text} from '@chakra-ui/react'

export function Logo(){
    return (
        <Text
            fontSize={["2xl", "3xl"]} //REPONSIVIDADE DO PROJETO
            fontWeight="bold"
            letterSpacing="tight"
            width="64"
            color="orange.400"
        >
            My Manager
            <Text as="span" ml="1" color="orange.400">.</Text>
        </Text>
    );
}