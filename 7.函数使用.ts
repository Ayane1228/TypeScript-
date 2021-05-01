let num1:number = 1
let num2:number = 2
function sum(num1:number,num2:number){
    console.log(num1 + num2);
}
sum(num1,num2)

// demo计算数组中所有元素的和的函数
function getArraySum( arr:number[]){
    let sum:number = 0
    arr.forEach( (item) => {
        sum += item
    })
    console.log(sum);
}
getArraySum([1,1,1,1,1,1,1,1,1,1,1,11,123])