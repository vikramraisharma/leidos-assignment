import React,{Component} from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

/*
    Prompt: Given JSON data such as this list of dogs(in other screenshot), create
    a page in React or Angular that displays the data in an organized table. The 
    page should be able to talk to a Node or PHP API and I can use any CSS framework
    to create the table (here I have ReactBootstrap)
*/

class TableComponent extends Component {

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

    componentDidMount(){
        this.fetchData()
    }

    render(){
        return(
            <Container>
                <h2>Dogs:</h2>
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