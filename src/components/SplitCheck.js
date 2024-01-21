'use client'

import { Table } from "react-bootstrap";
import { computeSplitCheck, getSubtotal, getTaxRate, getTipRate } from "@/utils/calculations";
import { decimalToDollar } from "@/utils/format";
import { itemizeCheckByPerson } from "@/utils/check-util";

export default function SplitCheck({ check, tip, tax }) {
    const itemizedCheck = itemizeCheckByPerson(check);
    const subtotal = getSubtotal(itemizedCheck);
    const tipRate = getTipRate(parseFloat(tip), subtotal);
    const taxRate = getTaxRate(parseFloat(tax), subtotal);
    const splitCheck = computeSplitCheck(itemizedCheck, taxRate, tipRate);

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Amount Owed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(splitCheck).map(([ person, price ]) => (
                            <tr>
                                <td>{person}</td>
                                <td>{decimalToDollar(price)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}