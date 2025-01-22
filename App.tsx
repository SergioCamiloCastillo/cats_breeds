import {Text} from 'react-native';
import {store} from './src/presentation/store/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/presentation/screens/home_screen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen
            name="home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
