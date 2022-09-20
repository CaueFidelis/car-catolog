import axios from 'axios';
import { useFormik } from 'formik';
import { Dispatch, SetStateAction } from 'react';
import { ButtonDefault } from '../../ButtonDefault';
import { InputWithLabel } from '../../InputWithLabel';
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
      reloadScreen();
      setIsModalVisible(!isModalVisible);
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
      <InputWithLabel
        name="title"
        label="Modelo do Carro*"
        error={errors.title}
        value={values.title}
        defaultValue={values.title}
        placeholder="Carro Teste"
        setFieldValue={setFieldValue}
        handleChange={handleChange}
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
      />

      <InputWithLabel
        name="price"
        label="Preço*"
        error={errors.price}
        value={values.price}
        defaultValue={values.price}
        placeholder="50.000,00"
        isNumber
        setFieldValue={setFieldValue}
        handleChange={handleChange}
      />

      <ButtonDefault
        onButtonPress={() => handleSubmit()}
        textInButton="CRIAR"
      />
    </>
  );
}
