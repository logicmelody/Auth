import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button } from './common';

class LoginForm extends Component {

  render() {
    return (
      <Card>
        <CardSection>
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button onPress={() => console.log('Hello')}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
