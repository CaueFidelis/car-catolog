import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';
import { InputDefault } from '../InputDefault';
import { InputDefaultMasked } from '../InputDefaultMasked';
import { LabelForm } from '../LabelForm';
import { TextGeneral } from '../TextGeneral';
import { RowLabelAndText } from './styles';

interface InputWithLabelProps {
  name: string;
  label: string;
  error: any;
  value?: string | number;
  defaultValue?: string | number | undefined;
  inputToUpdate: boolean;
  isNumber?: boolean;
  maxLength?: number;
  placeholder: string;
  borderColor?: string;
  setFieldValue: (field: string, value: any) => void;
  handleChange: (e: string) => void;
}

export function InputWithLabel({
  name,
  label,
  error,
  value,
  defaultValue,
  inputToUpdate,
  isNumber,
  maxLength,
  placeholder,
  borderColor,
  handleChange,
  setFieldValue,
}: InputWithLabelProps) {
  const [valueToUpdate, setValueToUpdate] = useState(
    inputToUpdate ? true : false,
  );
  return (
    <>
      {valueToUpdate && value ? (
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
      <InputDefault
          name={name}
          value={value}
          borderColor={borderColor}
          keyboardType={isNumber ? 'numeric' : 'text'}
          maxLength={maxLength}
          error={error}
          defaultValue={defaultValue}
          onChangeText={handleChange(name)}
          editable={!valueToUpdate}
          isEditable={!valueToUpdate}
          placeholder={placeholder}
        />
    </>
  );
}
