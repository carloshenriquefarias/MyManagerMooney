import { Header } from "../components/Header/Index";
import { Summary } from "../components/Form/summary";
import { SideBar } from "../components/Sidebar/index";
import {Flex, Box, Text, Button, Stack, SimpleGrid } from '@chakra-ui/react'
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";
import { Tooltip } from "@chakra-ui/core";

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

export default function Dashboard(){
    return (
        <Flex direction="column" height="100vh"> 
            <Header/>   
                    
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar /> 
                {/* <Summary />                          */}
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start"> 
                                                    
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" height={160}>

                        </Chart>
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={160}></Chart>
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={160}></Chart>
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={160}></Chart>
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={160}></Chart>
                    </Box>
                    <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={160}></Chart>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
        
    )
}