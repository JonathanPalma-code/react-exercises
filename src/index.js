import React from 'react';
import ReactDOM from 'react-dom';

import Parent from './components/Parent';

ReactDOM.render(
  <div>
    <Parent name="Bob" lastName="Williams" />
</div>, 
document.getElementById("root"))