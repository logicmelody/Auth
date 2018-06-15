import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChengeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            secureTextEntry
            value={this.state.password}
            onChengeText={password => this.setState({ password })}
          />
        </CardSection>;

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
