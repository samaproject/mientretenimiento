import React, { Component } from 'react';

import './App.css';
import MediaForm from './MediaForm/MediaForm'

import firebase from 'firebase';

import Media from './Media/Media';

class App extends Component {
  constructor() {
    super();
    this.state = {
      medias: [ ]
    };
    this.db = firebase.database().ref().child('medias');
    this.imagesRef = firebase.storage().ref().child('images');
    

    this.handleAddMedia = this.handleAddMedia.bind(this);
  }

  componentDidMount() {
    const { medias } = this.state;
    this.db.on('child_added', snap => {
      medias.push({
        mediaId: snap.key,
        titulo: snap.val().titulo,
        imagen: snap.val().imagen,
        genero: snap.val().genero,
      })
      this.setState({medias});
    });
  }

  handleAddMedia(media) {
    this.db.push().set({titulo: media.titulo, imagen: media.imagen, genero: media.genero});
  }

  render() {
    const medias = this.state.medias.map(media => {
      return (
        <div className="col-md-3" key={media.mediaId}>
          <Media 
            titulo={media.titulo}
            imagen={media.imagen}
            genero={media.genero}
          />
        </div>
      )
    })
    
    return (
      <div className="container">

        <div className="appHeader">
          <h1>Lista de contenidos</h1>
        </div>
        
        <div className="appBody">  
          <MediaForm onAddMedia={this.handleAddMedia}/>
          <div className="row">
            {medias}
          </div>
        </div>
      
      </div>
    )
    
  }
}

export default App;
