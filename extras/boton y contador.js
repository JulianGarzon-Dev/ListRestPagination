export class App extends Component{

    constructor(props){
      super(props);
  
      this.incrementar = this.incrementar.bind(this);
  
      this.state = {
        contador: 0
      }
      
  
    }
  
    render(){
  
      return(
        <div className='container'>
          <button onClick={this.incrementar} className='btn btn-primary'> Espiche </button>
          <div> {this.state.contador} </div>
        </div>);
    }
  
   incrementar = () => {
     this.setState({
       contador: this.state.contador + 1
     });
   }
  
  }