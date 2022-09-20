import { ButtonDefaultBackground, TextInButton } from './styles';

interface ButtonDefaultProps {
  onButtonPress: () => void;
  textInButton: string;
  buttonWidth?: string;
}

export function ButtonDefault({
  onButtonPress,
  textInButton,
  buttonWidth,
}: ButtonDefaultProps) {
  return (
    <ButtonDefaultBackground onPress={onButtonPress} width={buttonWidth}>
      <TextInButton>{textInButton}</TextInButton>
    </ButtonDefaultBackground>
  );
}
