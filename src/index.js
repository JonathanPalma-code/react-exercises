import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from './components/Greeting'

ReactDOM.render(
  <div>
    <Greeting type='Good Morning' name='Jonathan' />
</div>, 
document.getElementById("root"))