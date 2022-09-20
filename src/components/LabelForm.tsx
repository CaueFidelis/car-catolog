import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { colorPalette } from '../utils/colorPalette';

export const LabelForm = styled.Text`
  font-size: ${scale(12)}px;
  font-weight: bold;
  color: ${colorPalette.paleRed};
  align-self: flex-start;
`