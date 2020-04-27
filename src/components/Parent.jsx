import React from 'react';
import Child from './Child';

export default props => 
  <div>
    <h1>{props.name} {props.lastName}</h1>
    <h2>Childs</h2>
    <ul>
      <Child name="Jonathan" lastName={props.lastName} />
      <Child {...props} />
      <Child {...props} name="Jean" />
    </ul>
  </div>