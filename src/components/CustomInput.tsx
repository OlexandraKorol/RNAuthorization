import React from 'react';
import {FieldError} from 'react-hook-form';
import {
  NativeSyntheticEvent,
  Text,
  TextInputFocusEventData,
} from 'react-native';
import {TextInput} from 'react-native-paper';

interface CustomInputProps {
  value: string;
  onChange: (text: string) => void;
  error: FieldError | undefined;
  onBlur:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

export const CustomInput = ({
  value,
  onChange,
  onBlur,
  error,
}: CustomInputProps) => {
  return (
    <>
      <TextInput
        label="Email"
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        mode="outlined"
      />
      {error && <Text> {error.message} </Text>}
    </>
  );
};
