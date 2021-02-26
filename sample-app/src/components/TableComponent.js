import React,{Component} from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

class TableComponent extends Component {

    // declare empty dogs array to store API data in
    state = {
        dogs: []
    }

    // fetch list from API and save it into component state
    async fetchData(){
        try{
            let response = await fetch(`http://localhost:8080`)
            let data = await response.json()
            this.setState({ dogs: data})
        } catch(e){
            console.log(e);
        }     
    }

    // when component mounts, data will be fetched from API
    componentDidMount(){
        this.fetchData()
    }

    render(){
        return(
            <Container>
                <h3>Table of data from Node API:</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Breed</td>
                            <td>Weight</td>
                            <td>Sex</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* map the data inside of state to the corresponding columns in table */}
                        {this.state.dogs.map(dog => {
                            return <>
                                <tr>
                                    <td>{dog.name}</td>
                                    <td>{dog.breed}</td>
                                    <td>{dog.Weight}</td>
                                    <td>{dog.sex}</td>
                                </tr>    
                            </>
                        })}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default TableComponent