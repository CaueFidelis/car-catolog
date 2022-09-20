import { ActivityIndicator, Modal } from 'react-native';
import { colorPalette } from '../utils/colorPalette';

export function LoadingComponent({ visible }: { visible: boolean }) {
  return (
    <Modal transparent visible={visible}>
      <ActivityIndicator
        size="large"
        color={colorPalette.paleRed}
        style={{ flex: 1, backgroundColor: 'rgba(112,112,112,0.2)' }}
      />
    </Modal>
  );
}
