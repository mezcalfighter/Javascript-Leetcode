let age =24
const name = "Kevin"
//name = "Eric"

for (let i=0; i<5;i++){
    // console.log('running from the for loop)
}

while(age<37){
    console.log("Happy birthday")
    age++
}

function addNums(a,b){
    console.log('has been called from addNums')
    return  a + b
}

const addNums2 = (a,b) => {
    console.log('called from arrow')
    return a + b
}

// if normal
if(age<30){
    console.log('younger than 30')
}else{
    console.log('older than 30')
}

// ternary
age < 30 ? console.log('younger than 30') : console.log('older than 30')

addNums(5,10)