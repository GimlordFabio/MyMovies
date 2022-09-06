import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favs from './Favs';
import Recent from './Recent';

const Tab = createMaterialTopTabNavigator()

export default function Movies() {

    return(
        <Tab.Navigator>
            
          <Tab.Screen name="Recent" component={Recent}></Tab.Screen>
          <Tab.Screen name= "Favs" component={Favs}></Tab.Screen>
  
        </Tab.Navigator>
      )

}