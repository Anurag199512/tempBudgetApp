import uuid from 'uuid'

export const addexpense=({description='',note='',amount=0,createdat=0}={})=>{
    console.log(description,note,amount,createdat)
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

export  const removeexpense=(id)=>{
    //console.log(description,note,amount,createdat)
    return {
        type:'removeexpense',
        id
    }

}

export const editexpense=(id,updates)=>{
    return {
        type:'EDIT',
        id,
        updates
    }
}
