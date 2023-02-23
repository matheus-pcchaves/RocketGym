import { Heading, HStack, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export function HomeHeader(){
  return(
    <HStack bg={'gray.600'} pt={16} pb={5} px={8} alignItems='center' >
        <UserPhoto
          source={{ uri: 'https://avatars.githubusercontent.com/u/71332261?s=400&u=0403c3d06964927c480b8402d9ec25b0e7c9e5f9&v=4' }}
          alt='Imagem do usuário'
          size={16}
          mr={4}
        />

        <VStack flex={1}>
          <Text color='gray.100' fontSize='md'>Olá</Text>

          <Heading color='gray.100' fontSize='md'>
            Matheus 
          </Heading>
        </VStack>

        <TouchableOpacity>
          <Icon
            as={MaterialIcons}
            name='logout'
            color='gray.200'
            size={7}
          />
        </TouchableOpacity>
    </HStack>
  )  
}