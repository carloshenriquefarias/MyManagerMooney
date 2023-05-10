import { Box, BoxProps, Circle, Flex, Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';

import { FiCheckCircle } from 'react-icons/fi';
import { RiArchiveLine, RiCheckLine, RiFilePaperLine, RiTruckLine } from 'react-icons/ri';
import { EventProps } from '../../types/listRequest';

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
  heading: ItemProps['heading']
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon = FiCheckCircle,
  boxProps = {},
  skipTrail = false,
  children,
  heading,
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
        {!skipTrail && heading != 'Pedido Entregue' && (<Box w="2px" flex={1} bg={color} my={1} />)}
      </Flex>

      <Box {...boxProps}>
        {children}
      </Box>
    </Flex>
  );
};

const Item = ({ icon, heading, date, hour }: ItemProps) => {
  return (
    <TimelineItem icon={icon} heading={heading}>
      <VStack justifyContent="center" alignItems="left" spacing={0.5} mt={1}>
        <Heading fontSize="sm" fontWeight="500" mt={1}>
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



function selectItemBasedOnEvent(event: string) {
  switch (event) {
    case 'Pedido Aprovado':
      return RiArchiveLine
    case 'Pedido Faturado':
      return RiFilePaperLine
    case 'Pedido Aprovado':
      return RiCheckLine
    case 'Pedido Saiu Para Entrega':
      return RiTruckLine
    case 'Pedido Entregue':
      return RiCheckLine
    default:
      return;
  }
}



interface TimelimeProps {
  events: EventProps[]
}

const Timeline = ({ events }: TimelimeProps) => {

  if (!events) {
    return null
  }

  return (

    <VStack
      textAlign="start"
      align="start"
      mb={3}
      mt={8}
      justifyContent="left"
      alignItems="left"
      position="absolute"
      left={7}
      overflowY={'auto'}
      maxW={['90%']}
      w={'full'}
      height={['100%', '100%', '100%', '100%', '100%']}
      maxH={['50%']}
    >
      <Box width={'100%'}>
        {events.map((event: EventProps) => {
          return (
            <Item
              icon={selectItemBasedOnEvent(event.description)}
              heading={event.description}
              date={event.date}
              hour={event.hour}
            />
          )
        })}
      </Box>

    </VStack>
  );
};

export default Timeline;
