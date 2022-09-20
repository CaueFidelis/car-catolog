import axios from 'axios';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';
import { CardCar } from '../../components/CardCar';
import { ContainerMessageInCenter } from '../../components/ContainerMessageInCenter';
import { FloatButtonAddCar } from '../../components/FloatButtonAddCar';
import { HeaderWithText } from '../../components/HeaderWithText';
import { TextGeneral } from '../../components/TextGeneral';
import { TextWithTouchable } from '../../components/TextWithTouchable';
import { colorPalette } from '../../utils/colorPalette';

export interface CarProps {
  id: string;
  title: string;
  brand: string;
  price: string;
  age: number;
}

export function MyCars() {
  const [myCars, setMyCars] = useState<Array<CarProps>>([]);
  const [showForm, setShowForm] = useState(false);

  async function addCar({ title, brand, price, age }: CarProps) {
    try {
      const dataCar = {
        title,
        brand,
        price,
        age,
      };

      const teste = await axios.post(
        'http://api-test.bhut.com.br:3000/api/cars',
        dataCar,
      );
      setMyCars([...myCars, teste.data._id]);
      console.log(teste.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderWithText title="Seus Carros" />
      {myCars.length > 0 ? (
        <FlatList data={myCars} renderItem={({ item }) => CardCar(item)} />
      ) : (
        <ContainerMessageInCenter>
          <TextGeneral
            fontSize={`${scale(18)}px`}
            fontWeight="bold"
            textAlign="center"
            marginBottom={`${verticalScale(15)}px`}
          >
            Parece que você não tem nenhum carro criado ainda...
          </TextGeneral>
          <TextWithTouchable
            onTouchablePress={() => {}}
            firstText="Que tal "
            touchableText="Criar"
            lastText=" o seu Agora!?"
            fontSize={`${scale(20)}px`}
            fontColorTouchableText={colorPalette.mediumRed}
          />
        </ContainerMessageInCenter>
      )}
      <FloatButtonAddCar showForm={showForm} setShowForm={setShowForm} />
    </SafeAreaView>
  );
}
