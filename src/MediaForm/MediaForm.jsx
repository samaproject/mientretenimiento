import React, {Component} from 'react'
import './MediaForm.css';

class MediaForm extends Component{
  constructor() {
    super();
    this.state = {
      titulo: '',
      genero: '',
      imagen: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInput(e){
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddMedia(this.state); 
  }

  render() {
    return (
      <div className="mediaform">
        <h3>Ingrese su favorita</h3>
        
          <div className="col-offset-5"> 
            
            <form onSubmit={this.handleSubmit}>
              
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Título</span>
                </div>
                <input className="form-control" aria-label="Titulo" type="text" name="titulo" value={this.state.titulo} onChange={this.handleInput}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Genero</label>
                </div>
                <select className="custom-select" name="genero" value={this.state.genero} onChange={this.handleInput}>
                  <option value="Pelicula">Película</option>
                  <option value="Serie">Serie</option>
                  <option value="Anime">Anime</option>
                </select>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Subir</span>
                </div>
                <div className="custom-file">
                  <input className="custom-file-input" name="imagen" type="file" value={this.state.imagen} onChange={this.handleInput}/>
                  <label className="custom-file-label">Elegir imágen</label>
                </div>
              </div>

              <div className="input-group mb-3" id="divBtnSubmit">
                <button className="btn btn-primary" type="submit" id="btnAceptar">Aceptar</button>
              </div>
    
            </form>
          
          </div>
      </div>
    )
  }
}

export default MediaForm;