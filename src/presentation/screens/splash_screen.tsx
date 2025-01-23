import {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface SplashScreenProps {
  onFinish: () => void;
}
const SplashGifScreen: React.FC<SplashScreenProps> = ({onFinish}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.gif}
        source={require('../../../assets/splash_screen/cat.gif')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};
export default SplashGifScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  gif: {
    width: 200,
    height: 200,
  },
});
