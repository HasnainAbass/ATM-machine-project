#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 110101;
let pinAnswer = await inquirer.prompt({
    message: " Please Enter your pin Number ?",
    name: "pin",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    let operatorAns = await inquirer.prompt({
        message: "please select option",
        name: "operation",
        type: "list",
        choices: ["500", "1000", "3000", "5000", "10000", "withdraw", "check your Balance"]
    });
    // Fast Amount section!
    if (operatorAns.operation === "500" ||
        operatorAns.operation === "1000" ||
        operatorAns.operation === "3000" ||
        operatorAns.operation === "5000" ||
        operatorAns.operation === "10000") {
        let fastCash = await inquirer.prompt({
            message: "Are you shour : you say (YES) or (NOT) !",
            name: "option",
            type: "list",
            choices: ["YES", "NOT"]
        });
        if (fastCash.option === "YES") {
            myBalance -= operatorAns.operation;
            console.log(`Your Remaining (current) Balance is ${myBalance}`);
            console.log(`Thanks for visiting to your (HBL) Branch !`);
            console.log(`For servises (complane) or more informations please contact Us : Helpline:Email addres... (hasnainabass243@gmail.com)!`);
        }
        else if (fastCash.option === "NOT") {
            console.log(`Please Re-enter yor withdraw Amount ? again !`);
            console.log("Thanks ! ");
        }
    }
    // withdraw  section!
    if (operatorAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            message: "Please enter your Amount !",
            name: "amount",
            type: "number"
        });
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your Remaining (current) Balance is ${myBalance}`);
            console.log(`Thanks for visiting to your (HBL) Branch !`);
            console.log(`For servises (complane) or more informations please contact Us : Helpline:Email addres... (hasnainabass243@gmail.com)!`);
        }
        else {
            console.log(`you Don't Withdraw ${amountAns.amount} amount`);
            console.log(`Yor current Balance is(${myBalance}) ! please Enter Amount under the (Current Balance)`);
            console.log(`please Wihtdraw again Thanks!`);
        }
    }
    else if (operatorAns.operation === "check your Balance") {
        console.log(`Your current Balance is ${myBalance}`);
        console.log(`Thanks for visiting to your (HBL) Branch !`);
        console.log(`For servises (complane) or any informations please contact Us : Helpline:Email addres... (hasnainabass243@gmail.com)!`);
    }
}
else {
    console.log(`your pin Number is incorrect please try again !`);
}
