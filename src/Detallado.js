import React, { Component } from 'react';



class Detallado extends Component {

  constructor(props){
    super(props);
  }

    render() {
        const {id2, email, first_name, last_name, avatar, company, text, web} = this.props
        return (
          
                <div to={id2} class="card text-center">
               
                    <div class="card text-white bg-dark mb-3 text-center">
                      <div class="card-header">Company: {company}</div>
                        <div class="card-body">
                          <h5 class="card-title">{first_name} {last_name}</h5>
                          <a><img src={avatar}/></a>
                            <p class="card-text">{text}</p>
                            <p class="card-text">{email}</p>
                            <p class="card-text">Sitio Web: {web}</p>
                        </div>
                      <ul class="list-group list-group-flush">
                        <a href="/App"><h3>Volver</h3></a>
                      </ul>
                    </div>
                    <hr/>

                </div>
        )
    }
}

export default Detallado;