import { ButtonDefaultBackground, TextInButton } from './styles';

interface ButtonDefaultProps {
  buttonWidth?: string;
  marginTop?: string;
  textInButton: string;
  onButtonPress: () => void;
}

export function ButtonDefault({
  buttonWidth,
  marginTop,
  textInButton,
  onButtonPress,
}: ButtonDefaultProps) {
  return (
    <ButtonDefaultBackground
      onPress={onButtonPress}
      width={buttonWidth}
      marginTop={marginTop}
    >
      <TextInButton>{textInButton}</TextInButton>
    </ButtonDefaultBackground>
  );
}
