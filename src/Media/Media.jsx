import React, { Component } from 'react';

import './Media.css';

class Media extends Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.imagen = props.imagen;
    this.genero = props.genero;
    this.puntaje = props.puntaje;
  }

  render() {
    return(
      
      <div className="card mt-3 text-center">

        <div className="card-header">
          {this.titulo}
        </div>

        <div className="card-body">
          <img src={this.imagen} alt="img" height="125" width="25"/>
          <br/>
          {this.genero}
        </div>

        <div className="card-footer">
          {this.puntaje}
        </div>

      </div>
    );
  }
}

export default Media;