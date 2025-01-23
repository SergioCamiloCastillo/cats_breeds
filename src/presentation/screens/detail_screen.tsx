import {useEffect} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';

const maxHeight = Dimensions.get('window').height;
export const DetailScreen = ({route, navigation}: any) => {
  const {breed, tagName} = route.params;
  useEffect(() => {
    navigation.setOptions({title: breed.name});
  }, [breed.name, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Animated.Image sharedTransitionTag={`sharedTag${breed.id}`} source={{uri: breed.image?.url}} style={styles.image} />
      </View>
      <ScrollView contentContainerStyle={styles.container_info}>
        <Text style={styles.title}>{breed.name}</Text>
        <View style={styles.info_row}>
          <View style={styles.label_icon}>
            <Icon name="map-marker" size={20} />
            <Text style={styles.label}>&nbsp;Origen:</Text>
          </View>

          <Text>{breed.origin}</Text>
        </View>
        <View style={styles.info_row}>
          <View style={styles.label_icon}>
            <Icon name="brain" size={20} />
            <Text style={styles.label}>&nbsp;Inteligencia:</Text>
          </View>

          <Text>{breed.intelligence}</Text>
        </View>
        <View style={styles.info_row}>
          <View style={styles.label_icon}>
            <Icon name="eye" size={20} />
            <Text style={styles.label}>&nbsp;Adaptabilidad:</Text>
          </View>

          <Text>{breed.adaptability}</Text>
        </View>
        <View style={styles.info_row}>
          <View style={styles.label_icon}>
            <Icon name="cat" size={20} />
            <Text style={styles.label}>&nbsp;Esperanza de vida:</Text>
          </View>

          <Text>{breed.life_span} años</Text>
        </View>
        <Text style={styles.description}>{breed.description}</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {width: '100%', height: '100%', marginBottom: 10},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10, fontFamily:'Poppins-Bold'},
  container: {flex: 1},
  value: {fontSize: 16, color: '#333'},
  label: {fontSize: 16, fontWeight: '600', color: '#555'},
  container_info: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  label_icon: {flexDirection: 'row', alignItems: 'center'},

  image_container: {
    height: maxHeight * 0.4,
    backgroundColor: 'black',
  },
  info_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  description: {fontSize: 16, color: '#666', marginTop: 20, lineHeight: 22},
});
