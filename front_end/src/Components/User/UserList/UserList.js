import React, { Component } from 'react';
import garbageIcon from '../../../public/img/garbage.svg'
import infoIcon from '../../../public/img/information.svg'
import alertIcon from '../../../public/img/alert.png'
import { InputGroup, Input, InputGroupAddon } from 'reactstrap';
import Pagination from '../../Pagination/Pagination'

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.userTempList = []
        this.originalList = []
        this.state = {
            users: []
        }

        this.getList = this.getList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleInputFunction = this.handleInputFunction.bind(this);
    }

    componentDidMount() {
        this.getList();
    }

    handleInputFunction(e) {
        const { users } = this.state;
        if (e !== users) {
            this.setState({ users: e });
            this.userTempList = e;
        }
    }


    getList() {
        fetch('http://18.228.227.88:4000/api/client/')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
                this.userTempList = this.state.users;
            }

            );
    }

    deletUser(id) {
        fetch(`http://18.228.227.88:4000/api/client/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            this.state.users.splice(this.state.users.indexOf(this.state.users.filter(key => key._id === id)[0]), 1)
            this.setState({ users: this.state.users })
        })
    }

    infoUser(id) {
        this.props.props.history.push(`/addUser/${id}`)
    }

    handleChange({ target: { name, value } }) {

        if (this.userTempList.filter(key => key.fullName.toLowerCase().includes(value.toLowerCase())).length
            || this.userTempList.filter(key => key.cpf.toString().includes(value)).length) {

            let array = this.userTempList.filter(key => key.fullName.toLowerCase().includes(value.toLowerCase()))
                .concat(this.userTempList.filter(key => key.cpf.toString().includes(value)))

            let uniqueProducts = array.filter(function (elem, i, array) {
                return array.indexOf(elem) === i;
            });

            this.setState({ users: uniqueProducts })
        } else if (!value.length) {
            this.setState({ users: this.userTempList })
        }
    }


    render() {
        return (
            <div>
                <InputGroup>
                    <Input className="searchClient" onChange={this.handleChange} placeholder="Busca por nome e CPF" />
                    <InputGroupAddon addonType="append">
                        {/* <Button color="secondary">To the Right!</Button> */}
                    </InputGroupAddon>
                </InputGroup>

                <div className="row list">

                    {this.state.users.map((user) =>
                        <React.Fragment key={user._id}>
                            <div className="col-8">
                                {user.fullName}
                                <span className="userCpf">{user.cpf}</span>
                            </div>
                            <div className="col-2">
                                <img className="actionImg" onClick={() => this.infoUser(user._id)} src={infoIcon} alt="infoUser"></img></div>
                            <div className="col-2"><img className="actionImg" onClick={() => this.deletUser(user._id)} src={garbageIcon} alt="deletUser"></img></div>
                        </React.Fragment>
                    )}
                </div>
                {this.state.users.length !== 0 ? "" :
                    <div  className="col-4 msgError">
                        <span>Nenhum usuário cadastrado</span>
                        <img className="alertImg" src={alertIcon} alt="EmprtyUsers"></img>
                    </div>

                }

                <Pagination userList={this.state.users} ourInputFunction={this.handleInputFunction} ></Pagination>

                
            </div>

        );
    }
}