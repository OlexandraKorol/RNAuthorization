import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ImageItem} from '../../components/ImageItem';
import {useDataFetch} from '../../utils/useDataFetch';
import {Loading} from '../../theme/infoMessages';

export const FeedScreen = () => {
  const {response, isLoading, isError, refetch} = useDataFetch('list');
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

  if (isLoading) {
    return <Loading />;
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
    marginBottom: 35,
  },
});
