// import { Text, Pressable, IPressableProps } from 'native-base';

// type Props = IPressableProps & {
//   name: string;
//   isActive: boolean;
//   size?: 'large' | 'small'
// }

// export function BoxCondition({ name, isActive, size = 'small', ...rest }: Props) {
//   return (
//     <Pressable
//       bg="gray.50"
//       rounded={size === "small" ? '10' : '5'}
//       w={size === "small" ? '24' : '24'}
//       h={size === "small" ? '6' : '10'} 
//       justifyContent="center"
//       alignItems="center"
//       overflow="hidden"
//       isPressed={isActive}
//       mr={3}
//       borderColor="purple.200"
//       borderWidth={1}

//       _pressed={{
//         background: 'purple.200'
//       }}
      
//       {...rest}
//     >
//       <Text
//         color={isActive ? "gray.100" : "purple.200"}
//         textTransform="uppercase"
//         fontSize="xs"
//         fontWeight="bold"
//       >
//         {name}
//       </Text>
//     </Pressable>
//   );
// }