import React , {Component} from 'react';
import './App.css';
import Detallado from './Detallado';
import axios from 'axios';


export class Detalles extends Component{

    constructor(props){
      super(props);
      this.url2 = `https://reqres.in/api/users/`;
      //this.id = {id};
  
      this.state = {
        detallado: null,
        detail: null
      }
  
    }
  
    styles = {
      fontSize: 30,
      backgroundColor: 'yellow',
      fontWeight: 'bold',
      
    }
  
    componentDidMount(){
      console.log(this.props.match.params.id);
      axios.get(`${this.url2}${this.props.match.params.id}`)
      .then(respu => {
        console.log(respu)
          this.setState({detallado: respu.data.data, detail: respu.data.ad})
        })
      //axios.get(`${this.url2}${id}`)
      //.then(respu => {
      //  console.log(respu)
      //    this.setState({detallado: respu.data.data, detail: respu.data.ad})
      //  })
    }

    render(){
      const {detallado} = this.state
      const {detail} = this.state
      if(detallado === null){
        return 'Loading'
      }
      return(
        
        <div className='container'>
          <h1 style={this.styles} class="text-center">Detalles</h1>
          <Detallado 
                                                        
                                                        id2={detallado.id}
                                                        first_name={detallado.first_name}
                                                        last_name={detallado.last_name}
                                                        email={detallado.email}
                                                        avatar={detallado.avatar}
                                                        company={detail.company}
                                                        text={detail.text}
                                                        web={detail.url} />

        </div>);
    }
  }

export default Detalles;