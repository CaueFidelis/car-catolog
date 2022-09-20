import * as Yup from 'yup';

export const schemaCreateCar = Yup.object().shape({
  title: Yup.string().typeError('Valor Inválido'),
  brand: Yup.string().typeError('Valor Inválido'),
  age: Yup.number().typeError('Valor Inválido'),
  price: Yup.number()
    .min(0.01, 'Deve ser maior que zero')
    .typeError('Valor Inválido'),
});
