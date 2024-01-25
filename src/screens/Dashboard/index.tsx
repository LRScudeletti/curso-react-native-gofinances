import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  Username,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles'
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export function Dashboard() {
  const data = [
    {
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '12/05/2024'
    },
    {
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '17/04/2024'
    },
    {
      type: 'positive',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.350,14',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '01/04/2024'
    }
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <View>
            <UserInfo>
              <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/48210960?v=4' }} />
              <User>
                <UserGreeting>Olá,</UserGreeting>
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

      <Transactions>

        <Title>Últimos Lançamentos</Title>

        <TransactionList
          data={data}
          renderItem={({ item }: any) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace()
          }}
        />
      </Transactions>
    </Container>
  )
}