// Async fs

const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./subfolder/first.txt','utf8', (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./subfolder/second.txt', 'utf8', (err, result) => {
        if(err){
        console.log(err)
        return
    }
    const second = result
    writeFile(
        './subfolder/result-async.txt',
        `here is the result : ${first}, ${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('ending the task')
        }
    )
    })
})
console.log('starting new task')
