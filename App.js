import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native';
import Details from './components/details/Details';
import Movies from './components/movies/Movies';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={Movies}></Stack.Screen>
        <Stack.Screen name ="Details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
