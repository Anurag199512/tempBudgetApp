import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import React from 'react';

import {Connectedlist} from './expenselist'
import {ConnectedFilter} from './expenselistfilter'
import {ExpenseForm} from './expenseform'
import  {Edit} from './EditExpense'

import {addexpense, editexpense} from '../action/expense'

const expensedashboard=()=>{
    return (
        <div>this is the main dashboard....<br/>
        <Link to="/edit/:id">Edit this</Link><br/>
        <Link to="/add">Add</Link><br/>
        <Link to="/help">help</Link>   <br/>
        <ConnectedFilter/>
        <Connectedlist/>

        </div>);
};

const addexpense1=(props)=>{
    return (<div>this is the add dashboard....<br/>
        <Link to="/help">help</Link><br/>
        <Link to="/">Home</Link><br/>
        <ExpenseForm whensubmit={(expense)=>{
            //console.log(expense)
            props.dispatch(addexpense(expense))
            props.history.push('/')
        }}/>
        </div>);
};


 

const help=()=>{
    return (<div>this is the help dashboard....<br/>
      
        <Link to="/">Home</Link><br/>
        <Link to="/add">Add</Link>   <br/>
        </div>);
};


const nodata=()=>(
    <div>No datafound...go somewhere else....
    <br/>
        <Link to="/">Home</Link>    <br/>
    </div>)


const AppRoute=()=>(
    <BrowserRouter>
        
    <Switch>
            <Route path="/" component={expensedashboard} exact={true}/>
            <Route path="/edit/:id" component={connect()(Edit)}/>
            <Route path="/add" component={connect()(addexpense1)}  />
            <Route path="/help" component={help}  />
            <Route component={nodata}/>
            
    </Switch>    
           
    </BrowserRouter>

);

export{
     AppRoute}
     
