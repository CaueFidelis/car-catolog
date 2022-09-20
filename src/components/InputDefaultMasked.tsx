import styled from 'styled-components/native';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../utils/colorPalette';
import { MaskedTextInput } from 'react-native-mask-text';

interface InputDefaultMaskedProps {
  isEditable: boolean;
  marginBottom: string;
  error: any;
}

export const InputDefaultMasked = styled(MaskedTextInput)`
  font-size: ${scale(11)}px;
  width: 100%;
  height: ${verticalScale(30)}px;
  background-color: ${(props: InputDefaultMaskedProps) =>
    props.isEditable ? '#fff' : `${colorPalette.paleGray}`};
  color: ${(props: InputDefaultMaskedProps) =>
    props.isEditable
      ? '#000' || (props.error && `${colorPalette.paleRed}`)
      : `${colorPalette.darkGray}`};
  font-weight: ${(props: InputDefaultMaskedProps) =>
    props.isEditable ? 'normal' : 'bold'};
  border: ${scale(1)}px solid ${colorPalette.darkRed};
  border-color: ${(props: InputDefaultMaskedProps) =>
    props.error ? `${colorPalette.paleRed}` : `${colorPalette.darkRed}`};
  border-radius: ${scale(5)}px;
  padding: 0 ${scale(10)}px 0 ${scale(10)}px;
  margin: ${verticalScale(5)}px;
  margin-bottom: ${(props: InputDefaultMaskedProps) =>
    props.marginBottom || `${verticalScale(10)}px`};
`;
