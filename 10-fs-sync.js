const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs'); // another way for const {readFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the results ${first}, ${second}`, {flag: 'a'}
) 
//  {flag: 'a'} is to append to the existing file