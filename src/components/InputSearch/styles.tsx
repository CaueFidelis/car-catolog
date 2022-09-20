import { scale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { colorPalette } from '../../utils/colorPalette';

export const ContainerInputSearch = styled.View`
  flex-direction: row;
  width: ${scale(290)}px;
  height: ${verticalScale(33)}px;
  padding: 0 ${scale(20)}px;
  background-color: #fff;
  align-items: center;
  align-self: center;
  border-width: ${scale(2)}px;
  border-bottom-right-radius: ${scale(20)}px;
  border-bottom-left-radius: ${scale(20)}px;
  border-color: ${colorPalette.paleGray};
  border-top-color: #fff;
`;
export const InputDefaultSearch = styled.TextInput`
  width: ${scale(190)}px;
  align-self: center;
`;
