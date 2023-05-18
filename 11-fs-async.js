
const { readFile, writeFile } = require('fs')

// Here we are not adding the coding value, utf8, the output will be
// <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 66 69 6c 65>
// readFile('./content/first.txt', (err, result) => {
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log(result)
// })

// Needs to add the coding value, utf8, to display "Hello this is first file"
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result
        writeFile(
            './content/result-async.txt', 
            `Here is the result ${first}, ${second}`
        , (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result)
        })
    })
})




