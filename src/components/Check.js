'use client'

import Table from 'react-bootstrap/Table';
import { useState } from "react";
import { decimalToDollar } from "@/utils/format";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, InputGroup } from 'react-bootstrap';

const renderRow = ({ item, price }, i) => (
    <tr key={i}>
        <td>{item}</td>
        <td>{decimalToDollar(price)}</td>
    </tr>
);

export function AddItem({ setItem, setCheck, setPrice, item, check, price }) {
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Control placeholder="Item Name" onChange={event => setItem(event.target.value)}/>
                </Col>
                <Col>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control placeholder="Price" type="number" onChange={event => setPrice(event.target.value)} />
                    </InputGroup>
                </Col>
                <Col>
                    <Button value="Add" onClick={() => setCheck([...check, {item: item, price: price}])} >Add</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default function Check() {
    // let check = CHECK;
    const [item, setItem] = useState("");
    const [price, setPrice] = useState("");
    const [check, setCheck] = useState([]);
    
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { check.map((item, i) => renderRow(item, i)) }
                </tbody>
            </Table>
            <AddItem {...{ setItem, setCheck, setPrice, item, check, price }} />
        </div>
    );
}