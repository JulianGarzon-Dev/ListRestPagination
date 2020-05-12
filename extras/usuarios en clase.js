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
  
    render(){/*
  
      const resultado = <ul className='list-group'>
      {
        this.state.personas.map((persona, index) => {
            return (
            <li className='list-group-item' key = {index}>{persona.nombre}</li>
            )
        })
      }
    </ul>
  */
      return(
        <div className='container'>
          {
            this.state.personas.map((persona, index) =>(
              <Usuario key = {`ìtem-${index}`}
              nombre = {persona.nombre}
              edad = {persona.edad}>
              <h2>NEW</h2>
              </Usuario>
            ))
          }
        </div>);
    }
  }