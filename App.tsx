/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import RootNavigation from './app/navigation/RootNavigation';
import {Provider} from 'react-redux';
import {persistor, store} from './app/store';
import {PersistGate} from 'redux-persist/integration/react';
import Spinner from './app/components/Spinner';

const App = () => {
  return (
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </PersistGate>
  );
};

export default App;


//
// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
//
// function HomeScreen() {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Home Screen</Text>
//         </View>
//     );
// }
//
// const Stack = createStackNavigator();
//
// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={HomeScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
//
// export default App;
