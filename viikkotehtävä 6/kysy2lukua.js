const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask first number
rl.question("Anna numero 1: ", (input1) => {
    const numero1 = Number(input1); // Convert to number

    // Ask second number
    rl.question("Anna numero 2: ", (input2) => {
        const numero2 = Number(input2);

        // Compare
        if (numero1 > numero2) {
            console.log("Suurempi numero on: " + numero1);
        } else if (numero2 > numero1) {
            console.log("Suurempi numero on: " + numero2);
        } else {
            console.log("Numerot ovat yhtä suuria.");
        }

        rl.close();
    });
});