import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { CardCar, CardCarProps } from '../../components/CardCar';
import { ContainerMessageInCenter } from '../../components/ContainerMessageInCenter';
import { HeaderWithText } from '../../components/HeaderWithText';
import { LoadingComponent } from '../../components/LoadingComponent';
import { TextGeneral } from '../../components/TextGeneral';
import { TextWithTouchable } from '../../components/TextWithTouchable';
import { colorPalette } from '../../utils/colorPalette';

export function Catalog() {
  const [cars, setCars] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getCars() {
    refresh && setIsLoading(true);
    try {
      const cars2 = await axios.get(
        'http://api-test.bhut.com.br:3000/api/cars',
      );
      setIsLoading(false);
      setCars(cars2.data);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  async function reloadScreen() {
    setRefresh(true);
    setCars([]);
    await getCars();

    setTimeout(() => setRefresh(false), 1000);
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <LoadingComponent visible={isLoading} />
      <HeaderWithText title="Qual carro você prefere?" />
      {cars.length > 0 && (
        <FlatList
          data={cars}
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
              onSubmit={() => getCars()}
            />
          )}
        />
      )}
      {isLoading === false && refresh === false && cars.length <= 0 && (
        <ContainerMessageInCenter
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => reloadScreen()}
            />
          }
        >
          <TextGeneral
            fontSize={`${scale(18)}px`}
            fontWeight="bold"
            textAlign="center"
            marginBottom={`${verticalScale(15)}px`}
          >
            Parece que não tem nenhum carro no catálogo...
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
    </SafeAreaView>
  );
}
