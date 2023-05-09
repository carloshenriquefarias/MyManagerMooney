import { Flex } from "@chakra-ui/react";

interface PageProps {
  children: React.ReactNode
  background?: string[];
  isAdmin?: boolean;
  backgroundFormColor?: string;
  onSubmit?: any
}

export function PageWithBackground({ children, background, isAdmin, backgroundFormColor, onSubmit }: PageProps) {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundImage={!isAdmin ? background![0] : background![1]}
      backgroundSize="cover"
      flexDir="column">
      <Flex
        w="100%"
        maxWidth={400}
        padding={8}
        bg={'white'}
        flexDir="column"
        borderRadius={4}
        shadow={"0 0 20px rgba(0, 0, 0, 0.05)"}>
        {children}
      </Flex>
    </Flex>
  )
}

