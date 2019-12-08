export const setfiltertext=(text='')=>{
    return {
        type:'settext',
        text
    }
}

export const setstartdate=(startdate)=>{
    return {
        type:'setstartdate',
        startdate
    }
}

export const setenddate=(enddate)=>{
    return {
        type:'setenddate',
        enddate
    }
}



export const setfilterdate=()=>{
    return{
        type:'setdate'
    }
}

export const setfilteramount=()=>{
    return{
        type:'setamount'
    }
}
