import React, { Component } from 'react';
import { Container } from 'reactstrap';
import UserList from '../../Components/User/UserList/UserList';


export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <UserList props={this.props}></UserList>
      </Container>
    );
  }
}