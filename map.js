
// Map
let num=[1,23,45,66];
a=num.map((values,index,array)=>{
    console.log(index,values,array)
    return values+1;
})
console.log(num)