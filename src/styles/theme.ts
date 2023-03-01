import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "1000": '#181820',
            "900": '#181B23',
            "800": '#1F2029',
            "700": '#353646',
            "600": '#4B4D63',
            "500": '#616480',
            "400": '#797D7A',
            "300": '#9699b0',
            "200": '#B3B5C6',
            "100": '#D1D2DC',
            "50": '#EEEEF2',
        }, 

        green: {
            "100": '#53BF9D',
            "200": '#00FFC6',
            "300": '#e2e896',
            "400": '#a5cf95',
            
        }
    },
    fonts: {
        heading:'Roboto',
        body:'Roboto',        
    },
    styles: {
        global:{
            body:{
                bg: 'gray.900',
                color:'gray.50'
            }
        }
    }
})  