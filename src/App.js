import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Spinner } from './components/common';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedIn: null };

    firebase.initializeApp({
      apiKey: 'AIzaSyBP3qaxCCquSmECT6mR14G1BzLxuFVK-r0',
      authDomain: 'auth-9dcbd.firebaseapp.com',
      databaseURL: 'https://auth-9dcbd.firebaseio.com',
      projectId: 'auth-9dcbd',
      storageBucket: 'auth-9dcbd.appspot.com',
      messagingSenderId: '484073493773'
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: user !== null });
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner style={{ alignSelf: 'center' }} size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
