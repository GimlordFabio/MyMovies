import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler'
import { StyleSheet, Switch } from 'react-native';
import Details from './components/details/Details';
import Movies from './components/movies/Movies';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { deleteDatabase, loadDatabase } from './components/dataBase/Database';


const Stack = createStackNavigator()

export default function App() {

  useEffect(() => {

    
      loadDatabase()
      .then(
        () => console.log("db loaded")
      )
      .catch(
        ()=> console.log(err)
      )

  },[])


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Popular Movies" component={Movies}></Stack.Screen>
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
