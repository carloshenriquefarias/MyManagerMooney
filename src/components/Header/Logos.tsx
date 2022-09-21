import { Text} from '@chakra-ui/react'

export function Logo(){
    return (
        <Text
            fontSize={["2xl", "3xl"]} //REPONSIVIDADE DO PROJETO
            fontWeight="bold"
            letterSpacing="tight"
            width="64"
        >
            Dashboard
            <Text as="span" ml="1" color="pink.500">.</Text>
        </Text>
    );
}