import { Header } from "../../components/Header/Index";
// import { Summary } from "../components/Form/summary";
import { SideBar } from "../../components/Sidebar/index";
import {Flex, Box, Text, Button, VStack, Stack, Divider, SimpleGrid } from '@chakra-ui/react'
import dynamic from "next/dynamic";
import { theme } from "../../styles/theme";
import { Tooltip } from "@chakra-ui/core";
import { Chart } from "react-google-charts";

import { useContext, useEffect } from "react";
// import { api } from "../services/apiClient";
import { AuthContext } from "../../components/Users/AuthContext";
// import { withSSRAuth } from "../utils/withSSRAuth";
// import { setupAPIClient } from "../services/api";

// import ApexCharts from 'apexcharts'

//Autenticação do usuario em todas as paginas
// const {user} = useContext(AuthContext)

// Verifica a requisição para liberar a página, SE O USUARIO TIVER LOGADO!
// useEffect(() => {
//     api.get('/me')
//         .then(response => console.log(response))
//         // .catch(error => console.log(error))    
// }, [])




// const Chart = dynamic(() => import ('react-apexcharts'), {
//     ssr: false
// }); //usado para carregar loads dinamicos

// const options = {
//     chart:{
//         toolbar:{ //Titulo do Grafico
//             show:false,
//         },
//         zoom:{
//             enabled:false,
//         },
//         foreColor: theme.colors.gray[500] //cor dos numeros
//     },
//     grid:{
//         show:false, // Linhas dentro do Grafico
//     },
//     dataLabels:{
//         enabled:false,
//     },
//     // stroke:{
//     //     curve: 'smooth', //Linhas arrendondadas
//     // },
//     Tooltip:{
//         enabled:false, //efeito quando passa o mouse sob o grafico
//     },
//     xaxis:{
//         type:'datetime',
//         axisBorder:{
//             color:theme.colors.gray[500]
//         },
//         axisTicks:{
//             color:theme.colors.gray[500]
//         },
//         categories:[ //
//             '2022-09-09T00:00:00.000Z',
//             '2022-09-10T00:00:00.000Z',
//             '2022-09-11T00:00:00.000Z',
//             '2022-09-12T00:00:00.000Z',
//             '2022-09-13T00:00:00.000Z',            
//         ],
//     }, 
//     fill:{
//         opacity:0.3,
//         type:'gradient',
//         gradient:{
//             shade: 'dark',
//             opacityfrom: 0.7,
//             opacityto: 0.3,
//         }
//     }
// }

// const series= [
//     {name: 'Series 1', data: [10,80,30,70,50]}
// ];

export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  
  export const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
};

export default function Dashboard(){
    return (        
        <Flex direction="column" height="100vh"> 
            <Header/>   
            
                    
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar /> 
                {/* <SimpleGrid>
                    <Summary /> 
                </SimpleGrid> */}                    
                                        
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start"> 
                    <Flex direction="column"> 

                        {/* //Paineis                    */}
                        <Stack spacing="6">
                            <SimpleGrid minChildWidth="240px" spacing="4" width="100%">                                                                               
                                <Button 
                                    colorScheme="teal"  
                                    h="40"
                                    // onClick={onOpen}                                   
                                    // alignItems="center"
                                > 
                                    <VStack width="100%">
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="space-between"
                                            align="center"
                                        >                                        
                                            <Text mt="0">Saldo no PIX:</Text>                                            
                                            {/* <Image src="favicon.png" alt="Girl Coding"/> */}
                                        </Flex> 
                                        <Text mt="10" fontSize="25">12,00 R$</Text> 
                                        <Divider mt="10" mb="10" borderColor="gray.100"></Divider> 
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="center"
                                        >                                        
                                            <Text mt="2"color="blue.100">Recaregar Agora!</Text>
                                        </Flex>
                                    </VStack>                                                     
                                </Button>

                                <Button 
                                    colorScheme="blue"  
                                    h="40"
                                    // onClick={onOpen}                                   
                                    // alignItems="center"
                                > 
                                    <VStack width="100%">
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="space-between"
                                            align="center"
                                        >                                        
                                            <Text mt="0">Saldo no PIX:</Text>                                            
                                            {/* <Image src="favicon.png" alt="Girl Coding"/> */}
                                        </Flex> 
                                        <Text mt="10" fontSize="25">12,00 R$</Text> 
                                        <Divider mt="10" mb="10" borderColor="gray.100"></Divider> 
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="center"
                                        >                                        
                                            <Text mt="2"color="blue.100">Recaregar Agora!</Text>
                                        </Flex>
                                    </VStack>                                                     
                                </Button>

                                <Button 
                                    colorScheme="whatsapp"  
                                    h="40"                                   
                                    // alignItems="center"
                                > 
                                    <VStack width="100%">
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="space-between"
                                            align="center"
                                        >                                        
                                            <Text mt="0">Saldo no Picpay:</Text>                                            
                                            {/* <Image src="favicon.png" alt="Girl Coding"/> */}
                                        </Flex> 
                                        <Text mt="10" fontSize="25">13,92 R$</Text> 
                                        <Divider mt="10" mb="10" borderColor="gray.100"></Divider> 
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="center"
                                        >                                        
                                            <Text mt="2"color="green.200">Recaregar Agora!</Text>
                                        </Flex>
                                    </VStack>                                                     
                                </Button> 

                                <Button 
                                    colorScheme="orange"  
                                    h="40"                                   
                                    // alignItems="center"
                                > 
                                    <VStack width="100%">
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="space-between"
                                            align="center"
                                        >                                        
                                            <Text mt="0">Saldo em Criptomoedas:</Text>                                            
                                            {/* <Image src="favicon.png" alt="Girl Coding"/> */}
                                        </Flex> 
                                        <Text mt="10" fontSize="25">17,85 R$</Text> 
                                        <Divider mt="10" mb="10" borderColor="gray.100"></Divider> 
                                        <Flex 
                                            fontSize="20"                                            
                                            justifyContent="center"
                                        >                                        
                                            <Text mt="2"color="orange.100">Recaregar Agora!</Text>
                                        </Flex>
                                    </VStack>                                                     
                                </Button>                          
                            </SimpleGrid>
                        </Stack>

                        {/* //Grafico Unico                                */}
                        <Box
                            p={["6","8"]}
                            bg="gray.800"
                            borderRadius={8}
                            pb="4"
                            mt="5"
                        >
                            <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                            <Chart
                                chartType="Bar"
                                width="100%"
                                height="400px"
                                data={data}
                                options={options}
                            />
                            {/* <Chart options={options} series={series} type="area" height={160}></Chart> */}
                        </Box>

                        {/* //Graficos Quadruplus */}
                        <SimpleGrid minChildWidth="240px" spacing="3" width="100%" mt="2"> 
                            <Box>
                                {/* <Text pl="3">Comparação do Fluxo de Caixa</Text>                   */}
                                <Box 
                                    mt="3"
                                    mb="1" 
                                    bg="gray.800"
                                    p={["1","2"]}                          
                                    borderRadius={8}
                                    pb="10"                                     
                                    h="60" 
                                    fontSize="30"                           
                                >  
                                    <Text fontSize="12" mb="2" textAlign="center">Inscritos da Semana</Text>         
                                    {/* <Chart options={options} series={series} type="area" height={225}></Chart>  */}
                                </Box>
                            </Box>  
                            <Box>
                                {/* <Text pl="3">Investimentos</Text>                   */}
                                <Box 
                                    mt="3"
                                    mb="1" 
                                    bg="gray.800"
                                    p={["1","2"]}                          
                                    borderRadius={8}
                                    pb="10"                                     
                                    h="60" 
                                    fontSize="30"                           
                                > 
                                    <Text fontSize="12" mb="2" textAlign="center">Investimentos</Text>           
                                    {/* <Chart options={options} series={series} type="area" height={225}></Chart>  */}
                                </Box>
                            </Box>  
                            <Box>
                                {/* <Text pl="3">Divisão de Receitas</Text>                   */}
                                <Box 
                                    mt="3"
                                    mb="1" 
                                    bg="gray.800"
                                    p={["1","2"]}                          
                                    borderRadius={8}
                                    pb="10"                                     
                                    h="60" 
                                    fontSize="30"                           
                                >  
                                    <Text fontSize="12" mb="2" textAlign="center">Divisão de Receitas</Text>         
                                    {/* <Chart options={options} series={series} type="area" height={225}></Chart>  */}
                                </Box>
                            </Box> 
                                <Box>
                                    {/* <Text pl="3">Divisao de Despesas</Text>                   */}
                                    <Box 
                                        mt="3"
                                        mb="1" 
                                        bg="gray.800"
                                        p={["1","2"]}                          
                                        borderRadius={8}
                                        // pb="10"                                     
                                        h="60" 
                                        fontSize="10"                           
                                    > 
                                    <Text fontSize="12" mb="1" textAlign="center">Divisao de Despesas</Text>          
                                    {/* <Chart options={options} series={series} type="area" height={225}></Chart>  */}
                                    {/* <Text>{user?.email}</Text> */}
                                </Box>
                            </Box>                                  
                        </SimpleGrid>                                 
                    </Flex>
                </SimpleGrid>
            </Flex>
        </Flex>
        
    )
}

// export const getServerSideProps = withSSRAuth(async(ctx) =>{

//     const apiClient = setupAPIClient(ctx)
//     const response = await apiClient.get('/me')
//     console.log(response.data)

//     return{
//         props:{}
//     }
// })