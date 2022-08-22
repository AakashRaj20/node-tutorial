// import built module for file path
const path = require('path')

console.log(path.sep)

const filePath = path.join('/NODE-TUTORIAL/','subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

// return abosulte path
const abosulte = path.resolve(__dirname,'NODE-TUTORIAL', 'subfolder', 'test.txt')
console.log(abosulte)