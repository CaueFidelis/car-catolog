import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';

export const CardCarView = styled.View`
  width: ${scale(290)}px;
  flex-direction: row;
  background-color: '#fff';
  border: ${scale(1)}px solid ${colorPalette.darkRed};
  border-radius: ${scale(25)}px;
  padding: ${verticalScale(20)}px ${scale(25)}px;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  margin-top: ${verticalScale(20)}px;
`;

export const RowViewCardCar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${verticalScale(20)}px;
`;
