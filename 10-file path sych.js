const {readFileSync,writeFileSync}=require('fs')
const path=require('path')
let a=path.join('content','subfolder','first.txt')
let b=path.join('content','subfolder','second.txt')
let makePth=(link)=>{
    
    for (let i=0;i<link.length;i++){
    if (link[i]==='\\'){        
        link=link.replace("\\",'/')        
    }
             
}
return link

}
a=makePth(a)
b=makePth(b)
 a1=`./${a}`
b1=`./${b}`
const first=readFileSync(a1,'utf-8')
const second=readFileSync(b1,'utf-8')

writeFileSync('./content/subfolder/result-writesync.txt',`here is the result: ${first},${second}`,{flag:'a'})
module.exports={a1,b1}
console.log(b)