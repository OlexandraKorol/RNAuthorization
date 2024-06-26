import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {CustomInput} from '../../components/CustomInput';
import {colors} from '../../theme/constants';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../components/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {CustomButton} from '../../components/CustomButton';

export const LogInScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => {
    console.log({data});

    if (errors) {
      navigation.navigate('MainStack');
    }
  };

  console.log({errors});
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Email is not valid',
                },
              }}
              render={({
                field: {value, onChange, onBlur},
                fieldState: {error},
              }) => (
                <CustomInput
                  value={value}
                  onChange={onChange}
                  error={error}
                  onBlur={onBlur}
                  label="Email"
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password length min 8 char',
                },
              }}
              render={({
                field: {value, onChange, onBlur},
                fieldState: {error},
              }) => (
                <CustomInput
                  value={value}
                  onChange={onChange}
                  error={error}
                  onBlur={onBlur}
                  label="Password"
                />
              )}
            />

            <CustomButton text={'Log In'} onSubmit={handleSubmit(onSubmit)} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  content: {},
});
