import React from 'react';
import {
  Text,
  View
} from 'react-native';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  Username
} from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <View>
            <UserInfo>
              <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/48210960?v=4' }} />
              <User>
                <UserGretting>Olá,</UserGretting>
                <Username>Luiz Rogério</Username>
              </User>
            </UserInfo>
          </View>
        </UserWrapper>
      </Header>
    </Container>
  )
}