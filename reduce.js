//  reduce method 

let arr2=[1,1,1,1];
let arr3=arr2.reduce((a1,a2,a3)=>{
    return a1+a2-a3;
})
console.log(arr3);