import { Center, ScrollView, VStack, Skeleton, Text, Heading } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const PHOTO_SIZE = 33;

export function Profile(){
  const [ photoIsLoading, setPhotoIsLoading ] = useState(true)

  return(
    <VStack flex={1}>
      <ScreenHeader title='Perfil'/>

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }} >
        <Center mt={6} px={10}>
          {
            photoIsLoading ?
            <Skeleton 
              w={PHOTO_SIZE} 
              h={PHOTO_SIZE} 
              rounded="full"
              startColor="gray.500"
              endColor="gray.400" 
            />
            :
            <UserPhoto
              source={{ uri: 'https://avatars.githubusercontent.com/u/71332261?s=400&u=0403c3d06964927c480b8402d9ec25b0e7c9e5f9&v=4' }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          }

          <TouchableOpacity>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            bg="gray.600"
            placeholder='Nome'
          />

          <Input
            bg="gray.600"
            placeholder='E-mail'
            isDisabled
          />

          <Heading color='gray.200' fontSize='md' mb={2} alignSelf="flex-start" mt={12}>
            Alterar senha
          </Heading>

          <Input
            bg='gray.600'
            placeholder='senha antiga'
            secureTextEntry
          />

          <Input
            bg='gray.600'
            placeholder='Nova senha'
            secureTextEntry
          />

          <Input
            bg='gray.600'
            placeholder='Confirme a nova senha'
            secureTextEntry
          />

          <Button
            title='Atualizar'
            mt={4}
          />
        </Center>
      </ScrollView>

    </VStack>
  )  
}