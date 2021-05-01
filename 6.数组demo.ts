let numbers:number[] = [1,2,3,4,5,6,7,8,9,10,0]
// 1. 求数组中所有元素的和
// 2. 找出最大值
// 3. 找出不为零的元素
let sum:number = 0
let max:number = 0
numbers.forEach( (item,index) => {
    sum += item   

    if ( numbers[index] <= numbers[index + 1] ) {
        max = numbers[index+1]
    }

    if ( item != 0 ){
        console.log(item);
    }
}) 
console.log('------------');
console.log(sum);
console.log(max);