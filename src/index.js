import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './components/Parent';
import Child from './components/Child';

ReactDOM.render(
  <div>
    <Parent name="Bob" lastName="Williams">
      <Child name="Jonathan" />
      <Child name="Jean" />
      <Child name="Tiago" />
    </Parent>
</div>, 
document.getElementById("root"))