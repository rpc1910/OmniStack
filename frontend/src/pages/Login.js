import React, { Component } from 'react'
import './Login.css'
import twitterLogo from './../twitter.svg'

export default class Login extends Component {
	constructor(props) {
		super(props)

		const username = localStorage.getItem('@GoTwitter:username');

		if(username && username.length) {
			props.history.push('/timeline')
		}
	}

	state = {
		username: '',
	}

	handleInputChange = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const {username} = this.state

		if(!username.length) return;

		localStorage.setItem('@GoTwitter:username', username)

		this.props.history.push('/timeline')
	}

	render() {
		return (
			<div className="login-wrapper">
				<img src={twitterLogo} alt="Twitter" />
				<form onSubmit={this.handleSubmit}>
					<input 
						value={this.state.username}
						onChange={ this.handleInputChange }
						placeholder="Nome de usuário" />
					<button>Entrar</button>
				</form>
			</div>
		)
	}
}
