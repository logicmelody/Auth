import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {

  constructor(props) {
    super(props);
    firebase.initializeApp({
      apiKey: 'AIzaSyBP3qaxCCquSmECT6mR14G1BzLxuFVK-r0',
      authDomain: 'auth-9dcbd.firebaseapp.com',
      databaseURL: 'https://auth-9dcbd.firebaseio.com',
      projectId: 'auth-9dcbd',
      storageBucket: 'auth-9dcbd.appspot.com',
      messagingSenderId: '484073493773'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
