import {Component} from 'react';
import './main.css';
import TableComponent from './components/TableComponent'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Leidos Assignment</h1>
        <TableComponent/>
      </div>
    );
  }
}

export default App;
