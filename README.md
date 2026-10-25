# Lab 01: First Application

Write your first Node.js program: assign students to one of seven groups based on their date of birth.

## Getting started

```bash
npm install
npm test
node groups.js
```

`npm test` runs the same checks as the autograder. Run a single requirement with `node --test --test-name-pattern="^R1:" "test/**/*.test.js"`.

## Requirements

All code goes in `groups.js`. The quotes are already in `quotes.js`.

### R1: groups.js prints the group for a date of birth
**4 points**

Ask for the date of birth with `readline` (`rl.question`) using exactly this prompt:

```
Insert date of birth (YYYYMMDD): 
```

Convert the answer to a number and calculate the group with the modulus operator: `dateOfBirth % 7`. Print:

```
You are assigned to group 4
```

Example: `20201010 % 7` is `4`, `20000101 % 7` is `2`.

### R2: groups.js prints the quote of the day for that group
**3 points**

After the group, print `Your quote of the day is:` and on the next line the quote for that group: `quotes[groupNumber]`.

### R3: groups.js rejects an invalid date of birth
**3 points**

A date of birth must be exactly 8 digits (`/^\d{8}$/`). For any other input (`abc`, `2020101`, `202010100`) print `Invalid date of birth`, print no group, and set `process.exitCode = 1`.

## Expected output

```
$ node groups.js
Insert date of birth (YYYYMMDD): 20201010
You are assigned to group 4
Your quote of the day is:
Make it work, make it right, make it fast.
```

## Submitting

Commit your work and run `npm run submit`. Your score and feedback appear under **Releases** after a few minutes. You can submit as often as you like; the latest submission counts.
