import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '' };
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
