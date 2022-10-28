import { Header } from "../components/Header/Index";
import { Summary } from "../components/Form/summary";
import { SideBar } from "../components/Sidebar/index";
import {Flex, Box, Text, Select, Button, Stack, SimpleGrid, Divider, Heading, VStack } from '@chakra-ui/react'
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";
import { Tooltip } from "@chakra-ui/core";
// import { Select } from "../components/Form/Select";

const Chart = dynamic(() => import ('react-apexcharts'), {
  ssr: false
}); //usado para carregar loads dinamicos


const options = {
  chart:{
      toolbar:{ //Titulo do Grafico
          show:false,
      },
      zoom:{
          enabled:false,
      },
      foreColor: theme.colors.gray[500] //cor dos numeros
  },
  grid:{
      show:false, // Linhas dentro do Grafico
  },
  dataLabels:{
      enabled:false,
  },
  // stroke:{
  //     curve: 'smooth', //Linhas arrendondadas
  // },
  Tooltip:{
      enabled:false, //efeito quando passa o mouse sob o grafico
  },
  xaxis:{
      type:'datetime',
      axisBorder:{
          color:theme.colors.gray[500]
      },
      axisTicks:{
          color:theme.colors.gray[500]
      },
      categories:[ //
          '2022-09-09T00:00:00.000Z',
          '2022-09-10T00:00:00.000Z',
          '2022-09-11T00:00:00.000Z',
          '2022-09-12T00:00:00.000Z',
          '2022-09-13T00:00:00.000Z',            
      ],
  }, 
  fill:{
      opacity:0.3,
      type:'gradient',
      gradient:{
          shade: 'dark',
          opacityfrom: 0.7,
          opacityto: 0.3,
      }
  }
}

const series= [
  {name: 'Series 1', data: [10,80,30,70,50]}
];


export default function OthersReports(){
    return (
      <Flex direction="column" height="100vh"> 
        <Header/> 
        <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <SideBar />
          {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
          <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Escolha o período de análise</Heading>
            <Select width="30%" placeholder='Selecione o mes'variant='filled'bg="gray.700" color="gray.500">
              <option value='option1'>Janeiro</option>
              <option value='option2'>Fevereiro</option>
              <option value='option3'>Março</option>
            </Select>   
          </Flex>             
            <Divider my="6" borderColor="gray.700"></Divider>
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="3" width="100%"> 
                <Box>
                  <Text pl="3">Receitas</Text>                  
                  <Box 
                    mt="3"
                    mb="1" 
                    bg="gray.600"
                    p={["1","2"]}                          
                    borderRadius={8}
                    pb="10"                                     
                    // h="40" 
                    fontSize="30"                           
                  >
                    <Box 
                      justifyContent="center"
                      alignItems="center"
                    >
                      5.000,00 R$
                    </Box>                            
                    <Divider my="2" borderColor="gray.700"></Divider>
                    <Flex 
                      fontSize="14"
                      borderRadius={5}
                      // mb="1" 
                      bg="green.300"
                      p="1"
                      justifyContent="space-between"
                    >
                      <Text>Realizado x Programado:</Text>
                      <Text>12.5%</Text>
                    </Flex>
                  </Box>                  
                </Box>
                <Box>
                  <Text pl="3">Investimentos</Text>                  
                  <Box 
                    mt="3"
                    mb="1" 
                    bg="gray.600"
                    p={["1","2"]}                          
                    borderRadius={8}
                    pb="10"                                     
                    // h="40" 
                    fontSize="30"                           
                  >
                    <Box 
                      justifyContent="center"
                      alignItems="center"
                    >
                      1.000,00 R$
                    </Box>                            
                    <Divider my="2" borderColor="gray.700"></Divider>
                    <Flex 
                      fontSize="14"
                      borderRadius={5}
                      // mb="1" 
                      bg="green.300"
                      p="1"
                      justifyContent="space-between"
                    >
                      <Text>Realizado x Programado:</Text>
                      <Text>12.5%</Text>
                    </Flex>
                  </Box>                  
                </Box>
                <Box>
                  <Text pl="3">Despesas</Text>                  
                  <Box 
                    mt="3"
                    mb="1" 
                    bg="gray.600"
                    p={["1","2"]}                          
                    borderRadius={8}
                    pb="10"                                     
                    // h="40" 
                    fontSize="30"                           
                  >
                    <Box 
                      justifyContent="center"
                      alignItems="center"
                    >
                      2.500,00 R$
                    </Box>                            
                    <Divider my="2" borderColor="gray.700"></Divider>
                    <Flex 
                      fontSize="14"
                      borderRadius={5}
                      // mb="1" 
                      bg="red.300"
                      p="1"
                      justifyContent="space-between"
                    >
                      <Text>Realizado x Programado:</Text>
                      <Text>12.5%</Text>
                    </Flex>
                  </Box>
                </Box>
                <Box>
                  <Text pl="3">Saldo Mensal</Text>                  
                  <Box 
                    mt="3"
                    mb="1" 
                    bg="gray.600"
                    p={["1","2"]}                          
                    borderRadius={8}
                    pb="10"                                     
                    // h="40" 
                    fontSize="30"                           
                  >
                    <Box 
                      justifyContent="center"
                      alignItems="center"
                    >
                      1.500,00 R$
                    </Box>                            
                    <Divider my="2" borderColor="gray.700"></Divider>
                    <Flex 
                      fontSize="14"
                      borderRadius={5}
                      // mb="1" 
                      bg="green.300"
                      p="1"
                      justifyContent="space-between"
                    >
                      <Text>Realizado x Programado:</Text>
                      <Text>12.5%</Text>
                    </Flex>
                  </Box>
                </Box>                           
              </SimpleGrid> 

              <SimpleGrid minChildWidth="240px" spacing="3" width="100%"> 
                <Box>
                  <Text pl="3">Comparação do Fluxo de Caixa</Text>                  
                  <Box 
                    mt="3"
                    mb="1" 
                    bg="gray.600"
                    p={["1","2"]}                          
                    borderRadius={8}
                    pb="10"                                     
                    h="60" 
                    fontSize="30"                           
                  >           
                    <Chart options={options} series={series} type="area" height={160}></Chart> 
                  </Box>
                </Box>  
                <Box>
                  <Text pl="3">Investimentos</Text>                  
                  <Box 
                    mt="3"
                    mb="1" 
                    bg="gray.600"
                    p={["1","2"]}                          
                    borderRadius={8}
                    pb="10"                                     
                    h="60" 
                    fontSize="30"                           
                  >           
                    <Chart options={options} series={series} type="area" height={160}></Chart> 
                  </Box>
                </Box>  
                <Box>
                  <Text pl="3">Divisão de Receitas</Text>                  
                  <Box 
                    mt="3"
                    mb="1" 
                    bg="gray.600"
                    p={["1","2"]}                          
                    borderRadius={8}
                    pb="10"                                     
                    h="60" 
                    fontSize="30"                           
                  >           
                    <Chart options={options} series={series} type="area" height={160}></Chart> 
                  </Box>
                </Box> 
                <Box>
                  <Text pl="3">Divisao de Despesas</Text>                  
                  <Box 
                    mt="3"
                    mb="1" 
                    bg="gray.600"
                    p={["1","2"]}                          
                    borderRadius={8}
                    pb="10"                                     
                    h="60" 
                    fontSize="30"                           
                  >           
                    <Chart options={options} series={series} type="area" height={160}></Chart> 
                  </Box>
                </Box>                                  
              </SimpleGrid>    
              <SimpleGrid minChildWidth="240px" spacing="3" width="100%"> 
                
                <Box>
                  <Text pl="3">Analises</Text>
                  <Box>
                    <Box 
                      mt="3"
                      mb="1" 
                      bg="green.500"
                      p={["1","2"]}                          
                      borderRadius={8}
                      pb="2"                                     
                      // h="20" 
                      fontSize="16"                           
                    >           
                      <Text>PARABÉNS! No mes de Janeiro voce ganhou mais do que gastou e economizou 100,00 RS! 
                        Entretanto, voce gastou mais que o planejado! 
                        Neste mes voce ganhou mais dinheiro e Renda Familiar e gastou mais em lazer!
                      </Text>
                    </Box>
                  </Box>     
                </Box>                                          
              </SimpleGrid>         
            </VStack>  
          </Box>
        </Flex>   
      </Flex>        
    )
}

