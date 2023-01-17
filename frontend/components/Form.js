import React from 'react'

export default class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {form, onChange, onSubmit, toggleHiding, hiding} = this.props;

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder='Enter todo' value={form} onChange={onChange}/>
          <button>Submit</button>
        </form>
        <button onClick={toggleHiding}>{hiding ? <>Show</> : <>Hide</>} completed</button>
      </div>
    )
  }
}
