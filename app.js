export function processOrder(data) {
    // some logic...
    const paymentInfo = processPayment(); // process payment needs to be mocked to ensure isolation
    return paymentInfo;
}

function processPayment(amount) {
    // API call to external payment gateway
    return { id: '123', amount: amount };
}


export function greet(name) {
    return `Hello, ${name}!`;
}

export function greetInRussian(name) {
    return `привет, ${name}!`;
}