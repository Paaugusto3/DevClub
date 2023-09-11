const student={
    name: 'Paulo',
    age: 23,
    genre:'male',
}

for(let property in student){
    console.log(`${property}:${student[property]}`)
}