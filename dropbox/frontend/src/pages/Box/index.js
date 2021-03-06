import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import socket from 'socket.io-client'

import api from './../../services/api'

import './styles.css'
import logo from './../../assets/logo.svg'

import ListItem from './../../components/ListItem'

export default class Box extends Component {
	state = {
		box: {}
	}

	async componentDidMount() {
		this.subscribeToNewFiles()

		const box = this.props.match.params.id
		const response = await api.get(`/boxes/${box}`)

		this.setState({
			box: response.data
		})
	}

	subscribeToNewFiles = () => {
		const box = this.props.match.params.id
		const io = socket(api.defaults.baseURL)

		io.emit('connectRoom', box)

		io.on('file', data => {
			this.setState({
				box: {...this.state.box, files: [...this.state.box.files, data]}
			})
		})
	}

	handleUpload = (files) => {
		files.forEach(file => {
			const data = new FormData()
			data.append('file', file)

			const box = this.props.match.params.id
			api.post(`/boxes/${box}/files`, data)
		});
	}

	render() {
		const { files } = this.state.box

		return (
			<div id="box-container">
				<header>
					<a href="/"><img src={logo} alt="Dropbox" /></a>
					<h1>{this.state.box.title}</h1>
				</header>

				<Dropzone onDropAccepted={this.handleUpload}>
					{ ({ getRootProps, getInputProps }) => (
						<div className="upload" {...getRootProps()}>
							<input {...getInputProps()}/>
							<p>Arraste arquivos ou clique aqui</p>
						</div>
					)}
				</Dropzone>

				<ul>
					{ files && files.map(file => (
						<ListItem key={file._id} file={file} />
					)) }
				</ul>
			</div>
    	);
	}
}
