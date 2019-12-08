import {createStore,combineReducers} from 'redux'
import {expensesreducer} from '../reducer/expense_reducer'
import {filterreducer} from '../reducer/filter_reducer' 

export default()=>{
    const store=createStore(
    combineReducers({
        expense:expensesreducer,
        filter:filterreducer
    })
)
 
return store
}
