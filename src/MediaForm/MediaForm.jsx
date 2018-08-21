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
                <form>
                    <label>Título</label>
                    <input type="text" name="titulo" value={this.state.titulo} onChange={this.handleInput}/>
                    <br/>
                    <label>Tipo</label>
                    <select name="tipo" value={this.state.tipo} onChange={this.handleInput}>
                        <option value="Película">Película</option>
                        <option value="Serie">Serie</option>
                        <option value="Anime">Animé</option>
                    </select>
                    <br/><br/>
                    <label>Imagen</label>
                    <input name="imagen" type="file" value={this.state.imagen} onChange={this.handleInput}/>
                    <br/>
                    <button type="submit" id="btnAceptar">Aceptar</button>
                </form>
            </div>
        )
    }
}

export default MediaForm;