import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import App from './App'
import Detalles from './Detalles'

function Routes(){
    return (
        <BrowserRouter>
            <Route path='/App' component={App}/>
            <Route exact path='/Detalles/:id' component={Detalles}/>
        </BrowserRouter>
    )
}

export default Routes