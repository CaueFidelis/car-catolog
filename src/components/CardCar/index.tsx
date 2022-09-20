import { TouchableOpacity, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { TextGeneral } from '../TextGeneral';
import { CardCarView, RowViewCardCar } from './styles';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { colorPalette } from '../../utils/colorPalette';
import { ModalDeleteCar } from '../ModalDeleteCar';
import { Dispatch, SetStateAction, useState } from 'react';
import { ModalUpdateCar } from '../ModalUpdateCar';

export interface CardCarProps {
  _id: string;
  title: string;
  brand: string;
  age: number;
  price: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
}

export function CardCar({
  _id,
  title,
  brand,
  age,
  price,
  setIsLoading,
  onSubmit,
}: CardCarProps) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const filtedPrice = parseFloat(price)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1.');
  return (
    <>
      <CardCarView>
        <View>
          <RowViewCardCar>
            <Ionicons
              name="car"
              size={scale(28)}
              color={colorPalette.darkRed}
            />
            <View style={{ marginLeft: scale(5) }}>
              <TextGeneral
                fontSize={`${scale(14)}px`}
                maxWidth={`${143}px`}
                textTransform="capitalize"
                fontWeight="bold"
                numberOfLines={2}
              >
                {title} ({age})
              </TextGeneral>
              <TextGeneral
                fontSize={`${scale(11)}px`}
                maxWidth={`${143}px`}
                textTransform="capitalize"
                numberOfLines={1}
              >
                {brand}
              </TextGeneral>
            </View>
          </RowViewCardCar>
          <TextGeneral fontSize={`${scale(18)}px`} fontWeight="bold">
            {filtedPrice === 'NaN' ? 'Valor Inválido' : `R$ ${filtedPrice}`}
          </TextGeneral>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
          <TouchableOpacity onPress={() => setShowUpdateModal(true)}>
            <FontAwesome5
              name="edit"
              size={scale(20)}
              color={colorPalette.mediumRed}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowDeleteModal(true)}
            style={{ marginLeft: scale(10) }}
          >
            <Ionicons
              name="md-trash"
              size={scale(20)}
              color={colorPalette.mediumRed}
            />
          </TouchableOpacity>
        </View>
      </CardCarView>

      {showUpdateModal && (
        <ModalUpdateCar
          id={_id}
          title={title}
          brand={brand}
          price={price}
          age={age}
          onSubmit={onSubmit}
          isModalVisible={showUpdateModal}
          setIsModalVisible={setShowUpdateModal}
        />
      )}

      {showDeleteModal && (
        <ModalDeleteCar
          _id={_id}
          title={title}
          age={age}
          onSubmit={onSubmit}
          setIsLoading={setIsLoading}
          isModalVisible={showDeleteModal}
          setIsModalVisible={setShowDeleteModal}
        />
      )}
    </>
  );
}
