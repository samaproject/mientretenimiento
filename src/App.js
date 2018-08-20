import React, { Component } from 'react';
import narutologo from './naruto.jpeg';
import bblogo from './breakingbad.jpeg';
import gladiadorlogo from './gladiador.jpg';
import './App.css';
import MediaForm from './MediaForm/MediaForm'

import Media from './Media/Media';

class App extends Component {
  constructor() {
    super();
    this.state = {
      medias: [
        {mediaId: 1, titulo: "Naruto", img: {narutologo}, genero: "Anime", puntuacion: 9},
        {mediaId: 2, titulo: "Gladiador", img: {gladiadorlogo}, genero: "Película", puntuacion: 7},
        {mediaId: 3, titulo: "Breaking Bad", img: {bblogo}, genero: "Serie", puntuacion: 10}
      ]
    };
  }

  render() {
    const medias = this.state.medias.map(media => {
      return (
        <div className="col-md-3">
          <Media 
            titulo={media.titulo}
            imagen={media.img}
            genero={media.genero}
            puntaje={media.puntuacion}
            key={media.mediaId}
          />
        </div>
      )
    })
    
    return (
      <div className="container">
        <div className="row">
          {medias}
        </div>
        <MediaForm />
      </div>
    )
    
  }
}

export default App;
