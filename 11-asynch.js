const {readFile,writeFile}=require('fs')
const n=require('./10-file path sych')
console.log('start')
readFile(n.a1,'utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile(n.b1,'utf-8',(err,result)=>{
        if(err){
        console.log(err)
        return
    }
    const second=result
    writeFile('./content/subfolder/result-writesync.txt',`this is 11-new ${first} ${second}`,(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        console.log('done work')

    })
    })
    console.log('new task')
})
