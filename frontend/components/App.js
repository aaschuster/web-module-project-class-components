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
      form: "",
      hiding: false
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

    const toggleHiding = () => {
      this.setState({hiding: !this.state.hiding});
    }

    return (
      <div>
        <TodoList list={this.state.list} liClick={liClick} hiding={this.state.hiding}/>
        <Form form={this.state.form} onChange={onChange} onSubmit={onSubmit} toggleHiding={toggleHiding} hiding={this.state.hiding}/>
      </div>
    )
  }
}
