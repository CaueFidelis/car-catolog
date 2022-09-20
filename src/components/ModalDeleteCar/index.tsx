import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';
import { ButtonDefault } from '../ButtonDefault';
import { ModalView } from '../ModalView';
import { TextGeneral } from '../TextGeneral';

interface ModalDeleteCarProps {
  _id: string;
  title: string;
  age: number;
  onSubmit: () => void;
  isModalVisible: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function ModalDeleteCar({
  _id,
  title,
  age,
  onSubmit,
  setIsLoading,
  isModalVisible,
  setIsModalVisible,
}: ModalDeleteCarProps) {
  const [onDeleted, setOnDeleted] = useState(false);

  async function deleteCar() {
    setIsLoading(true);
    try {
      await axios.delete(`http://api-test.bhut.com.br:3000/api/cars/${_id}`);
      setOnDeleted(true);
      onSubmit();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('Erro: ', error);
    }
  }

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
      backdropOpacity={0.3}
    >
      <ModalView>
        {onDeleted ? (
          <>
            <TextGeneral
              fontSize={`${scale(18)}px`}
              borderBottomWidth={`${scale(1)}px`}
              borderColor={colorPalette.darkRed}
              marginBottom={`${verticalScale(10)}px`}
            >
              Carro Deletado!
            </TextGeneral>
            <TextGeneral
              fontSize={`${scale(12)}px`}
              marginBottom={`${verticalScale(15)}px`}
            >
              O Carro foi deletado com Sucesso.
            </TextGeneral>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <TextGeneral
                fontSize={`${scale(16)}px`}
                fontColor={colorPalette.paleRed}
                fontWeight="bold"
                borderBottomWidth={`${scale(1)}px`}
                borderColor={colorPalette.paleRed}
              >
                Fechar
              </TextGeneral>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextGeneral
              fontSize={`${scale(16)}px`}
              borderBottomWidth={`${scale(1)}px`}
              borderColor={colorPalette.darkRed}
              marginBottom={`${verticalScale(10)}px`}
            >
              Deletar Carro Existente
            </TextGeneral>
            <TextGeneral
              fontSize={`${scale(12)}px`}
              marginBottom={`${verticalScale(30)}px`}
            >
              Você tem certeza que deseja Deletar o Carro
              <TextGeneral
                fontColor={colorPalette.paleRed}
                borderBottomWidth={`${scale(1)}px`}
                borderColor={colorPalette.paleRed}
                textTransform="capitalize"
              >{` ${title} (${age})`}</TextGeneral>
              ?
            </TextGeneral>
            <ButtonDefault
              onButtonPress={() => deleteCar()}
              textInButton="DELETAR"
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
          </>
        )}
      </ModalView>
    </Modal>
  );
}
