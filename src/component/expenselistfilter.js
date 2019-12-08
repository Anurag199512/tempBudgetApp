import React from 'react'
import {connect} from 'react-redux'
import {setfiltertext,setfilteramount} from '../action/filter'

const Expenselistfilter=(props)=>{
return(
    <input type="text" id="filtervalue" value={props.filters.text} onChange={(e)=>{
        props.dispatch(setfiltertext(e.target.value))
    }}/>
)
}


export const ConnectedFilter= connect((state)=>{
    //console.log(state.expense,state.filter,state)
    return {
        filters:state.filter
    }
})(Expenselistfilter);

