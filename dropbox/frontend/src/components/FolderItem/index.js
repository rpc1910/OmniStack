import React from 'react';
import { MdFolder } from 'react-icons/md'
import { distanceInWords } from 'date-fns'
import pt from 'date-fns/locale/pt'

import './style.css'

const FolderItem = props => (
    <li key={props.folder._id}>
        <a className="fileInfo" onClick={ props.onClick }>
            <MdFolder size={24} color="#a5cfff" />
            <span>{props.folder.files.length}</span>
            <strong>{props.folder.title}</strong>
        </a>
        <span>há {distanceInWords(props.folder.createdAt, new Date(), { locale: pt })}</span>
    </li>
)

export default FolderItem
