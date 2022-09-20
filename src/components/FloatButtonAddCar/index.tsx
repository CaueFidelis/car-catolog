import { BackgroundFloatButton } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { colorPalette } from '../../utils/colorPalette';
import { scale } from 'react-native-size-matters';

interface FloatButtonAddCarProps {
  showForm: Boolean;
  setShowForm: (showForm: Boolean) => Boolean;
}

export function FloatButtonAddCar({
  showForm,
  setShowForm,
}: FloatButtonAddCarProps) {
  return (
    <BackgroundFloatButton onPress={() => setShowForm(!showForm)}>
      <FontAwesome5
        name="plus"
        size={scale(20)}
        color={colorPalette.paleGray}
      />
    </BackgroundFloatButton>
  );
}
