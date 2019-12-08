import React from 'react'
import {connect} from 'react-redux'
import {removeexpense, editexpense} from '../action/expense'
import {Link} from 'react-router-dom'

import {Connectededitform} from './editform'


const Listitems=(props)=>{
   // console.log('P',props)
    return (
        <div>
        <hr/>
            <h3>Description :{props.data.description}</h3>      
            <h3>Amount :{props.data.amount}</h3>
            <button onClick={()=>
                {props.dispatch(removeexpense(props.data.id))}}
            >Remove this</button> 
            <Link to={`/edit/${props.data.id}`}>
                Edit  this one!
            </Link> 

        </div>
    );
}

export const ConnectedRemove=connect()(Listitems);

