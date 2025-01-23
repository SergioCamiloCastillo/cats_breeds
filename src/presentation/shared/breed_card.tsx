import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {BreedEntity} from '../../domain/entities/breed_entity';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated from 'react-native-reanimated';

interface BreedCardProps {
  breed: BreedEntity;
  onPress: () => void;
}
export const BreedCard: React.FC<BreedCardProps> = ({breed, onPress}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.breed_name}>{breed.name}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.word_more}>Más...</Text>
        </TouchableOpacity>
      </View>
      <Animated.Image sharedTransitionTag={`sharedTag${breed.id}`} source={{uri: breed.image?.url}} style={styles.image} />
      <View style={styles.footer}>
        <View>
          <View style={styles.label_icon}>
            <Icon name="map-marker" size={20} />
            <Text style={styles.label}>&nbsp;Pais de origen:</Text>
          </View>

          <Text style={styles.words_footer}>{breed.origin}</Text>
        </View>
        <View>
          <View style={styles.label_icon}>
            <Icon name="brain" size={20} />
            <Text style={styles.label}>Inteligencia:</Text>
          </View>

          <Text style={styles.words_footer}>{breed.intelligence}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {fontWeight: '600'},
  label_icon: {flexDirection: 'row', alignItems: 'center'},
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  intelligence: {fontSize: 14, color: '#555'},
  footer: {flexDirection: 'row', justifyContent: 'space-between'},
  breed_name: {fontSize: 18, fontWeight: 'bold', fontFamily:'Poppins-Bold'},
  word_more: {color: '#007BFF', fontSize: 16},
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 210,
    borderRadius: 10,
    marginBottom: 10,
  },
  words_footer: {fontSize: 14, color: '#555'},
});
