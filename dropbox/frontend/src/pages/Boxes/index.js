import React, { Component } from 'react';
import api from './../../services/api'
import logo from './../../assets/logo.svg'

import FolderItem from './../../components/FolderItem'
import FloatActionButton from './../../components/FloatActionButton'

export default class Boxes extends Component {
    state = {
        boxes: []
    }

    async componentDidMount() {
        const response = await api.get('/boxes')

        this.setState({
            boxes: response.data
        })
    }

    render() {
        const { boxes } = this.state
        return (
            <div id="box-container">
                <header>
                    <a href="/"><img src={logo} alt="Dropbox" /></a>
                    <h1>Todas as pastas</h1>
                </header>

                <ul>
                    {boxes && boxes.map( box => <FolderItem key={box._id} folder={box} /> ) }
                </ul>

                <FloatActionButton />
            </div>
        );
    }
}
