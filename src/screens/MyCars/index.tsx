import axios from 'axios';
import { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';
import { CardCar, CardCarProps } from '../../components/CardCar';
import { ContainerMessageInCenter } from '../../components/ContainerMessageInCenter';
import { FloatButtonAddCar } from '../../components/FloatButtonAddCar';
import { HeaderWithText } from '../../components/HeaderWithText';
import { LoadingComponent } from '../../components/LoadingComponent';
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
  const [myCars, setMyCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showForm, setShowForm] = useState(false);

  async function addCar({ title, brand, price, age }: CarProps) {
    try {
      const dataCar = {
        title,
        brand,
        price,
        age,
      };

      const myNewCar = await axios.post(
        'http://api-test.bhut.com.br:3000/api/cars',
        dataCar,
      );
      setMyCars([...myCars, myNewCar.data._id]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMyCars() {}

  async function reloadScreen() {
    setRefresh(true);
    setMyCars([]);
    await getMyCars();

    setTimeout(() => setRefresh(false), 1000);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <LoadingComponent visible={isLoading} />
      <HeaderWithText title="Seus Carros" />
      {myCars.length > 0 ? (
        <FlatList
          data={myCars}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => reloadScreen()}
            />
          }
          renderItem={({ item }: { item: CardCarProps }) => (
            <CardCar
              _id={item._id}
              title={item.title}
              brand={item.brand}
              age={item.age}
              price={item.price
                .replace(/[A-Za-z][^\w\s]/gi, '')
                .replace(/,/g, '.')}
              setIsLoading={setIsLoading}
              onSubmit={() => {}}
            />
          )}
        />
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
