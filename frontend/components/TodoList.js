import React from 'react'

import Todo from "./Todo";

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const {list, onClick} = this.props;
    
    return (
      <div>
        {list.map(li => {return <Todo li={li} key={li.id} onClick={onClick}/>})}        
      </div>
    )
    }
}
