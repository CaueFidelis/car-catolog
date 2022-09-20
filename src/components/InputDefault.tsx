import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../utils/colorPalette';

interface InputDefaultProps {
  isEditable: boolean;
  marginBottom: string;
  error: any;
}

export const InputDefault = styled.TextInput`
  font-size: ${scale(11)}px;
  width: 100%;
  height: ${verticalScale(30)}px;
  background-color: ${(props: InputDefaultProps) =>
    props.isEditable ? '#fff' : `${colorPalette.paleGray}`};
  color: ${(props: InputDefaultProps) =>
    props.isEditable
      ? '#000' || (props.error && `${colorPalette.paleRed}`)
      : `${colorPalette.darkGray}`};
  font-weight: ${(props: InputDefaultProps) =>
    props.isEditable ? 'normal' : 'bold'};
  border: ${scale(1)}px solid ${colorPalette.darkRed};
  border-color: ${(props: InputDefaultProps) =>
    props.error ? `${colorPalette.paleRed}` : `${colorPalette.darkRed}`};
  border-radius: ${scale(5)}px;
  padding: 0 ${scale(10)}px 0 ${scale(10)}px;
  margin: ${verticalScale(5)}px;
  margin-bottom: ${(props: InputDefaultProps) =>
    props.marginBottom || `${verticalScale(10)}px`};
`;
