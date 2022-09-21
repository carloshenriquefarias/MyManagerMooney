import { Stack, Button } from '@chakra-ui/react'
// import { PaginationItem } from './PaginationItem';

export function Summary(){
    return (
        // O STACK E VERTICAL POR PADRAO
        <Stack>
            
            <Stack direction="row" spacing="2" width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Button h="20" fontSize="lg" colorScheme="whatsapp">Receitas 10.000,00 R$</Button>
                <Button h="20" fontSize="lg" colorScheme="red">Despesas 6.000,00 R$</Button>                    
                <Button h="20" fontSize="lg" colorScheme="yellow">Saldo 4.000,00 R$</Button>   
                <Button h="20" fontSize="lg" colorScheme="whatsapp">Receitas 10.000,00 R$</Button>
                <Button h="20" fontSize="lg" colorScheme="red">Despesas 6.000,00 R$</Button>                    
                <Button h="20" fontSize="lg" colorScheme="yellow">Saldo 4.000,00 R$</Button>         
            </Stack>
            
        </Stack>
    );
}