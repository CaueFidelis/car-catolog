import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';
import { CardCar, CardCarProps } from '../../components/CardCar';
import { ContainerMessageInCenter } from '../../components/ContainerMessageInCenter';
import { FloatButtonAddCar } from '../../components/FloatButtonAddCar';
import { HeaderWithText } from '../../components/HeaderWithText';
import { LoadingComponent } from '../../components/LoadingComponent';
import { ModalCreateCar } from '../../components/ModalCreateCar';
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
  const [myCars, setMyCars] = useState<any>([]);
  const [idMyCars, setIdMyCars] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  async function reloadScreen() {
    setRefresh(true);
    await getMyCars();

    setTimeout(() => setRefresh(false), 1000);
  }

  function deleteCacheMyCars(idCar: string) {
    setIdMyCars(
      idMyCars.filter(function (idMyCar) {
        return idMyCar !== idCar;
      }),
    );
    setMyCars(myCars.filter((car: { _id: string }) => car._id !== idCar));
  }

  async function getMyCars() {
    setIsLoading(true);
    try {
      for (const idCar of idMyCars) {
        const myCreatedCar = await axios.get(
          `http://api-test.bhut.com.br:3000/api/cars/${idCar}`,
        );
        if (typeof myCreatedCar.data === 'string') {
          deleteCacheMyCars(idCar);
          return;
        }
        if (myCars.length <= 0) {
          setMyCars([...myCars, myCreatedCar.data]);
          setIsLoading(false);
          return;
        }
        if (
          !myCars.some(
            (car: { _id: string }) => car._id === myCreatedCar.data._id,
          )
        ) {
          setMyCars([...myCars, myCreatedCar.data]);
          setIsLoading(false);
          return;
        }
      }
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    getMyCars();
  }, [idMyCars]);

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
              price={item.price}
              setIsLoading={setIsLoading}
              onSubmit={() => getMyCars()}
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
      {showCreateModal && (
        <ModalCreateCar
          idMyCars={idMyCars}
          reloadScreen={() => getMyCars()}
          setIsLoading={setIsLoading}
          setIdMyCars={setIdMyCars}
          isModalVisible={showCreateModal}
          setIsModalVisible={setShowCreateModal}
        />
      )}
      <FloatButtonAddCar
        showForm={showCreateModal}
        setShowForm={setShowCreateModal}
      />
    </SafeAreaView>
  );
}
