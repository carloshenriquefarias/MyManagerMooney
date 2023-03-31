import { VStack, Heading, Box, Link, Text, Container, BoxProps, Circle,
    Flex, useColorModeValue, HStack } from '@chakra-ui/react';

import { FaTools } from 'react-icons/fa';
import { FiPackage, FiHome, FiBarChart2, FiCheckCircle } from 'react-icons/fi';

interface ItemProps {
    icon: any;
    heading: string;
    date: string;
    hour: string;
}

interface TimelineItemProps extends BoxProps {
    icon?: any;
    boxProps?: BoxProps;
    skipTrail?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    icon = FiCheckCircle,
    boxProps = {},
    skipTrail = false,
    children,
    ...props
}) => {

    const color = useColorModeValue('brand.secondary ', 'brand.secondary');

    return (
        <Flex minH={20} {...props}>
            <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
                <Circle
                    size={12}
                    bg={useColorModeValue('gray.400', 'green.500')}
                    opacity={useColorModeValue(0.07, 0.15)}
                />
                <Box as={icon} size="1.25rem" color={color} pos="absolute" left="0.875rem" top="0.875rem" />
                {!skipTrail && <Box w="2px" flex={1} bg={color} my={1} />}
            </Flex>

            <Box {...boxProps}>
                {children}
            </Box>
        </Flex>
    );
};

const Item = ({icon, heading, date, hour} : ItemProps) => {
    return (
        <TimelineItem icon={icon}>
            <VStack justifyContent="center" alignItems="left" spacing={0.5} mt={1}>

                <Heading fontSize="sm" fontWeight="450" mt={1}>
                    {heading}
                </Heading>

                <HStack >
                    <Text fontSize="sm" fontWeight="500" color="gray.400"> {date}</Text>
                    <Text> - </Text>
                    <Text fontSize="sm" fontWeight="500" color="gray.400"> {hour}</Text>
                </HStack>

            </VStack>
        </TimelineItem>
    );
};

const TimelineCard = () => {

    return (
        <Container 
            maxW="7xl" 
            // p={{ base: 2, sm: 10 }}
            pt={4}
        >
            <VStack 
                textAlign="start" 
                align="start" 
                mb={3} 
                mt={3}
                justifyContent="left" 
                alignItems="left" 
                position="absolute" 
                left={7}
            >
                <Box zIndex={5} >

                    <Box>
                        <Item
                            icon={FaTools}
                            heading="Pedido Aprovado"
                            date="28/03/2023"
                            hour="20:59 PM"
                        />

                        <Item
                            icon={FiBarChart2}
                            heading="Pedido Faturado"
                            date="29/03/2023"
                            hour="10:52 PM"
                        />

                        <Item
                            icon={FaTools}
                            heading="Pedido em Andamento"
                            date="30/03/2023"
                            hour="18:22 PM"
                        />

                        <Item
                            icon={FiHome}
                            heading="Pedido Entregue"
                            date="30/03/2023"
                            hour="20:48 PM"
                        />

                        <Item
                            icon={FiPackage}
                            heading="Pedido Finalizado"
                            date="31/03/2023"
                            hour="23:55 PM"
                        />                         

                    </Box>
                </Box>
            </VStack>
        </Container>
    );
};

export default TimelineCard;