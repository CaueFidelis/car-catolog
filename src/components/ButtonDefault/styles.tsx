import { scale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { colorPalette } from '../../utils/colorPalette';

interface ButtonDefaultBackgroundProps {
  width: string;
  marginTop: string;
}

export const ButtonDefaultBackground = styled.TouchableOpacity`
  width: ${(props: ButtonDefaultBackgroundProps) =>
    props.width || `${scale(210)}px`};
  background-color: ${colorPalette.mediumRed};
  border-radius: ${scale(10)}px;
  padding: ${verticalScale(8)}px 0;
  align-items: center;
  text-align: center;
  margin-top: ${(props) => props.marginTop || `0`};
`;

export const TextInButton = styled.Text`
  color: ${colorPalette.paleGray};
  text-transform: uppercase;
`;
