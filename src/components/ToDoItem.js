import React from "react"

//function ToDoItem(props){
//    return(
//        <div className="todoitem">
//            <input type="checkbox" className="inputbox"></input>
//            <p className="parabox"> {props.item} </p>
//        </div>
//    )
//}

class ToDoItem extends React.Component{
    render(){
        return(
            <div className="todoitem">
                <input type="checkbox" 
                className="inputbox" 
                checked = {this.props.item.completed}
                onChange={() => {
                   this.props.handleClick(this.props.item.id)
                }}></input>
                {this.props.item.completed ? <p className="parabox" style={{color:"red"}}><strike><i>{this.props.item.desc}</i></strike></p> : <p className="parabox">{this.props.item.desc}</p>}
            </div>
        )
    }
}

export default ToDoItem