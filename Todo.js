import React, { Component } from 'react';
let getId = '';
class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: "",          // name
            todoItems: []       // alldata
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.update = this.update.bind(this);
    }

    onChangeHandler(event) {
        var inputVal = event.target.value;
        this.setState({
            item: inputVal.toUpperCase()
        })
    }
    addData() {
        var inputVal = this.state.item;
        var itemInstance = this.state.todoItems;
        itemInstance.push(inputVal.toUpperCase());
        this.setState({
            todoItems: itemInstance,
            item: ""
        })
    }
    delete(event) {
        var id = event.target.id;
        var itemInstance = this.state.todoItems;
        itemInstance.splice(id, 1);
        this.setState({
            todoItems: itemInstance
        })
    }
    edit(event) {
        getId = event.target.id;
        this.setState({
            item: this.state.todoItems[event.target.id]
        })
        document.getElementById("addItem").style.display = "none";
        document.getElementById("update").style.display = "block";
        event.target.parentNode.style.borderBottom="2px solid red";
        event.target.style.display="none";
    }
    update(){
        var y = this.state.todoItems;
        y[getId] = this.state.item;
        this.setState({            
            todoItems:y,
            item:""
        });
        document.getElementById("addItem").style.display = "block";
        document.getElementById("update").style.display = "none";
        
        var updateItem = document.getElementsByClassName("edit");
        for (var i=0; i < updateItem.length; i++) {
            updateItem[i].style.display="block";
            updateItem[i].parentNode.style.borderBottom="none";
        }        
    }
    render() {
        var itemlist = this.state.todoItems.map((e, i) =>
            <li key={i}>{e}
                <span id={i} onClick={this.delete} className=' btn btn-danger' >X</span>
                <span id={i} onClick={this.edit} className='edit btn btn-success'>edit</span>                
            </li>
        )
        return (
            <div>
                <h1>PIAIC ASSIGNMENT</h1>
                <div className="header">React TODO App</div>
                <div className="body">
                    <ul>
                        {itemlist}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" value={this.state.item} onChange={this.onChangeHandler} />
                    <button id="addItem" onClick={this.addData}>+</button>
                    <button id="update" onClick={this.update}>Update</button>
                </div>
            </div>
        )
    }
}
export default Todo;