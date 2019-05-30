import React from 'react'
import { Table ,Dropdown } from 'semantic-ui-react'
import './Trip_View.css'

const Tourist = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
    },
    {
      key: 'Justen Kitsune',
      text: 'Justen Kitsune',
      value: 'Justen Kitsune',
    },
  ]

const T_V = () => (
    <div className = "Box" >
                <div className="trip-text">
                    <h1> Trip View </h1><br/>
                </div>
        <Dropdown placeholder='Select...' fluid selection options={Tourist} />
    <br/><br/><br/><br/>
    <Table padded singleLine inverted celled selectable > 
        <Table.Header >
        <Table.Row>
            <Table.HeaderCell>Number</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Tour Date</Table.HeaderCell>
            <Table.HeaderCell>From</Table.HeaderCell>
            <Table.HeaderCell>To</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
        <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>Wroclaw</Table.Cell>
            <Table.Cell>Warsaw</Table.Cell>
            <Table.Cell positive>Completed</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>Wroclaw</Table.Cell>
            <Table.Cell>Krakow</Table.Cell>
            <Table.Cell positive>Completed</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 39, 2019</Table.Cell>
            <Table.Cell>Wroclaw</Table.Cell>
            <Table.Cell>Lublin</Table.Cell>
            <Table.Cell warning>Happening</Table.Cell>
        </Table.Row>
        </Table.Body>
    </Table>
    </div>
);

export default T_V;
