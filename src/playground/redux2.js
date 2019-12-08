
import {createStore} from 'redux'

const addone=({addvalue=1}={})=>(
    {
        type:'ADD1',
        addvalue
    }
);

const subone=({subvalue=1}={})=>(
    {
        type:'SUB',
        subvalue
    }
);


const store=createStore(
    (state={count:0},action)=>{
        switch(action.type)
        {
            case 'ADD1' :      
            console.log(action.type,action.addvalue,state.count)
           // const incr=typeof action.incrementby ==='number'?action.incrementby:1;
            return  {
                        count:state.count+action.addvalue };
            case 'SUB'  :   
           // const decr=typeof action.subby ==='number'?action.subby:1; 
              return  {
                count:state.count-action.subvalue };  
            case 'reset' :      return  {
                count:0};
            default : return state;
        }
    }
);

// createStore is called once by default and other whenever dispatch is called
 

const unsub=store.subscribe(()=>{
    console.log(store.getState());
}) 

store.dispatch(addone({addvalue:5}));

console.log(store.dispatch(addone()));

//unsub();

store.dispatch(subone({subvalue:2}));


store.dispatch({
    type:'reset'
});



