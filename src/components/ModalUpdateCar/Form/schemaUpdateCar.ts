import * as Yup from 'yup';

export const schemaUpdateCar = Yup.object().shape({
  title: Yup.string().typeError('Valor Inválido'),
  brand: Yup.string().typeError('Valor Inválido'),
  age: Yup.number().typeError('Valor Inválido'),
  price: Yup.number().typeError('Valor Inválido'),
});
