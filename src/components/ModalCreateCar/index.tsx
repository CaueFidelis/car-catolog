import { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';
import { ModalView } from '../ModalView';
import { TextGeneral } from '../TextGeneral';
import { FormCreateCar } from './Form/FormCreateCar';

interface ModalCreateCarProps {
  isModalVisible: boolean;
  idMyCars: Array<string>;
  reloadScreen: () => void;
  setIsLoading: Dispatch<SetStateAction<any>>;
  setIdMyCars: Dispatch<SetStateAction<any>>;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function ModalCreateCar({
  idMyCars,
  setIdMyCars,
  setIsLoading,
  reloadScreen,
  isModalVisible,
  setIsModalVisible,
}: ModalCreateCarProps) {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
      animationOutTiming={1000}
      backdropOpacity={0.3}
    >
      <ModalView alignItems="center">
        <FormCreateCar
          idMyCars={idMyCars}
          setIdMyCars={setIdMyCars}
          setIsLoading={setIsLoading}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          reloadScreen={reloadScreen}
        />
      </ModalView>
    </Modal>
  );
}
