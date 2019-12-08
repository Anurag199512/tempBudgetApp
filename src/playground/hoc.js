import React from 'react'
import ReactDOM from 'react-dom'

const Info =(props)=>{
    return(<div>snipping
        <h1>InfO page:</h1>
        <h3>{props.title}</h3>
    </div>)
}

const cmndata=(Wrapcomp)=>{
    return (props)=>(
        <div>
            <p>this is from hoc component</p>
            <Wrapcomp {...props}/>
        </div>
    )
}

const Hoc=cmndata(Info);

ReactDOM.render(<Hoc title='as a  example for all hoc sub element'/>,document.getElementById('app'))

