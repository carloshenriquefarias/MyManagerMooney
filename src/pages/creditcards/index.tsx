import { Box, Flex, Heading, Icon, Divider, VStack, SimpleGrid, HStack, Text, Button, 
    InputGroup, InputRightElement, Input, useDisclosure,
    AlertDialog, AlertDialogOverlay, AlertDialogHeader, AlertDialogContent, 
    AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Checkbox} from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { NewSearchBar } from "../../components/NewSearchBar/index";
import React from "react";
// import { Input } from "../../components/Form/Input";
import {RiAddLine, RiPencilLine, RiSearchLine, RiFilter2Line } from 'react-icons/ri'
import Link from 'next/link'


export default function CreditCards(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
                    <Heading size="lg" fontWeight="normal">Produtos anúnciados para venda</Heading>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="8">

                        {/* <NewSearchBar/> */}
                        {/* <SimpleGrid minChildWidth="240px" spacing="8" width="100%">                           
                            
                            <Button 
                                colorScheme="orange" 
                                h="60" fontSize="25" 
                                leftIcon={<Icon as={RiSearchLine}
                                justifyContent="space-between"
                                alignItems="center"/>}
                            >
                                Banco Inter
                            </Button>
                            
                            <Link href="/lancamentos/registration/despesas" passHref>
                                <Button colorScheme="purple" h="60"fontSize="35" leftIcon={<Icon as={RiSearchLine}fontSize="35"/>}>Nubank</Button>
                            </Link>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">                           
                            <Link href="/lancamentos/registration/bancos" passHref>
                                <Button colorScheme="yellow" color="blue" h="60"fontSize="35"leftIcon={<Icon as={RiSearchLine}fontSize="35"/>}>Banco do Brasil</Button>
                            </Link>
                            <Link href="/lancamentos/registration/outros" passHref>
                                <Button colorScheme="red" h="60"fontSize="35"leftIcon={<Icon as={RiSearchLine}fontSize="35"/>}>Bradesco</Button>
                            </Link>
                        </SimpleGrid> */}

                        <Box
                            bg="blue.100" 
                            mt={5}          
                            rounded={5}   
                            h={20} 
                            w="100%"                         
                        >
                            <HStack justifyContent="space-between" alignItems="center" padding={3}>
                                <HStack 
                                    justifyContent="space-between" 
                                    alignItems="center"                                                
                                >
                                    {/* <Tag color={colors.blue[500]} size={sizes[7]} /> */}

                                    <VStack ml={4}>
                                        <Text 
                                            color="gray.600" 
                                            fontFamily={'heading'} 
                                            fontSize="md" 
                                            fontWeight="bold" 
                                            lineHeight={'md'}
                                            textAlign="left"
                                        >
                                            4
                                            {/* {products.length} */}
                                        </Text>  
                                        <Text color="black" fontSize="md">anúncios ativos</Text> 
                                    </VStack>
                                </HStack>

                                <Button>
                                    <HStack 
                                        justifyContent="space-between" 
                                        alignItems="center" 
                                        // space={1}                      
                                    >
                                        <Text 
                                            color="blue.700" 
                                            fontFamily={'heading'} 
                                            fontWeight="bold" 
                                            fontSize="md"
                                        >
                                            Meus anúncios 
                                        </Text>
                                        {/* <ArrowRight color={colors.blue[500]} size={sizes[5]}/> */}
                                    </HStack>   
                                </Button>                                                
                            </HStack>                    
                        </Box>

                        <Text color="gray.500" mt={8}>
                            Compre produtos variados
                        </Text>

                        <InputGroup>
                            <Input 
                                color="gray.700"
                                variant="filled" 
                                borderBottomColor="blue.500"
                                borderBottom="2px solid"
                                placeholder='Digite sua pesquisa'
                                _placeholder={{color: 'gray.400'}}
                                fontSize="sm"                                                    
                                type="text" 
                                // value={filterNameInput} 
                                // onChange={handleSearchByNameCompany}
                            />       

                            <InputRightElement 
                                // onClick={handleSearch}
                                cursor="pointer"
                            >
                                {/* {isLoading ? (
                                    <Spinner size="sm" />
                                ) : ( */}
                                    <RiSearchLine color="blue.200"/>
                                    <RiSearchLine color="blue.200"/>
                                {/* )} */}
                            </InputRightElement>
                        </InputGroup>

                        <SimpleGrid 
                            columns={{ sm: 1, md: 2 }} spacing="4"
                            minChildWidth="380px"
                            width="100%"
                            mb={10}
                        >
                            <Box bg="lightblue">1</Box>
                            <Box bg="lightblue">2</Box>
                            <Box bg="lightblue">3</Box>
                            <Box bg="lightblue">4</Box>
                            {/* {(listRequest.requests) && 
                                <>
                                {listRequest.requests.map((request: any) => {
                                    return (
                                    <LastOrders
                                        id={request.id}
                                        key={request.id}
                                        status={request.progress.description}
                                        nota_fiscal={request.InvoiceNumber}
                                        numero_do_pedido={request.requestNumber}
                                        previsao_de_entrega={request.expectedDate}
                                        valor_do_produto={request.value}
                                        events={request.events}
                                        rate={request.progress.avaliacao}
                                    />
                                    )
                                })}
                                </>
                            } */}
                        </SimpleGrid>

                        <Button bg="gray.900" onClick={onOpen}>
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
                                <HStack justifyContent='space-between' alignItems='center'>
                                    <Heading fontFamily='heading' fontSize='xl' color='gray.700'>
                                        Filtrar anúncios
                                    </Heading>

                                    {/* <IconButton
                                        onPress={handleCloseModal}
                                        icon={<Icon
                                            as={AntDesign}
                                            name='close'
                                            size={6}
                                            color='gray.600'
                                        />}
                                    /> */}
                                </HStack>

                                <Text fontFamily='heading' fontSize='sm' color='gray.600' mb={3}>
                                    Condição
                                </Text>
                        
                                <HStack mb={6}>
                                    {/* <FlatList 
                                        data={conditionOptions}
                                        keyExtractor={item => item}
                                        renderItem={({ item }) => (
                                            <BoxCondition 
                                                name={item}
                                                isActive={conditionSelected.toLocaleUpperCase() 
                                                    === item.toLocaleUpperCase()}
                                                onPress={() =>  handleCondition(item)}
                                                    
                                            />                                      
                                    
                                        )}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                    />                                                                  */}
                                </HStack>

                            <Text fontFamily='heading' fontSize='sm' color='gray.600' mb={1}>
                                Aceita troca?
                            </Text>
                        
                            {/* <Switches/> */}

                            <Text fontFamily='heading' fontSize='sm' color='gray.600' mb={3}>
                                Métodos de Pagamentos Aceitos:
                            </Text>
                            
                            {/* <Checkbox.Group 
                                onChange={setPaymentMethods} 
                                value={paymentMethods} 
                                accessibilityLabel="choose numbers"
                            > */}
                                <Checkbox value='boleto' mb={1}>Boleto</Checkbox>
                                <Checkbox value='pix' mb={1}>Pix</Checkbox>
                                <Checkbox value='cash' mb={1}>Dinheiro</Checkbox>
                                <Checkbox value='card' mb={1}>Cartão Crédito</Checkbox>
                                <Checkbox value='deposit' mb={1}>Depósito Bancário</Checkbox>
                            {/* </Checkbox.Group>    */}

                            

                            </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                                    Resetar Filtros!
                                </Button>
                                <Link href="/" passHref>
                                    <Button colorScheme='whatsapp' ml={3}>
                                        Aplicar Filtros
                                    </Button>
                                </Link>
                            </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>   
                        
                    </VStack>                    

                </Box>
            </Flex>
        </Box>
    );
}   