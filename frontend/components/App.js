import React, {useState} from 'react'

import TodoList from './TodoList';
import Form from "./Form";

const initList = [
  {name: "Tickle myself", id: 1, completed: false},
  {name: "Steel Vengeance", id: 2, completed: false},
  {name: "Travel to the ends of the earth grumbling all the way", id: 3, completed: false}
]

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: initList,
      form: ""
    }
  }

  

  render() { 

    const onChange = (e) => {
      this.setState({form: e.target.value});
    };

    const onSubmit = (e) => {
      e.preventDefault();
      this.setState({list: [...this.state.list, {name: this.state.form, id: e.timeStamp, completed: false}]});
      this.setState({form: ""});
    }

    const liClick = (id) => {
      for(let i=0; i<this.state.list.length; i++) {
        if(this.state.list[i].id===id) {
          let newList = this.state.list;
          newList[i].completed = !newList[i].completed;
          this.setState({list: newList});
        }
      }
    }

    const clearCompleted = () => {
      const newList = this.state.list.filter( li => {
        if(!(li.completed)) return li;
      })
      this.setState({list: newList});
    }

    return (
      <div>
        <TodoList list={this.state.list} liClick={liClick}/>
        <Form form={this.state.form} onChange={onChange} onSubmit={onSubmit} clearCompleted={clearCompleted}/>
      </div>
    )
  }
}
