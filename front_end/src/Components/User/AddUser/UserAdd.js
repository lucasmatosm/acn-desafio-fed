import React, { Component } from 'react';
import { InputGroup, Input, Container, Button, Label } from 'reactstrap';
import { connect } from 'react-redux';



 class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                age: '',
                cpf: '',
                email: '',
                fullName: '',
                phone: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getUser = this.getUser.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentWillMount() {
        if (this.props.props.match.params.id) {
            this.getUser(this.props.props.match.params.id)
        }
    }

    changePage() {
        this.props.props.history.push('/')
    }

    handleChange({ target: { name, value } }) {
        let { userData } = this.state
        userData[name] = value
        this.setState({ userData })
    }

    registerUser() {
        if (this.props.props.match.params.id) {
            this.updateUser(this.props.props.match.params.id)
        } else {
            let { userData } = this.state
            fetch('http://18.228.227.88:4000/api/client', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                this.props.props.history.push('/')
            })
        }

    }

    getUser(id) {
        fetch(`http://18.228.227.88:4000/api/client/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ userData: data })
            })
    }

    updateUser(id) {
        let { userData } = this.state
        fetch(`http://18.228.227.88:4000/api/client/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            this.props.props.history.push('/')
        })
    }


    render() {
        const { userData: { fullName, cpf, email, phone, age } } = this.state
        const {props: {match: {params: {id}} }}  = this.props;
        const {newValue} = this.props;
        return (
            <Container>
                <InputGroup>
                    <div className="row">
                        <div className="col-12">
                            <Label className="labelForm" for="fullName">Nome Completo</Label>
                            <Input className="addInput" disabled={newValue === 'f' && id} value={fullName} id="fullName" name="fullName" onChange={this.handleChange} />
                        </div>
                        <div className="col-6">
                            <Label className="labelForm" for="age">Idade</Label>
                            <Input className="addInput" disabled={newValue === 'f' && id} value={age} id="age" name="age" onChange={this.handleChange} />

                        </div>
                        <div className="col-6">
                            <Label className="labelForm" for="CPF">CPF</Label>
                            <Input className="addInput" disabled={newValue === 'f' && id} value={cpf} id="cpf" name="cpf" onChange={this.handleChange} />

                        </div>
                        <div className="col-12">
                            <Label className="labelForm" for="phone">Telefone</Label>
                            <Input className="addInput" disabled={newValue === 'f' && id} value={phone} id="phone" name="phone" onChange={this.handleChange} />
                        </div>

                        <div className="col-12">
                            <Label className="labelForm" for="email">Email</Label>
                            <Input className="addInput" disabled={newValue === 'f' && id} value={email} id="email" type="email" name="email" onChange={this.handleChange} />

                        </div>

                    </div>
                </InputGroup>
                <div className="create-buttons">
                    <Button onClick={this.changePage} color="white">Cancelar</Button>
                    <Button className="save-button" color="primary" onClick={this.registerUser}>Salvar</Button>
                </div>

            </Container>
        );
    }
}

const mapStateToProps = store => ({
    newValue: store.switchState.newValue
});

export default connect(mapStateToProps)(UserAdd);