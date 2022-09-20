import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { scale, verticalScale } from 'react-native-size-matters';
import { CarProps } from '../../screens/MyCars';
import { colorPalette } from '../../utils/colorPalette';
import { ButtonDefault } from '../ButtonDefault';
import { ModalView } from '../ModalView';
import { TextGeneral } from '../TextGeneral';

interface ModalUpdateCarProps {
  id: string;
  title: string;
  brand: string;
  price: string;
  age: number;
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function ModalUpdateCar({
  id,
  title,
  brand,
  price,
  age,
  isModalVisible,
  setIsModalVisible,
}: ModalUpdateCarProps) {
  async function updateCar({ id, title, brand, price, age }: CarProps) {
    try {
      const dataToUpdate = {
        title,
        brand,
        price,
        age,
      };
      await axios.put(
        `http://api-test.bhut.com.br:3000/api/cars/${id}`,
        dataToUpdate,
      );
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
      animationOutTiming={1000}
      backdropOpacity={0.3}
    >
      <ModalView>
        <TextGeneral
          fontSize={`${scale(16)}px`}
          borderBottomWidth={`${scale(1)}px`}
          borderColor={colorPalette.darkRed}
          marginBottom={`${verticalScale(10)}px`}
        >
          Dê uma diferenciada!
        </TextGeneral>
        <ButtonDefault
          onButtonPress={() => updateCar()}
          textInButton="ATUALIZAR"
        />
        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <TextGeneral
            fontSize={`${scale(14)}px`}
            fontColor={colorPalette.paleRed}
            fontWeight="bold"
            borderBottomWidth={`${scale(1)}px`}
            borderColor={colorPalette.paleRed}
            marginTop={`${verticalScale(10)}px`}
          >
            Cancelar
          </TextGeneral>
        </TouchableOpacity>
      </ModalView>
    </Modal>
  );
}
