import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  Username,
  Icon,
  HighlightCards
} from './styles'
import { HighlightCard } from '../../components/HighlightCard';

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
          <Icon name='power' />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de Abril'
        />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 3 de Abril'
        />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de Abril'
        />
      </HighlightCards>
    </Container>
  )
}