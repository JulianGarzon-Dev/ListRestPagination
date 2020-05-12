import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Usuario extends Component {

  constructor(props){
    super(props);
  }

    render() {
        const {id, first_name, last_name} = this.props
        return (
            <div>
              <Link to={`/Detalles/${id}`}>
              <a>
                
                {id}. {first_name} {last_name}                      
                <hr/>
                
                </a>
                </Link>
            </div>
        )
    }
}

export default Usuario;