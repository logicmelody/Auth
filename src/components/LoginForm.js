import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  renderButton() {
    return this.state.loading ?
      <Spinner size='small' /> :
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </CardSection>;

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
