import './App.css';
import Person from './Person';
import { sum, num1, num2 } from './Utility';

import Prs from './Person';
import { sum as zbroj } from './Utility';
import * as ALL from './Utility';

function App() {
  return (
    <>
      <h1>Prvi primjer</h1>
      <p>Ime osobe: {Person.name}</p>
      <p>Prvi zbroj: {sum(2, 4)}</p>
      <p>Drugi zbroj: {sum(num1, num2)}</p>
      <h1>Drugi primjer</h1>
      <p>Ime osobe: {Prs.name}</p>
      <p>Prvi zbroj: {zbroj(2, 4)}</p>
      <p>Drugi zbroj: {ALL.sum(ALL.num1, ALL.num2)}</p>
    </>
  );
}

export default App;
