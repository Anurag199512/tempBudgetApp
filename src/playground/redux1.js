import {createStore} from 'redux'


const store=createStore(
    (state={count:0},action)=>{
        switch(action.type)
        {
            case 'ADD1' :      
            const incr=typeof action.incrementby ==='number'?action.incrementby:1;
            return  {
                        count:state.count+incr };
            case 'SUB'  :   
            const decr=typeof action.subby ==='number'?action.subby:1; 
              return  {
                count:state.count-decr };  
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

store.dispatch({
    type:'ADD1',
    incrementby:5
});
 
store.dispatch({
    type:'ADD1'
});

//unsub();

store.dispatch({
    type:'SUB',
    subby:4
});
 

store.dispatch({
    type:'reset'
});


