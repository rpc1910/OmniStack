import React, { Component } from 'react'
import './Timeline.css'
import twitterLogo from './../twitter.svg'
import api from './../services/api'
import Tweet from './../components/Tweet'
import socket from 'socket.io-client'

export default class Timeline extends Component {
	constructor(props) {
		super(props)

		const username = localStorage.getItem('@GoTwitter:username');

		if (!username || !username.length) {
			props.history.replace('/')
		}
	}

	state = {
		tweets: [],
		newTweet: ''
	}

	async componentDidMount() {
		this.subscribeToEvents()
		const response = await api.get('tweets')
		this.setState({ tweets: response.data })
	}

	handleNewTweet = async e => {
		if (e.keyCode !== 13) return;

		const content = this.state.newTweet
		const author = localStorage.getItem('@GoTwitter:username')

		await api.post('tweets', { author, content })

		this.setState({ newTweet: '' })
	}

	handleInputChange = e => {
		this.setState({ newTweet: e.target.value })
	}

	handleLogout = () => {
		localStorage.clear();

		this.props.history.replace('/')
	}

	subscribeToEvents = () => {
		const io = socket('http://localhost:3000')

		io.on('tweet', data => {
			this.setState({
				tweets: [data, ...this.state.tweets]
			})
		})

		io.on('like', data => {
			this.setState({
				tweets: this.state.tweets.map(tweet => (tweet._id === data._id ? data : tweet))
			})
		})
	}

	render() {
		return (
			<div>
				<button type="button" className="btn-sair" onClick={this.handleLogout}>Sair</button>
				<div className="timeline-wrapper">
					<img src={twitterLogo} height={24} alt="Twitter" />

					<form>
						<textarea value={this.state.newTweet}
							onChange={this.handleInputChange}
							onKeyDown={this.handleNewTweet}
							placeholder="O que está acontecendo"
						/>
					</form>

					<ul className="tweet-list">
						{this.state.tweets.map(tweet => (<Tweet key={tweet._id} tweet={tweet} />))}
					</ul>
				</div>
			</div>
		)
	}
}
