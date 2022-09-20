import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';
import { colorPalette } from '../utils/colorPalette';

interface TextGeneralProps {
  maxWidth: string;
  fontSize: string;
  fontWeight: string;
  textAlign: string;
  textTransform: string;
  fontColor: string;
  borderBottomWidth: string;
  borderColor: string;
  marginTop: string;
  marginBottom: string;
}

export const TextGeneral = styled.Text`
  max-width: ${(props: TextGeneralProps) => props.maxWidth || `auto`};;
  font-size: ${(props: TextGeneralProps) => props.fontSize || `${scale(12)}px`};
  font-weight: ${(props: TextGeneralProps) => props.fontWeight || `normal`};
  text-transform: ${(props: TextGeneralProps) => props.textTransform || `none`};
  text-align: ${(props: TextGeneralProps) => props.textAlign || `left`};
  color: ${(props: TextGeneralProps) =>
    props.fontColor || `${colorPalette.darkRed}`};
  border-bottom-width: ${(props: TextGeneralProps) =>
    props.borderBottomWidth || `0px`};
  border-color: ${(props: TextGeneralProps) =>
    props.borderColor || `transparent`};
  margin-top: ${(props: TextGeneralProps) => props.marginTop || `0px`};
  margin-bottom: ${(props: TextGeneralProps) => props.marginBottom || `0px`};
`;
