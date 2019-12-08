import React from 'react';
import ReactDOM from 'react-dom';

//BrowserRouter for creatinig a router.....,Route for routing various pages
import './style/base/_base.scss'
import './style/style.scss'
import 'normalize.css/normalize.css'
import {AppRoute} from './component/maincomp'
import {Provider} from 'react-redux'
import configurestore from './reactstore/configstore'
import {addexpense,removeexpense,editexpense} from './action/expense'
import {setfiltertext,setfilteramount} from './action/filter'
import {displayexpense} from './selector/expenses'

const store=configurestore();
//console.log('here...',store.getState())

store.dispatch(addexpense(
    {
        description:'This is for water bill',
        amount:1100
    }
))

store.dispatch(addexpense(
    {
        description:'This is for electricity bill',
        amount:3320
    }
))

store.dispatch(setfiltertext('bill'));
store.dispatch(setfilteramount());

//console.log('here...',store.getState())
console.log('A',displayexpense(store.getState().expense,store.getState().filter))
const jsx=(
    <Provider store={store}>
        <AppRoute/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));
