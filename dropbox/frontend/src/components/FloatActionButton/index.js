import React from 'react'
import { MdAdd } from 'react-icons/md'

import './styles.css'

const FloatActionButton = props => (
    <div className="float-action-button">
        <a href="/create" title="Criar pasta">
            <MdAdd size={32} color="#fff" />
        </a>
    </div>
)

export default FloatActionButton