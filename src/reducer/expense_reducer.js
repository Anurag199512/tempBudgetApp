export const expensesreducer=(state=[],action)=>{
    
    switch(action.type){
        case 'EDIT': 
        
        //console.log('S',state)
        return state.map((exp)=>{
                                
                                if (action.id==exp.id)
                                    {
                                        //console.log('a',action)
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
            //console.log('ES',...state,action.expenses)
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
