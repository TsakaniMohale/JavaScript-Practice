const person = {firstName:"Tsakani",
                lastName:"Mohale",
                age:33,
                id:151550,
                eyeColor:"brown",
                fullName:function(){
    return person.id;
                }
            } ;
console.log(`The person with the id:${person.id},also has ${person.eyeColor} eyecolor`)