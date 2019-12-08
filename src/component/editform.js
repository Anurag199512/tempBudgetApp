
import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import {connect} from 'react-redux'
 class Editform extends React.Component{
     constructor(props){
        console.log('ctor',props)
        super(props)
        this.state={
            description:props.data.description,
            note:props.data.note,
            amount:props.data.amount.toString(),
            createdat:moment(props.data.createdat),
            calfocus:false,
            error:''
    }
}

    ondespchange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description }))
    }

    onnotechange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}));
    }

    ondatechange=(createdat)=>{
       
        this.setState(()=>({createdat}));
    }
    onfocuschange=({focused})=>{
       
        this.setState(()=>({calfocus:focused}));
    }    
     onamountchange=(e)=>{
        const amount=e.target.value
        //matching the regex
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/))
        this.setState(()=>({
            amount
        }))
    }

    onsubmit=(e)=>{
        e.preventDefault();

        if(!this.state.amount && !this.state.description)
        {
            this.setState(()=>( {error:'Please provide the amount and description' }))
        }

        else if(!this.state.description)
        {
            this.setState(()=>( {error:'Please provide the description' }))
        }
        else if(!this.state.amount)
        {
            this.setState(()=>( {error:'Please provide the amount' }))
        }
        else {
            this.setState(()=>( {error:' ' }))
        }

        this.props.whensubmit(this.props.data.id,{
            description:this.state.description,
            amount:Number(this.state.amount),
            note:this.state.note,
            //createdat:this.state.createdat wont work ..createdat is a moment object
            createdat:this.state.createdat.valueOf()
        })


    }

    render(){

        //console.log(props)
        return (<div>
               
                <p>{this.state.error!==''?this.state.error:''}</p>

                <form onSubmit={this.onsubmit} >
                    <input type="text"  placeholder="description" 
                    value={this.state.description} 
                    onChange={this.ondespchange} autoFocus/><br/><br/>

                    <input type="text"  placeholder="amount" 
                    value={this.state.amount} 
                    onChange={this.onamountchange}/><br/><br/>
                    
                    <SingleDatePicker
                    date={this.state.createdat}
                    onDateChange={this.ondatechange}
                    focused={this.state.calfocus}
                    onFocusChange={this.onfocuschange}
                    numberOfMonths={1}
                    //to make past days available n not disables
                    isOutsideRange={()=>false}
                    />
                    <textarea placeholder="add a note "value={this.state.note} 
                    onChange={this.onnotechange}>
                    
                    </textarea><br/><br/>

                    <button>Edit expense</button>

                </form>

            </div>)
    }
}

function mapStateToProps(state,props) {
    const expense=state.expense;
//    console.log('Props',props.id)
//    console.log('E',expense)
    return {
        data:expense.find((exp)=>{
            if(exp.id==props.id)
            {
            //    console.log('macthed....not')
            //    console.log('value,',exp.id,'asasa',props.id)
            //    console.log('macthed....')
                   return true
            }
//            else{   console.log('value2,',exp.id,'asasa',props.id)}
        })
    }
}

export const Connectededitform=connect(mapStateToProps)(Editform)

