import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: any) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }: any) => theme.fonts.bold};
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }: any) => theme.colors.title};
`;