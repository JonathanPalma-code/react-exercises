import React from 'react';
import ReactDOM from 'react-dom';

// import Multiples from './components/Multiples'
import Multiples, { GoodNight } from './components/Multiples';

ReactDOM.render(
  <div>
    <Multiples.GoodAfternoon name="Jonathan" />
    <GoodNight name="Jean" />
</div>, 
document.getElementById("root"))