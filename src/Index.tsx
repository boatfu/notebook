import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Note from './components/Note';

const Stack = createStackNavigator();
export default class Index extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Note"
            component={Note}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#eee'
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
