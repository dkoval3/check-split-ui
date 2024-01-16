let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const decimalToDollar = price => {
    return USDollar.format(price);
};