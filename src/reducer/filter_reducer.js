const filterdefstate={
    text:'',
    sortby:'date',
    startdate:undefined,
    enddate:undefined    
}


export const filterreducer=(state=filterdefstate,action)=>{
     

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
