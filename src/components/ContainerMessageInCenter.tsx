import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const ContainerMessageInCenter = styled.ScrollView`
  flex: 0.8;
  align-items: center;
  justify-content: center;
  padding: 0 ${scale(40)}px;
`;
