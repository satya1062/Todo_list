import React from 'react';
import { Table,Input,Button } from 'reactstrap';

const List = props => (
    <Table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Slecte</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
      props.items.map((item, index) => <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item}</td>
        <td><Input type="checkbox" /></td>
        <td><Button color="danger">Delete</Button></td>
      </tr>)
    }
    </tbody>
  </Table>
  
);

export default List;