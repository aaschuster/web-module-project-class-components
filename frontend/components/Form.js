import React from 'react'

export default class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {form, onChange, onSubmit, clearCompleted} = this.props;

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder='Enter todo' value={form} onChange={onChange}/>
          <button>Submit</button>
        </form>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    )
  }
}
