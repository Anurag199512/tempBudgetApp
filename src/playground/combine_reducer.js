import {createStore,combineReducers} from 'redux'
import uuid from 'uuid'

const addexpense=({description='',note='',amount=0,createdat=0}={})=>{
    //console.log(description,note,amount,createdat)
    return {
        type:'addexpense', 
        expenses:{
            id:uuid(),
            description,
            note,
            amount,
            createdat
        }
    }
}

const removeexpense=(id)=>{
    //console.log(description,note,amount,createdat)
    return {
        type:'removeexpense',
        id
    }

}

const editexpense=(id,updates)=>{
    return {
        type:'EDIT',
        id,
        updates
    }
}

const setfiltertext=(text='')=>{
    return {
        type:'settext',
        text
    }
}

const setstartdate=(startdate)=>{
    return {
        type:'setstartdate',
        startdate
    }
}

const setenddate=(enddate)=>{
    return {
        type:'setenddate',
        enddate
    }
}

const displayexpense=(exp,filter)=>{
    //console.log(exp,filter)
    return exp.filter((ob)=>{
        const startdaymatch=typeof(filter.startdate)!=='number' || ob.createdat>=filter.startdate
        const enddaymatch=typeof(filter.enddate)!=='number' || ob.createdat<=filter.enddate
        const textmatch=ob.description.includes(filter.text)

        return startdaymatch && enddaymatch && textmatch
    }).sort((a,b)=>{
        if(filter.sortby==='date'){
            return a.createdat<b.createdat ? 1:-1 ;
        }
        else if (filter.sortby==='amount'){
            return a.amount<b.amount ? 1:-1
        }
    })


}

const expensesreducer=(state=[],action)=>{
    switch(action.type){
        case 'EDIT': 
        
        //console.log('S',state)
        return state.map((exp)=>{
                                
                                if (action.id===exp.id)
                                    {
                                        //console.log(action.id)
                                        return  {
                                                    ...exp,
                                                    ...action.updates
                                        }
                                    }
                                else{
                                    return exp
                                }
                });
       
        case 'addexpense':
            //console.log('ES',state)
            return[
                //adds new element
                ...state,action.expenses
            ]
        //  {
        //     id:action.expenses.id,
        //     description:action.expenses.description,
        //     note:action.expenses.note,
        //     amount:action.expenssnippes.amount,
        //     createdat:action.expenses.createdat
        // }
        case 'removeexpense':
        //console.log('S1',state)
            //console.log(`ID: ${action.id}`)
            //console.log(state[0])
            // let ind=state.indexOf(action.id);
            //console.log('s',state)
            let ind=0,reqi=-1; 
            state.forEach((a)=>{
                //  console.log(a)
                if(a.id===action.id)
                    {
                        //console.log(a.id,ind)
                        reqi=ind
                    }
                else{
                    ind=ind+1;
                }
            })           
            
            //console.log(`I : ${reqi}`)
            let newstate=state 
            newstate.splice(reqi,1)
            //console.log('s1',newstate)
            // console.log('st',state)
            return [
                    ...newstate
            ];

        default:return  state
        
    }
}

const filterreducer=(state=filterdefstate,action)=>{
    switch(action.type){

        case 'settext':
        // console.log('FS',state)
            return {
                 ...state,text:action.text
            };
        case 'setdate':
        //        console.log('date')
                return {
                    ...state,sortby:'date'
                };

        case 'setamount':
        //console.log('amount')
            return {
                ...state,sortby:'amount'
            };            

        case 'setstartdate':
            return {
                ...state,startdate:action.startdate
            };      
        case 'setenddate':
            return {
                ...state,enddate:action.enddate
            };      
        
        default:return  state
        
    }
}

const setfilterdate=()=>{
    return{
        type:'setdate'
    }
}

const setfilteramount=()=>{
    return{
        type:'setamount'
    }
}


const demostate={
    expenses:[
        {
            id:'asdfghjkl',
            description:'monthly rent',
            note:'paid in advance',
            amount:2300,
            createdat:0
        }
    ],

    filters:{
        text:'rent',
        sortby:'amount',
        startdate:undefined,
        enddate:undefined

    }
}

const filterdefstate={
    text:'',
    sortby:'date',
    startdate:undefined,
    enddate:undefined    
}

const store=createStore(
    combineReducers({
        expense:expensesreducer,
        filter:filterreducer
    })
)

store.subscribe(()=>{
//    console.log(store.getState())
const state=store.getState();
const displayExp=displayexpense(state.expense,state.filter)
console.log(displayExp)

})


const exp1=store.dispatch(addexpense(
    {
        description:'adding expense 1',
        'note':'done for checking purpose..',
        amount:500
    }
));

const exp2=store.dispatch(addexpense(
    {
        description:'adding expense 2',
        amount:5000
    }
));


const exp3=store.dispatch(addexpense(
    {
        description:'adding expense 3',
        amount:230
    }
));


store.dispatch(removeexpense(exp2.expenses.id));
store.dispatch(editexpense(exp1.expenses.id,{amount:20,createdat:5}));

//filter reducer
store.dispatch(setfiltertext('3'));

 
store.dispatch(setfilterdate());
store.dispatch(setfilteramount());

store.dispatch(setstartdate(2));
store.dispatch(setenddate(0));
store.dispatch(setstartdate());


