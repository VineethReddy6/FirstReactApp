import React, { Component } from 'react'
const tableStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100vw",
    textAlign: "center"
}
export default class GetStudents extends Component {
    constructor(props) {
        super(props);
        this.state = { students: [] }
    }
    componentDidMount() {
        fetch("http://localhost:4000/stu").then(response => response.json()).then(result => this.setState({ students: result }));
    }
    handleDelete = (k) => {
        fetch("http://localhost:4000/deletestu/" + k, { method: "DELETE" }).then();
        this.componentDidMount();
    }
    handleEdit = () => {

    }
    render() {
        return (
            <table border="3px solid black" style={tableStyle}>
                <tr>
                    <th>Student id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                {
                    this.state.students.map(ele => {
                        // console.log(ele);

                        return (
                            <tr>
                                <td>{ele._id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                                <td><button onClick={() => this.handleDelete(ele._id)}>Delete</button>
                                    <button onClick={this.handleEdit}>Edit</button></td>
                            </tr>);

                    })
                }
            </table >
        )
    }
}
