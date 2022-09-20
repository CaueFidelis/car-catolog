import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';

export const HeaderView = styled.View`
  width: 100%;
  border-bottom-width: ${scale(1)}px;
  border-color: ${colorPalette.mediumGray};
  align-items: center;
  text-align: center;
  padding: ${verticalScale(40)}px 0 ${verticalScale(15)}px 0px;
`;

export const Title = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: bold;
  color: ${colorPalette.darkRed};
`;
