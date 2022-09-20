import { Ionicons } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from 'react';
import { TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';
import { colorPalette } from '../../utils/colorPalette';
import { ContainerInputSearch, InputDefaultSearch } from './styles';

interface InputSearchProps {
  name: string;
  value: string;
  defaultValue: string;
  placeholder: string;
  setTextSearch: Dispatch<SetStateAction<string>>;
  setOnSearching: Dispatch<SetStateAction<boolean>>;
  onChangeText: (textSearch: string) => void;
}

export function InputSearch({
  name,
  value,
  defaultValue,
  placeholder,
  setTextSearch,
  setOnSearching,
  onChangeText,
}: InputSearchProps) {
  return (
    <ContainerInputSearch>
      <Ionicons
        name="search"
        size={scale(20)}
        color={colorPalette.darkRed}
        style={{ width: '10%' }}
      />
      <InputDefaultSearch
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        placeholder={placeholder}
        textAlign={'center'}
      />
      {value.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            setOnSearching(false);
            setTextSearch('');
          }}
        >
          <Ionicons
            name="close-circle"
            size={scale(20)}
            color={colorPalette.darkRed}
          />
        </TouchableOpacity>
      )}
    </ContainerInputSearch>
  );
}
