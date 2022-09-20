import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { CardCar } from '../../components/CardCar';
import { HeaderWithText } from '../../components/HeaderWithText';
import { CarProps } from '../MyCars';

export function Catalog() {
  const [cars, setCars] = useState([]);

  async function editCar({ id, title, brand, price, age }: CarProps) {
    try {
      const dataToUpdate = {
        title,
        brand,
        price,
        age,
      };
      const teste2 = await axios.put(
        `http://api-test.bhut.com.br:3000/api/cars/${id}`,
        dataToUpdate,
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function getCars() {
    try {
      const cars2 = await axios.get(
        'http://api-test.bhut.com.br:3000/api/cars',
      );
      setCars(cars2.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderWithText title="Qual carro você prefere?" />
      <FlatList data={cars} renderItem={({ item }) => CardCar(item)} />
    </SafeAreaView>
  );
}
