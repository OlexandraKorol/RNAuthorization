import {Button, View} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {CustomInput} from '../../components/CustomInput';

export const LogInScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => console.log({data});

  console.log({errors});

  return (
    <View>
      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Username is required',
        }}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <CustomInput
              value={value}
              onChange={onChange}
              error={error}
              onBlur={onBlur}
            />
          </>
        )}
      />

      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Username is required',
        }}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <CustomInput
              value={value}
              onChange={onChange}
              error={error}
              onBlur={onBlur}
            />
          </>
        )}
      />

      <Button title="Log In" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

// const styles = StyleSheet.create({});
