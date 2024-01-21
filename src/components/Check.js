'use client'

import ItemInput from "./ItemInput";
import SplitCheck from "./SplitCheck";
import { useState } from "react";

export default function Check() {
    const [isInputing, setIsInputing] = useState(true);
    const [check, setCheck] = useState([]);
    const [tax, setTax] = useState("0.0");
    const [tip, setTip] = useState("0.0");

    if (isInputing) {
        return(<ItemInput {...{ setCheck, setIsInputing, setTax, setTip, check }} />);
    } else {
        return(<SplitCheck {...{ check, tax, tip }} />);
    }
}