import React from 'react';
import { MdInsertDriveFile } from 'react-icons/md'
import { distanceInWords } from 'date-fns'
import pt from 'date-fns/locale/pt'

import './style.css'

const ListItem = props => (
    <li key={props.file._id}>
        <a className="fileInfo" href={props.file.url} target="_blank">
            <MdInsertDriveFile size={24} color="#a5cfff" />
            <strong>{props.file.title}</strong>
        </a>
        <span>há {distanceInWords(props.file.createdAt, new Date(), { locale: pt })}</span>
    </li>
)

export default ListItem
