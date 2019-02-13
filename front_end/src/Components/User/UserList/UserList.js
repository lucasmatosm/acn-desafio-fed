import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { } from 'reactstrap';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        this.getList = this.getList.bind(this);
    }

    componentWillMount() {

        this.getList();
    }


    getList() {
        fetch('http://localhost:4000/api/client/')
            .then(response => response.json())
            .then(data => this.setState({ users: data }));
    }


    render() {
        return (
            <div className="row list">
            {this.state.users.map((key) =>
                    <React.Fragment>
                    <div className="col-8">
                {key.fullName}
                <span className="userCpf">{key.cpf}</span>
                </div>
                <div className="col-2">TESTE</div>
                <div className="col-2">TESTE</div>
                </React.Fragment>
    )}
    </div>
    );
    }
}