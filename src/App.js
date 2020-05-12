import React , {Component} from 'react';
import './App.css';
import Usuario from './Usuario';
import Detalles from './Detalles';


export class App extends Component{

  constructor(props){
    super(props);
    this.url= 'https://reqres.in/api/users?page=';

    this.state = {
      usuarios: [],
      next: "",
      previous: "",
      isFetch: true
    }

  }

  styles = {
    fontSize: 35,
    backgroundColor: 'red',
    Color: 'black',
    fontWeight: 'bold',
    
  }

  styless = {
    fontSize: 25,
    backgroundColor: 'black',
    Color: 'white',
    fontWeight: 'Rockhead',
  }

  

  componentDidMount(){
    fetch(`${this.url}1`)
    .then(resp => resp.json(resp))
    .then(usuariosJson => {
      this.setState({usuarios: usuariosJson.data, next: `${this.url}2`, previous: `${this.url}1`, isFetch: false})
      })
}

  nextPage = () => {
    const{next} = this.state;
    fetch(next)
    .then(re => re.json(re))
    .then(usuariosJson => {
      this.setState({usuarios: usuariosJson.data, next: `${this.url}2`, previous: `${this.url}1`, isFetch: false})
      })
  }

  previousPage = () => {
    const{previous} = this.state;
    fetch(previous)
    .then(re => re.json(re))
    .then(usuariosJson => {
      this.setState({usuarios: usuariosJson.data, next: `${this.url}2`, previous: `${this.url}1`, isFetch: false})
      })
  }

  render(){

      if(this.state.isFetch){
      return 'Loading'
    }
    return(
      
      <div styles className='container'>
        <p style={this.styles} class="text-center">Usuarios</p>
        <ul style={this.styless} className='list-group'>{
          this.state.usuarios.map((usuario, id) =>{
            return(
            <div>
                        <li className='list-group-item' key={id}> <Usuario
                                                      id={usuario.id}
                                                      first_name={usuario.first_name}
                                                      last_name={usuario.last_name}/>
                                                       </li></div>
           )} 
          )
        }
        </ul>
        <div className='container text-center'>
          
          <button onClick={this.previousPage} className='btn tn btn-outline-info'> Pagina 1 </button>
          <a>      </a>
          <button onClick={this.nextPage} className='btn tn btn-outline-info'> Pagina 2 </button>
          
        </div>
      </div>);

}

}

export default App;
