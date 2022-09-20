import { TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { colorPalette } from '../utils/colorPalette';
import { TextGeneral } from './TextGeneral';

interface TextWithTouchableProps {
  firstText: string;
  touchableText: string;
  lastText: string;
  fontSize: string;
  fontColorTouchableText: string;
  onTouchablePress: () => void;
}

export function TextWithTouchable({
  firstText,
  touchableText,
  lastText,
  fontSize,
  fontColorTouchableText,
  onTouchablePress,
}: TextWithTouchableProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TextGeneral fontSize={fontSize} fontWeight="bold">
        {firstText}
      </TextGeneral>
      <TouchableOpacity onPress={onTouchablePress}>
        <TextGeneral
          fontSize={fontSize}
          fontColor={fontColorTouchableText}
          fontWeight="bold"
          borderBottomWidth={`${scale(1)}px`}
          borderColor={colorPalette.paleRed}
        >
          {touchableText}
        </TextGeneral>
      </TouchableOpacity>
      <TextGeneral fontSize={fontSize} fontWeight="bold">
        {lastText}
      </TextGeneral>
    </View>
  );
}
