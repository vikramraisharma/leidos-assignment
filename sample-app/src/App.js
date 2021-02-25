import {Component} from 'react';
import './main.css';
import sampleData from './data/sampleData.json'
import TableComponent from './components/TableComponent'

class App extends Component {
  state = {
    data: sampleData
  }
  render(){
    return (
      <div className="App">
        <h1>Leidos Assignment</h1>
        <TableComponent data={sampleData}/>
      </div>
    );
  }
}

export default App;
