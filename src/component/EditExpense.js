import React from 'react'
import {Connectededitform} from './editform'
import {editexpense} from '../action/expense'

export const Edit=(props)=>{
     
    return (
        <div>
            this is the editdsd dashboard....{props.match.params.id}<br/>
        <Connectededitform id={props.match.params.id} whensubmit={(id,expense)=>{
            //console.log(id,expense)
            props.dispatch(editexpense(id,expense))
            props.history.push('/')
        }}/>

        </div>);
};
