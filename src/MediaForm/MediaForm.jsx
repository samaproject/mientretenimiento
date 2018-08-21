import React, {Component} from 'react'
import './MediaForm.css';

class MediaForm extends Component{
  constructor() {
    super();
    this.state = {
      titulo: '',
      tipo: '',
      imagen: '',
    };
    this.handleInput = this.handleInput.bind(this);
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
      
  }

  render() {
    return (
      <div className="mediaform">
        <h3>Ingrese su favorita</h3>
          
            {/* <form>
              <label>Título </label>
              <input type="text" name="titulo" value={this.state.titulo} onChange={this.handleInput}/>
              <br/>
              <label>Tipo </label>
              <select name="tipo" value={this.state.tipo} onChange={this.handleInput}>
                  <option value="Película">Película</option>
                  <option value="Serie">Serie</option>
                  <option value="Anime">Animé</option>
              </select>
              <br/><br/>
              <label>Imagen </label>
              <input name="imagen" type="file" value={this.state.imagen} onChange={this.handleInput}/>
              <br/>
              <button type="submit" id="btnAceptar">Aceptar</button>
            </form> */}
          <div className="col-offset-5"> 
            
            <form>
              
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Título</span>
                </div>
                <input className="form-control" aria-label="Titulo" aria-describedby="basic-addon1" type="text" name="titulo" value={this.state.titulo} onChange={this.handleInput}/>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text" for="inputGroupSelect01">Tipo</label>
                </div>
                <select className="custom-select" name="tipo" value={this.state.tipo} onChange={this.handleInput} id="inputGroupSelect01">
                  <option selected>Elegí...</option>
                  <option value="Pelicula">Película</option>
                  <option value="Serie">Serie</option>
                  <option value="Anime">Anime</option>
                </select>
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">Subir</span>
                </div>
                <div className="custom-file">
                  <input className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" name="imagen" type="file" value={this.state.imagen} onChange={this.handleInput}/>
                  <label className="custom-file-label" for="inputGroupFile01">Elegir imágen</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <button className="btn btn-primary" type="submit" id="btnAceptar">Aceptar</button>
              </div>
    
            </form>
          </div>
      </div>
    )
  }
}

export default MediaForm;