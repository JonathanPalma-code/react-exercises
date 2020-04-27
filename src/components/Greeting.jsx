import React, { Component } from "react";

export default class Greeting extends Component {
  
  state = {
    type: 'speak',
    name: 'Jonathan'
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
          value={type} onChange={event => this.setType(event)}/>
        <input type='text' placeholder='Name...' 
          value={name} onChange={event => this.setName(event)}/>
      </div>
    )
  }
}