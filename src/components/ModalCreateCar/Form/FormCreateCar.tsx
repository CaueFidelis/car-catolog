import axios from 'axios';
import { useFormik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { colorPalette } from '../../../utils/colorPalette';
import { ButtonDefault } from '../../ButtonDefault';
import { InputMaskedWithLabel } from '../../InputMaskedWithLabel';
import { InputWithLabel } from '../../InputWithLabel';
import { TextGeneral } from '../../TextGeneral';
import { schemaCreateCar } from './schemaCreateCar';

interface CreateCarProps {
  title: string;
  brand: string;
  age: number;
  price: string;
}

interface FormCreateCarProps {
  idMyCars: Array<string>;
  isModalVisible: boolean;
  reloadScreen: () => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIdMyCars: Dispatch<SetStateAction<any>>;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

export function FormCreateCar({
  idMyCars,
  isModalVisible,
  reloadScreen,
  setIsLoading,
  setIdMyCars,
  setIsModalVisible,
}: FormCreateCarProps) {
  const [onCreated, setOnCreated] = useState(false);

  async function createCar({ title, brand, age, price }: CreateCarProps) {
    setIsLoading(true);
    try {
      const dataCar = {
        title,
        brand,
        price,
        age,
      };

      const idNewCar = await axios.post(
        'http://api-test.bhut.com.br:3000/api/cars',
        dataCar,
      );
      setIdMyCars([...idMyCars, idNewCar.data._id]);
      setIsLoading(false);
      setOnCreated(true);
      reloadScreen();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  const { values, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: { title: '', brand: '', age: 0, price: '' },
      onSubmit: (values) => createCar(values),
      validationSchema: schemaCreateCar,
    });

  return (
    <>
      {onCreated ? (
        <>
          <TextGeneral
            fontSize={`${scale(18)}px`}
            borderBottomWidth={`${scale(1)}px`}
            borderColor={colorPalette.darkRed}
            marginBottom={`${verticalScale(10)}px`}
          >
            Carro Criado!
          </TextGeneral>
          <TextGeneral
            fontSize={`${scale(12)}px`}
            marginBottom={`${verticalScale(15)}px`}
          >
            O Carro foi criado com Sucesso.
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
            marginBottom={`${verticalScale(25)}px`}
          >
            Dê uma diferenciada!
          </TextGeneral>
          <InputWithLabel
            name="title"
            label="Modelo do Carro*"
            error={errors.title}
            value={values.title}
            defaultValue={values.title}
            placeholder="Carro Teste"
            setFieldValue={setFieldValue}
            handleChange={handleChange}
            inputToUpdate={false}
          />

          <InputWithLabel
            name="brand"
            label="Marca*"
            error={errors.brand}
            value={values.brand}
            defaultValue={values.brand}
            placeholder="Ferrari"
            setFieldValue={setFieldValue}
            handleChange={handleChange}
            inputToUpdate={false}
          />

          <InputWithLabel
            name="age"
            label="Ano*"
            error={errors.age}
            value={values.age}
            defaultValue={values.age}
            maxLength={4}
            isNumber={true}
            placeholder="2022"
            setFieldValue={setFieldValue}
            handleChange={handleChange}
            inputToUpdate={false}
          />

          <InputMaskedWithLabel
            name="price"
            label="Preço*"
            error={errors.price}
            value={values.price}
            defaultValue={values.price}
            placeholder="50.000,00"
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            typeMask="currency"
            optionsMask={{
              prefix: 'R$ ',
              decimalSeparator: ',',
              groupSeparator: '.',
              precision: 2,
            }}
            hasMask
            isNumber
            inputToUpdate={false}
          />

          <ButtonDefault
            onButtonPress={() => handleSubmit()}
            textInButton="CRIAR"
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
    </>
  );
}
