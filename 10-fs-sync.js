// sync fs
// importing fs module.
const {readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./subfolder/first.txt', 'utf8')
const second = readFileSync('./subfolder/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './subfolder/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    { flag: 'a'} //to append new line
)
console.log('ending the task')
console.log('starting the next task')