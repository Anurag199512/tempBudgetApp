export const displayexpense=(exp,filter)=>{
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


