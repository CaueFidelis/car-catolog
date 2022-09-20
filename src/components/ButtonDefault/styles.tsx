import { scale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { colorPalette } from '../../utils/colorPalette';

interface ButtonDefaultBackgroundProps {
  width: string;
}

export const ButtonDefaultBackground = styled.TouchableOpacity`
  width: ${(props: ButtonDefaultBackgroundProps) =>
    props.width || `${scale(210)}px`};
  background-color: ${colorPalette.mediumRed};
  border-radius: ${scale(10)}px;
  padding: ${verticalScale(8)}px 0;
  align-items: center;
  text-align: center;
`;

export const TextInButton = styled.Text`
  color: ${colorPalette.paleGray};
  text-transform: uppercase;
`;
