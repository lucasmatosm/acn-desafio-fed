import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, CustomInput } from 'reactstrap';
import AddIcon from '../../public/img/plus.svg'


export default class SubHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listTitle: "Lista de usuários"

		}

		this.changePage = this.changePage.bind(this);
	}

	componentWillMount() {
		console.log(this.props)
		if(this.props.location.pathname.includes('/addUser')){
			this.setState({ listTitle: 'Cadastro de Usuário' })
		}
	}

	changePage() {
		this.props.history.push('/addUser')
		this.setState({ listTitle: 'Cadastro de Usuário' })
	}

	render() {
		return (
			<div>

				<h5 className="sub-title">{this.state.listTitle}</h5>

				<div>
				{!this.props.location.pathname.includes('/addUser') ? null :
			<CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Editar" className="editClient" />}
				
					{this.props.location.pathname.includes('/addUser') ? null :
						<img onClick={this.changePage} src={AddIcon} className="plusIcon" alt="addIcon"></img>}

					{this.props.location.pathname.includes('/addUser') ? null :
						<InputGroup>
							<Input className="searchClient" placeholder="Busca por nome e CPF" />
							<InputGroupAddon addonType="append">
								{/* <Button color="secondary">To the Right!</Button> */}
							</InputGroupAddon>
						</InputGroup>}
				</div>
				{/* <span className="test"></span> */}

			</div>
		);
	}
}