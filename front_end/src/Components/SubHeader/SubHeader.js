import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, CustomInput } from 'reactstrap';
import AddIcon from '../../public/img/plus.svg'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchButton } from '../../actions';


 class SubHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listTitle: "Lista de usuários",
			inputValue: 't'
		}

		this.changePage = this.changePage.bind(this);
	}

	componentWillMount() {
		if(this.props.location.pathname.includes('/addUser')){
			this.setState({ listTitle: 'Cadastro de Usuário' })
		}
	}

	 inputChange = event => {

		 this.setState({
			 inputValue: this.state.inputValue === 't' ? 'f': 't'
		 })
	 }

	changePage() {
		this.props.history.push('/addUser')
		this.setState({ listTitle: 'Cadastro de Usuário' })
	}

	render() {
		const {switchButton} = this.props;
		const { inputValue } = this.state;
		return (
			<div>

				<h5 className="sub-title">{this.state.listTitle}</h5>

				<div>
				{!this.props.location.pathname.includes('/addUser') ? null :
			<CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"
						 onChange={this.inputChange} onClick={() => switchButton(inputValue)} value={inputValue} label="Editar" className="editClient" />}
				
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

const mapStateToProps = store => ({
	newValue: store.switchState.newValue
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ switchButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);