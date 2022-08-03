// const somename=require('./4-names')
// const b=require('./5-names')
// const alt=require('./6-alternative')
// require('./7-mind grenade')
/* console.log(somename)
b("ngocnguyen")
console.log(alt) */

/* const os=require('os')
const user=os.userInfo()
console.log(user)

console.log(`the System uptime is ${os.uptime()} seconds`)
const currentOs={
    name: os.type(),
    release: os.release(),
    mem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOs) */

const path=require('path')
console.log(path.sep)
const filepath=path.join('content','subfolder','text.txt')
const absolute=path.resolve(__dirname,filepath)
console.log(absolute)