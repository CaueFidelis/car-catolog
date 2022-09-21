import { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';
import { ModalView } from '../ModalView';
import { TextGeneral } from '../TextGeneral';
import { FormUpdateCar } from './Form/FormUpdateCar';

export type ModalUpdateCarProps = {
  id: string;
  title: string;
  brand: string;
  price: string;
  age: number;
  isModalVisible: boolean;
  onSubmit: () => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

export function ModalUpdateCar({
  id,
  title,
  brand,
  price,
  age,
  isModalVisible,
  onSubmit,
  setIsLoading,
  setIsModalVisible,
}: ModalUpdateCarProps) {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
      animationOutTiming={1000}
      backdropOpacity={0.3}
    >
      <ModalView alignItems="center">
        <FormUpdateCar
          id={id}
          title={title}
          brand={brand}
          price={price}
          age={age}
          isModalVisible={isModalVisible}
          onSubmit={onSubmit}
          setIsLoading={setIsLoading}
          setIsModalVisible={setIsModalVisible}
        />
      </ModalView>
    </Modal>
  );
}
