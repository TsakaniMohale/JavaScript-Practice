const marks = [10,20,30,40];
const results = marks.reduce((accumulator,markValue)=>{
    return accumulator + markValue
})

console.log(results)