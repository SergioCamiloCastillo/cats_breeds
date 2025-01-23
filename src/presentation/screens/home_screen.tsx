import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchBreeds} from '../store/breed_slice';
import {BreedCard} from '../shared/breed_card';

export const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const {breeds, loading, error} = useSelector(
    (state: RootState) => state.breeds,
  );
  const [visibleBreeds, setVisibleBreeds] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const itemsPerPage = 10;
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);
  useEffect(() => {
    if (breeds.length > 0) {
      setVisibleBreeds(visibleBreeds.slice(0, itemsPerPage));
    }
  }, [breeds]);
  const filteredBreeds = breeds.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  const getMoreBreeds = () => {
    if (isEnd || loading) return;
    const nextPage = page + 1;
    const startIndex = page * itemsPerPage;
    const endIndex = nextPage + itemsPerPage;
    if (startIndex >= breeds.length) {
      setIsEnd(true);
      return;
    }
    setVisibleBreeds(prevBreeds => [
      ...prevBreeds,
      ...breeds.slice(startIndex, endIndex),
    ]);
    setPage(nextPage);
  };
  console.log('elll=>', filteredBreeds);
  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }
  if (!breeds.length) {
    return <Text>No hay razas de gatos para mostrar</Text>;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input_search}
        placeholder="Buscar raza de gatos..."
        value={search}
        onChangeText={word => setSearch(word)}
        inlineImageLeft="search_icon"
      />
      {filteredBreeds.length === 0 ? (
        <Text style={styles.no_more_kind_cats}>
          No se encontraron razas de gatos
        </Text>
      ) : (
        <FlatList
          data={filteredBreeds}
          keyExtractor={index => index.id}
          renderItem={({item}) => (
            <BreedCard
              breed={item}
              onPress={() =>
                navigation.navigate('Detail', {
                  breed: item,
                  tagName: `sharedTag`,
                })
              }
            />
          )}
          onEndReached={getMoreBreeds}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isEnd ? (
              <Text style={styles.no_more_kind_cats}>
                No hay más razas de gatos por mostrar
              </Text>
            ) : (
              <ActivityIndicator size="large" color="#000" />
            )
          }
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  input_search: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {width: 50, height: 50, marginRight: 10, borderRadius: 25},
  title: {fontSize: 18},
  no_more_kind_cats: {textAlign: 'center', color: '#555'},
});
