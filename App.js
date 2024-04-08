import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tipicos from './Screens/Tipicos';
import DetalleTipico from './Screens/DetalleTipico';
import Sopas from './Screens/Sopas';
import DetalleSopa from './Screens/DetalleSopa';
import CarneMarisco from './Screens/CarneMarisco';
import DetalleCarneMarisco from './Screens/DetalleCarneMarisco';

export default function App() {
  const Tab = createBottomTabNavigator();
  
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Tipicos') {
            iconName = Platform.OS === 'ios' ? 'restaurant-outline' : 'restaurant';
          } else if (route.name === 'Sopas') {
            iconName = Platform.OS === 'ios' ? 'restaurant-outline' : 'restaurant';
          } else if (route.name === 'CarneMarisco') {
            iconName = Platform.OS === 'ios' ? 'restaurant-outline' : 'restaurant';
          }
          // Devolver el componente de icono correspondiente
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Tipicos" component={Tipicos} />
      <Tab.Screen name="DetalleTipico" component={DetalleTipico} />
      <Tab.Screen name="Sopas" component={Sopas} />
      <Tab.Screen name="DetalleSopa" component={DetalleSopa} />
      <Tab.Screen name="CarneMarisco" component={CarneMarisco} />
      <Tab.Screen name="DetalleCarneMarisco" component={DetalleCarneMarisco} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}