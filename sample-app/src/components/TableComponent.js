import {Component} from 'react';
import {Container, Table} from 'react-bootstrap'

/*
    Currently, this component is passed data from a JSON file for the purpose of rendering a table.
    Included is a sample getData call to show how this file would grab JSON data from an API before 
    running the getKeys, getHeader, and getRowsData functions. 
*/

class TableComponent extends Component {

    getKeys(){
        return Object.keys(this.props.data[0])
    }
    getHeader(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    getRowsData(){
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }

    render(){
        return(
            <Container>
                <h2>Dogs:</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

const RenderRow = (props) => {
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
        })
}

export default TableComponent