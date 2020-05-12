export class App extends Component{

    constructor(props){
      super(props);
      
      this.state = {
        personas: [{
           nombre:'Daniel',
           edad: 20},
          {
           nombre:'Rosa',
           edad:40},
           {
            nombre:'Manuel',
            edad:60}]
      }
    }
  
    styles = {
      fontSize: 30,
      backgroundColor: 'yellow',
      fontWeight: 'bold'
    }
  
    render(){
  
      let miFuncion = (nombre) => `hola ${nombre}`;
  
      console.log(miFuncion('Henry'));
  
      let person = {nombre: 'Luis', edad: 24};
      const {nombre: n, edad: e} = person;
  
      let colores = ['rojo', 'azul', 'amarillo', 'verde'];
      const [a, b, ...rest] = colores;
      console.log(rest);
  
      return(
        <div className='container'>
          <h1 style={this.styles}>EDAD</h1>
          <p style={{color: 'red'}}> {n} tiene {e} </p>
          <p className = 'text-success'>Hello</p>
          <h3 className = {this.getResultClass()}> 2</h3>
          <ul className='list-group'>
            {
              this.state.personas.map((persona, index) => {
                  return (
                  <li className='list-group-item' key = {index}>{persona.nombre}</li>
                  )
              })
            }
          </ul>
        </div>);
    }
  
  getResultClass(){
    return this.state.personas.length > 0 ? 'text-primary': 'text-warning';
  }
  
  }