import React from "react"
import MyTitle from "./MyTitle.js"
import ToDoItem from "./ToDoItem.js"
import toDoList from "./toDoList.js"

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            toDoList : toDoList
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){
        this.setState(function(prevState){
            const newState = prevState.toDoList.map(function(item){
                if (item.id === id){
                    return {
                        ...item,
                        completed : !item.completed
                    }
                }
                return {
                    ...item
                }
            })
            return {
                toDoList : newState
            }
        })
    }
    
    render(){
        const jsxList = this.state.toDoList.map((item) => {
            return <ToDoItem key={item.id} item={item} handleClick={this.handleClick}/>
        })
        return(
            <div className="app">
                <MyTitle />
                {jsxList}
            </div>
        )
    }
}

export default App