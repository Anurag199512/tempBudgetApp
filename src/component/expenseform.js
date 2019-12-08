import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now =moment()
console.log(now.format('MMM'))
export class ExpenseForm extends React.Component{
    state={
        description:'',
        note:'',
        amount:'',
        createdat:moment(),
        calfocus:false,
        error:''
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

        this.props.whensubmit({
            description:this.state.description,
            amount:Number(this.state.amount),
            note:this.state.note,
            //createdat:this.state.createdat wont work ..createdat is a moment object

            createdat:this.state.createdat.valueOf()
        })


    }

    render(){
        return(
            <div>
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

                    <button>Add expense</button>

                </form>
            </div>

        )
    }
}

