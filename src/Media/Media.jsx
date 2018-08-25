import React, { Component } from 'react';

import './Media.css';

class Media extends Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.imagen = props.imagen;
    this.genero = props.genero;
    this.state = {
      puntaje: 0
    }
  }

  render() {
    return(
      
      <div className="card mt-3 text-center">

        <div className="card-header">
          {this.titulo}
        </div>

        <div className="card-body">
          <img className="card-img-top" src={this.imagen} alt="img"/>
          <br/>
          {this.genero}
        </div>

        <div className="card-footer">
          {this.state.puntaje}
        </div>

      </div>
    );
  }
}

export default Media;