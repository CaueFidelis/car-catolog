import { scale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const ModalView = styled.View`
  width: ${scale(280)}px;
  background-color: #fff;
  align-self: center;
  align-items: ${(props: { alignItems: string }) =>
    props.alignItems || 'center'};
  padding: ${verticalScale(25)}px ${scale(35)}px;
  border-radius: ${scale(5)}px;
`;
