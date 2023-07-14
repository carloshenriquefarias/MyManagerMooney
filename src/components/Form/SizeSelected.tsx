import { Text, Stack } from '@chakra-ui/core';

export function SizeSelected() {
  return (
    <Stack
      bg={"gray.50"}
      rounded={'5'}
      w={'24'}
      h={'10'} 
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      // isPressed={isActive}
      mr={3}
      borderColor={"gray.400"}
      borderWidth={1}

      // {...rest}
    >
      <Text
        color={"gray.500"}
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {/* {name} */}
      </Text>
    </Stack>
  );
}