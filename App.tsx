import {Text} from 'react-native';
import {store} from './src/presentation/store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/presentation/screens/home_screen';
import {DetailScreen} from './src/presentation/screens/detail_screen';
import {useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SplashGifScreen from './src/presentation/screens/splash_screen';

const Stack = createNativeStackNavigator();
const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  if (isSplashVisible) {
    return <SplashGifScreen onFinish={() => setIsSplashVisible(false)} />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Cat breeds', headerTitleAlign: 'center'}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{headerTitleAlign: 'center'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
