import React, { Component } from "react";

export default class Greeting extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.type,
      name: this.props.name
    }
    this.setType = this.setType.bind(this) // use Bind to garantee a fix 'this'
  }

  setType(event) {
    this.setState({ type: event.target.value})
  }

  setName(event) {
    this.setState({ name: event.target.value})
  }
  
  render () {
    const { type, name} = this.state;
    return (
      <div>
        <h1>{type} {name}!</h1>
        <hr />
        <input type='text' placeholder='Type...' 
          value={type} onChange={this.setType}/> {/* calling just the function */}
        <input type='text' placeholder='Name...' 
          value={name} onChange={event => this.setName(event)}/> {/* calling the function using an arrow function */}
      </div>
    )
  }
}