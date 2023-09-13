// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if(name === undefined) {
        return "Hello, World!";
    }
    if(typeof name !== "string") {
        return "Hello, World!";
    }
    return `Hello, ${name}!`;
}