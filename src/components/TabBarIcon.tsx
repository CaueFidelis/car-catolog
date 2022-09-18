import { Ionicons } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import { palletColors } from '../utils/palletColors';

interface TabBarIconsProps {
  routeName: string;
  onFocus: Boolean;
  iconsName: Object;
  iconsNameOnFocus: Object;
}

export function TabBarIcons({
  routeName,
  onFocus,
  iconsName,
  iconsNameOnFocus,
}: TabBarIconsProps) {
  return (
    <Ionicons
      name={
        onFocus
          ? iconsNameOnFocus[routeName]
          : iconsName[routeName]
      }
      size={scale(40)}
      color={onFocus ? palletColors.paleGray : palletColors.darkRed}
    />
  );
}
