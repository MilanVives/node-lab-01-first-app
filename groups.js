// Lab 01: assign a student to one of seven groups based on their date of birth.
// Run it with: node groups.js
const readline = require('node:readline');
const quotes = require('./quotes.js');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// TODO R1: ask "Insert date of birth (YYYYMMDD): " with rl.question
//          and print "You are assigned to group <n>" where n = dateOfBirth % 7
// TODO R2: print "Your quote of the day is:" followed by quotes[n]
// TODO R3: if the input is not exactly 8 digits, print "Invalid date of birth"
//          and set process.exitCode = 1
rl.close();
