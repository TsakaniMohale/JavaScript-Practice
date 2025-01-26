const age = [45,39,40,30]
const allAge = age.reduce((accumulator,markValue)=>{
    return accumulator + markValue
})
console.log(allAge)