'use client'

import Table from 'react-bootstrap/Table';
import { useState } from "react";
import { decimalToDollar } from "@/utils/format";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, InputGroup } from 'react-bootstrap';
import { MinusCircle, PencilSquare } from '@/static/images';
import { itemizeCheckByPerson } from '@/utils/check-util';

function TaxTip({ setTax, setTip }) {
    return (
        <Form>
            <Col>
                <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control placeholder="Tax" type="number" onChange={event => setTax(event.target.value)} />
                </InputGroup>
            </Col>
            <Col>
                <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control placeholder="Tip" type="number" onChange={event => setTip(event.target.value)} />
                </InputGroup>
            </Col>
        </Form>
    );
}

export function AddItem({ setItem, setCheck, setPrice, setPerson, item, check, price, person }) {
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Control value={item} placeholder="Item Name" onChange={event => setItem(event.target.value)}/>
                </Col>
                <Col>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control value={price} placeholder="Price" type="number" onChange={event => setPrice(event.target.value)} />
                    </InputGroup>
                </Col>
                <Col>
                    <Form.Control value={person} placeholder="Person" onChange={event => setPerson(event.target.value)}/>
                </Col>
                <Col>
                    <Button value="Add" onClick={() => setCheck(check => [...check, {item, price, person}])} >Add</Button>
                </Col>
                <Col>
                    <Button value="Done" onClick={() => console.log(itemizeCheckByPerson(check))} >Done</Button>
                </Col>
            </Row>
        </Form>
    );
}

export function AddEditCell(setCheck, check, setItem, item, setPrice, price, setPerson, person, i) {
    return <td>
        <Button onClick={() => setCheck(check => check.filter((_, idx) => idx != i))}>
            <MinusCircle />
        </Button>
        <Button onClick={() => {
            setItem(item);
            setPrice(price);
            setPerson(person);
            setCheck(check.filter((_, idx) => idx != i));
        } }>
            <PencilSquare />
        </Button>
    </td>;
}

export default function Check() {
    const [item, setItem] = useState("");
    const [price, setPrice] = useState("");
    const [person, setPerson] = useState("");
    const [tax, setTax] = useState();
    const [tip, setTip] = useState();
    const [check, setCheck] = useState([]);
    
    return(
        <div>
            <TaxTip {...{setTax, setTip}} />
            <Table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Who Ordered?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        check.map(({ item, price, person }, i) => (
                            <tr key={i}>
                                <td>{item}</td>
                                <td>{decimalToDollar(price)}</td>
                                <td>{person}</td>
                                {AddEditCell(setCheck, check, setItem, item, setPrice, price, setPerson, person, i)}
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <AddItem {...{ setItem, setCheck, setPrice, setPerson, item, check, price, person }} />
        </div>
    );
}