console.log("hello world");

let product = (a,b) =>{
    return a*b
}
console.log(product(2,3))

const person = {
    name:"Mark",
    age:20,
    greet: function(){
        console.log("hello I am "+this.name+"my age is "+this.age)
    }

}
person.greet()

const array =['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']


console.log(array.map((num)=>{
    if(num==" "){
        return "empty string"
    }else{
        return num
    }
}))

