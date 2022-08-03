const _=require('lodash')
let item=[1,[2,[3,4]]]
item=_.flattenDeep(item)
console.log(item)