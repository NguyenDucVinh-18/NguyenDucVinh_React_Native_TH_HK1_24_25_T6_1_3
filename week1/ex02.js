// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

const BMI = function(mass, height) {
    return mass / height ** 2;
}

const MarkBMI1 = BMI(78, 1.69);
const JohnBMI1 = BMI(92, 1.95);
const MarkBMI2 = BMI(95, 1.88);
const JohnBMI2 = BMI(85, 1.76);

if (MarkBMI1 > JohnBMI1) {
    console.log(`Mark's BMI (${MarkBMI1}) is higher than John's BMI (${JohnBMI1})!`);
}
else
    console.log(`John's BMI (${JohnBMI1}) is higher than Mark's BMI (${MarkBMI1})!`);

if (MarkBMI2 > JohnBMI2) {
    console.log(`Mark's BMI (${MarkBMI2}) is higher than John's BMI (${JohnBMI2})!`);
}
else
    console.log(`John's BMI (${JohnBMI2}) is higher than Mark's BMI (${MarkBMI2})!`);

