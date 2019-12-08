import React from 'react'
import { connect } from 'react-redux';
import {ConnectedRemove} from './expenselistitem'
import {displayexpense} from '../selector/expenses'
import {setfiltertext,setfilteramount} from '../action/filter'

 const Expenselist=(props)=>{
    //console.log(props)
    return(
    <div>
        <h1>Below is the list of expenses:</h1>
        <h3>{props.expenses.length}</h3>
       
        {
            props.expenses.map((exp)=>{
                return <ConnectedRemove key={exp.id} data={exp}/>
            })
        }
           
    </div>)
    
    }

export const Connectedlist= connect((state)=>{
    //console.log('Q',state.expense,state.filter,state)
    return {
        expenses:displayexpense(state.expense,state.filter)
    }
})(Expenselist);
