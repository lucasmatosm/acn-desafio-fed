import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, CustomInput, Container } from 'reactstrap';
import AddIcon from '../../public/img/plus.svg'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switchButton } from '../../actions/actionSwitch';

class SubHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listTitleRegister: 'Cadastro de Usuário',
			listTitleList: 'Lista de Usuários',
			inputValue: 't'
		}

		this.changePage = this.changePage.bind(this);
	}

	inputChange = event => {

		this.setState({
			inputValue: this.state.inputValue === 't' ? 'f' : 't'
		})
	}

	changePage() {
		this.props.history.push('/addUser')
		this.setState({ listTitleState: 'Cadastro de Usuário' })
	}

	render() {
		const { switchButton } = this.props;
		const { inputValue, listTitleRegister, listTitleList } = this.state;

		return (
			<Container>

				{!this.props.location.pathname.includes('/addUser') ? <h5 className="sub-title">{listTitleList}</h5> :
					<h5 className="sub-title">{listTitleRegister}</h5>}
				<div>
					{!this.props.location.pathname.includes('/addUser/') ? null :
						<CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"
							onChange={this.inputChange} onClick={() => switchButton(inputValue)} value={inputValue} label="Editar" className="editClient" />}

					{this.props.location.pathname.includes('/addUser') ? null :
						<img onClick={this.changePage} src={AddIcon} className="plusIcon" alt="addIcon"></img>}

				</div>
				{/* <span className="test"></span> */}

			</Container>
		);
	}
}


const mapDispatchToProps = dispatch =>
	bindActionCreators({ switchButton }, dispatch);

	const mapStateToProps = store => ({
		newValue: store.switchState.newValue
	});


export default connect(mapStateToProps,mapDispatchToProps)(SubHeader);