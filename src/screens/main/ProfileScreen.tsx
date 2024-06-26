import {StyleSheet, View} from 'react-native';
import React from 'react';
import {UserInfoCard} from '../../components/UserInfoCard';
import {useUserProfileImageFetch} from '../../utils/useUserProfileImageFetch';
import {ErrorMessage} from '../../theme/infoMessages';
import {colors} from '../../theme/constants';
import {CustomButton} from '../../components/CustomButton';

export const ProfileScreen = () => {
  const {response, isError} = useUserProfileImageFetch('2');

  if (!response || isError) {
    return <ErrorMessage message={'Something went wrong'} />;
  }

  return (
    <View style={styles.container}>
      <UserInfoCard
        imageUrl={response.data.avatar}
        email={'test'}
        username={response.data?.first_name}
      />

      <CustomButton text={'Log Out'} onSubmit={() => console.log('logOut')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
});
