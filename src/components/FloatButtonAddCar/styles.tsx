import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';
import { Dimensions } from 'react-native';

export const BackgroundFloatButton = styled.TouchableOpacity`
  padding: ${scale(15)}px;
  position: absolute;
  bottom: ${verticalScale(25)}px;
  right: ${scale(25)}px;
  background-color: ${colorPalette.paleRed};
  border-radius: ${Math.round(
    Dimensions.get('window').width + Dimensions.get('window').height,
  ) / 2}px;
`;
