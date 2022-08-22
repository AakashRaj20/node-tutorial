// different methods for importing modules in nodejs

const names = require('./4-names')
const sayHi = require('./utils')
require('./7-sumFun')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
