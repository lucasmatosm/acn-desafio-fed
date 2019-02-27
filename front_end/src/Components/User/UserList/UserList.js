import React, { Component } from 'react';
import garbageIcon from '../../../public/img/garbage.svg'
import infoIcon from '../../../public/img/information.svg'

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

    deletUser(id) {
        fetch(`http://localhost:4000/api/client/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            this.state.users.splice(this.state.users.indexOf(this.state.users.filter(key => key._id === id)[0]), 1)

            this.setState({ users: this.state.users })
        })
    }

    infoUser(id){
        this.props.props.history.push(`/addUser/${id}`)
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
                        <div className="col-2">
                            <img onClick={() => this.infoUser(key._id)} src={infoIcon} alt="infoUser"></img></div>
                        <div className="col-2"><img onClick={() => this.deletUser(key._id)} src={garbageIcon} alt="deletUser"></img></div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}