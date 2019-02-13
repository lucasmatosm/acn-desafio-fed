import React, { Component } from 'react';
import { Container } from 'reactstrap';
import UserAdd from '../../Components/User/AddUser/UserAdd'


export default class UserScreen extends Component {
  render() {
    return (
        <Container>
          <UserAdd></UserAdd>
        </Container>
    );
  }
}