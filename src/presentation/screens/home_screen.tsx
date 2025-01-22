import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {fetchBreeds} from '../store/breed_slice';

export const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {breeds, loading} = useSelector((state: RootState) => state.breeds);
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);
  const filteredBreeds = breeds.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  console.log('elll=>', filteredBreeds);
  if (loading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input_search}
        placeholder="Buscar tipos de gatos..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredBreeds}
        keyExtractor={index => index.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{uri: item.image?.url}} style={styles.image} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
});
