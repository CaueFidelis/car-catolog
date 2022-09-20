import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaskedText } from 'react-native-mask-text';
import { scale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';
import { InputDefault } from '../InputDefault';
import { InputDefaultMasked } from '../InputDefaultMasked';
import { RowLabelAndText } from '../InputWithLabel/styles';
import { LabelForm } from '../LabelForm';
import { TextGeneral } from '../TextGeneral';

interface InputMaskedWithLabelProps {
  name: string;
  label: string;
  error: any;
  value?: string | undefined;
  defaultValue?: string | number | undefined;
  inputToUpdate: boolean;
  hasMask: boolean;
  typeMask: string;
  optionsMask: object;
  isNumber?: boolean;
  maxLength?: number;
  placeholder: string;
  setFieldValue: (field: string, value: any) => void;
  handleChange: (e: string) => void;
}

export function InputMaskedWithLabel({
  name,
  label,
  error,
  value,
  defaultValue,
  inputToUpdate,
  hasMask,
  typeMask,
  optionsMask,
  isNumber,
  maxLength,
  placeholder,
  handleChange,
  setFieldValue,
}: InputMaskedWithLabelProps) {
  const [valueToUpdate, setValueToUpdate] = useState(
    inputToUpdate ? true : false,
  );
  return (
    <>
      {valueToUpdate ? (
        <RowLabelAndText>
          <LabelForm>{label}</LabelForm>
          <TouchableOpacity
            onPress={() => {
              setValueToUpdate(!valueToUpdate);
            }}
          >
            <TextGeneral
              fontSize={`${scale(10)}px`}
              fontColor={colorPalette.paleRed}
              borderBottomWidth={`${scale(1)}px`}
              borderColor={colorPalette.paleRed}
              alignSelf="flex-end"
            >
              Editar
            </TextGeneral>
          </TouchableOpacity>
        </RowLabelAndText>
      ) : (
        <>
          <RowLabelAndText>
            <LabelForm>{label}</LabelForm>
            <TextGeneral
              fontSize={`${scale(9)}px`}
              fontColor={colorPalette.paleRed}
              alignSelf="flex-end"
            >
              {error}
            </TextGeneral>
          </RowLabelAndText>
        </>
      )}
      <InputDefaultMasked
        name={name}
        value={value}
        keyboardType="numeric"
        maxLength={maxLength}
        error={error}
        type={typeMask}
        onChangeText={(value: any) => {
          setFieldValue(
            name,
            value.replace(/\$|\s|\.|[A-Z]/g, '').replace(',', '.'),
          );
        }}
        options={optionsMask}
        editable={!valueToUpdate}
        isEditable={!valueToUpdate}
        placeholder={placeholder}
      />
    </>
  );
}
