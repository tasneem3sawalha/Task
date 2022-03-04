// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Payment from './Payment';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


function LogoTitle() {
  return (
  <View>
    <LinearGradient 
      colors={['red', 'yellow']} 
      start={{ x: 0,  y: 0 }} 
          end={{ x: '100%', y: '100%' }}
          style={{  width: '100%', height: '100%',  } }>
    <AntDesign name="arrowleft" size={24} color="#ffffff" />
    
    </LinearGradient>
</View>

  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
         component={Payment} 
         options={{ headerTitle: (props) => <LogoTitle {...props} />,
         headerTintColor: '#fff',
         headerStyle: {
          backgroundColor: '#DE3163',  
        
        },
        }}
        
         
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






export default App;





