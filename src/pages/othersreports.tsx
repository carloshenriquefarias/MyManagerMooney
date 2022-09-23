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

// const chart = new ApexCharts(document.querySelector("#chart"), options);
//         chart.render();

const options = {
    series: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
      }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58]
      }],
        chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: 'XYZ - Stock Analysis (2009 - 2016)',
        align: 'left',
        offsetX: 110
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB'
          },
          labels: {
            style: {
              colors: '#008FFB',
            }
          },
          title: {
            text: "Income (thousand crores)",
            style: {
              color: '#008FFB',
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396'
          },
          labels: {
            style: {
              colors: '#00E396',
            }
          },
          title: {
            text: "Operating Cashflow (thousand crores)",
            style: {
              color: '#00E396',
            }
          },
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FEB019'
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
          title: {
            text: "Revenue (thousand crores)",
            style: {
              color: '#FEB019',
            }
          }
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }
};

// const series= [
//     {name: 'Series 1', data: [10,80,30,70,50]}
// ];

export default function OthersReports(){
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
                        <Chart options={options}  type="area" height={160}>
                        {/* series={series} */}

                        </Chart>
                    </Box>
                   
                </SimpleGrid>
            </Flex>
        </Flex>
        
    )
}