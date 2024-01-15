import APP_CONSTANTS from "@/constants/appConstants";

/*
A single order will look like this:

const order = {
    name: "Dane",
    itemList: [
        {
            item: 'Chicken Sandwich',
            price: 5.5
        },
        {
            item: 'Fries',
            price: 2.5
        }, 
        ...
    ]
};

A check will be an array of order objects

const check = [order1, order2, ...];
*/

// In later verions of this project, check computing functionality should be handled by an API rather than being frontend functions


export const computeSplitCheck = check => {
    const itemizedBill = check.map(order => computeShareOfCheck(order));
    return itemizedBill;
};

const computeShareOfCheck = ({ name, itemList }) => {
    let subtotal = 0.0;
    itemList.array.forEach(item => {
        subtotal += item[APP_CONSTANTS.PRICE];
    });
    return { name, subtotal };
};