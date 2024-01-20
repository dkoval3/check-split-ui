/**
 * Itemize a given check by person
 * @param {Array<Object>} check - list of items purchased
 * @param {string} check[].item - item name
 * @param {string} check[].person - person who purchased the item
 * @param {string} check[].price - price of the item
 * @returns {Object} An object with each person's name, their list of items, and the total price
 */
export function itemizeCheckByPerson(check) {
    let itemizedCheck = {};
    for (let i = 0; i < check.length; i++) {
        const { item, price, person } = check[i];
        if (itemizedCheck.hasOwnProperty(person)) {
            itemizedCheck[person].items.push({item, price});
            itemizedCheck[person].totalPrice += parseFloat(price);
        } else {
            itemizedCheck[person] = {items: [{item, price}], totalPrice: parseFloat(price)};
        }
    }
    return itemizedCheck;
}