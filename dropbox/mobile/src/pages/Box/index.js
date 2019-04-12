import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { distanceInWords } from 'date-fns'
import pt from 'date-fns/locale/pt'
import ImagePicker from 'react-native-image-picker'
import RNFS from 'react-native-fs'
import FileViewer from 'react-native-file-viewer'
import socket from 'socket.io-client'

import styles from './styles';
import api from './../../services/api'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Box extends Component {
  state = {
    box: {}
  }

  async componentDidMount() {
    const box = await AsyncStorage.getItem('@RocketBox:box')
    const response = await api.get(`/boxes/${box}`)

    this.setState({
      box: response.data
    })

    this.subscribeToNewFiles(box)
  }

  subscribeToNewFiles = box => {
    const io = socket(api.defaults.baseURL)

    io.emit('connectRoom', box)

    io.on('file', data => {
      this.setState({
        box: { ...this.state.box, files: [...this.state.box.files, data] }
      })
    })
  }

  handleUpload = () => {
    ImagePicker.launchImageLibrary({}, async upload => {
      if(upload.error) {
        console.log('Imagepicker error')
      }
      else if(upload.didCancel) {
        console.log('Cancelado pelo usuário')
      }
      else {
        const data = new FormData()

        const [prefix, sufix] = upload.fileName.split('.')
        const ext = sufix.toLowerCase() === 'heic' ? 'jpg' : sufix

        data.append('file', {
          uri: upload.uri,
          type: upload.type,
          name: `${prefix}.${ext}`
        })

        const box = this.state.box._id
        api.post(`/boxes/${box}/files`, data)
      }
    })
  }

  openFile = async file => {
    try {
      const filePath = `${RNFS.DocumentDirectoryPath}/${file.title}`

      await RNFS.downloadFile({
        fromUrl: file.url,
        toFile: filePath
      })

      await FileViewer.open(filePath)
    }
    catch(e) {
      console.log('Arquivo não suportado')
    }
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={ () => this.openFile(item) } style={styles.file}>
      <View style={styles.fileInfo}>
        <Icon name="insert-drive-file" size={24} color="#a5cfff" />
        <Text style={styles.fileTitle}>{item.title}</Text>
      </View>
      <Text style={styles.fileDate}>
        há { distanceInWords(item.createdAt, new Date(), { locale: pt }) }
      </Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boxTitle}>{ this.state.box.title }</Text>
        <FlatList 
          style={styles.list}
          data={ this.state.box.files }
          keyExtractor={ file => file._id }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={ this.renderItem }
        />

        <TouchableOpacity style={styles.fab} onPress={ this.handleUpload }>
          <Icon name="cloud-upload" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}
