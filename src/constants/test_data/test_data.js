export const ITEM1 = {
    item: 'Chicken Sandwich',
    price: 5.5
};

export const ITEM2 =  {
    item: 'Chicken and Rice Bowl',
    price: 9.5
};

export const ITEM3 = {
    item: 'Fries',
    price: 2.5
};

export const ORDER1 = {
    name: 'Dane',
    itemList: [ITEM1, ITEM3]
};

export const ORDER2 = {
    name: 'Drew',
    itemList: [ITEM2, ITEM3]
};

// deep copy with JSON.parse(JSON.stringify(item));
export const CHECK = [ITEM1, ITEM2, ITEM3, ITEM3];
export const ITEMIZED_CHECK = [ORDER1, ORDER2];