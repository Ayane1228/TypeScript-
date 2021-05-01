// 计算三角形面积
// 公式： 1/2 * 高 * 底

function triangularArea(height,bottom):number{
    return 0.5*(height * bottom)
}

console.log(triangularArea(5,10));
    
// 比较两个数中较大的值

function getMax( num1, num2 ):number {
    return num1 > num2 ? num1 : num2
}
console.log(getMax(1,2));
