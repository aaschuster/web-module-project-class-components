import React from 'react'

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {li, onClick} = this.props;

    return (
      <div>
        <div onClick={() => onClick(li.id)} className={`li${li.completed ? "-completed" : ""}`}>
          {li.name}
        </div>
      </div>
    )
  }
}
