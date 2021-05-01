for( let i:number = 1; i <= 3; i++ ){
    console.log('我不相信');
}

// 打印 1~5
for( let i:number = 1; i<=5; i++){
    console.log( '正在吃第' + i + '个包子' ); 
}

// 计算1~100的和
let sum:number = 0
for( let j:number = 1; j <= 100; j++ ){
    sum += j
}
console.log(sum);

for( let k:number = 1; k<=5; k++){
    if ( k === 3 ) {
        console.log('这个包子不好吃');
        continue;
    }
    console.log( '正在吃第' + k + '个包子' ); 
}