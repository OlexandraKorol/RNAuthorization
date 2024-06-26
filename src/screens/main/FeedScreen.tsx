import {FlatList, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ImageItem} from '../../components/ImageItem';
import {useDataImageItemFetch} from '../../utils/useDataImageItemFetch';
import {ErrorMessage} from '../../theme/infoMessages';
import {colors} from '../../theme/constants';

export const FeedScreen = () => {
  const {response, refetch, isError} = useDataImageItemFetch('list');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  }, [refetch]);

  if (!response || isError) {
    return <ErrorMessage message={'Something went wrong'} />;
  }

  return (
    <View>
      <FlatList
        data={response}
        keyExtractor={item => item.id.toString()}
        style={styles.container}
        renderItem={({item}) => (
          <ImageItem source={item.download_url} author={item.author} />
        )}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 35,
    backgroundColor: colors.white,
  },
});
