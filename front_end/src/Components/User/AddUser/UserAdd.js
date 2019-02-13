import React, { Component } from 'react';
import { InputGroup, Input, Container, Button, Label} from 'reactstrap';



export default class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getUser = this.getUser.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentWillMount() {

    }

    changePage() {
        console.log(this.props)
        //this.props.history.pop()
    }

    handleChange({ target: { name, value } }) {
        let { userData } = this.state
        userData[name] = value
        this.setState({ userData })
    }

    registerUser() {
        let { userData } = this.state
        fetch('http://localhost:4000/api/client', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        })

    }

    getUser() {
        // fetch(`http://localhost:4000/api/client/${id}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({ userData: data })
        //     })
    }

    updateUser () {
        // let { userData } = this.state
        // fetch(`http://localhost:4000/api/client/${id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify(userData),
        //     headers: { 'Content-Type': 'application/json' }
        // })
    }


    render() {
        const { userData : {fullName, cpf, email, phone, age} } = this.state
        return (
            <Container>
                <InputGroup>
                    <div className="row">
                        <div className="col-12">
                            <Label className="labelForm" for="fullName">Nome Completo</Label>
                            <Input className="addInput" value={fullName} id="fullName" name="fullName" onChange={this.handleChange} />
                        </div>
                        <div className="col-6">
                            <Label className="labelForm" for="age">Idade</Label>
                            <Input className="addInput" value={age} id="age" name="age" onChange={this.handleChange} />

                        </div>
                        <div className="col-6">
                            <Label className="labelForm" for="CPF">CPF</Label>
                            <Input className="addInput" value={cpf}  id="cpf" name="cpf" onChange={this.handleChange} />

                        </div>
                        <div className="col-12">
                            <Label className="labelForm" for="phone">Telefone</Label>
                            <Input className="addInput" value={phone} id="phone" name="phone" onChange={this.handleChange} />
                        </div>

                        <div className="col-12">
                            <Label className="labelForm" for="email">Email</Label>
                            <Input className="addInput" value={email} id="email" type="email" name="email" onChange={this.handleChange} />

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