# TypeScript

TypeScript相比于JavaScript主要是多了Type和一些接口功能，TS是JS的一个超集。

# 第一天

## 安装

终端输入`cnpm i typescript -g`,安装后可以通过tsc命令将TypeScript转为JavaScript。

## 第一个TS文件

- 创建文件`hello.ts`文件。

- 文件输入代码

  ```typescript
  console.log('Hello TypeScript')
  ```

- 终端输入 `tsc hello.ts`,将TS文件转为JS文件

- 终端输入`node hello.js`，在node环境中执行JS代码。

## 简化执行TypeScript

每次都需要将TypeScript代码转为JS代码之后再执行，过于繁琐。因此需要简化执行TypeScript代码的过程。

我们可以使用ts-node这个包帮助我们自动执行这一转换过程(不会再生成JS文件)。

- 安装：终端输入`cnpm i ts-node -g `
- 使用：终端输入`ts-node hello.ts`

> ```typescript
> console.log('hello typescript')
> ```
>
> 这里的console表示控制台，log表示日志

# 第二天



## 变量

变量：可以**变化**的**存储**的**数据**的容器



## 变量的使用

1.声明变量并**指定类型**

```typescript
let age：number；
```

2.给变量赋值

```typescript
age = 18
```

3.变量是可以变化（可以重新赋值）

```typescript
age = 19
```



## 变量的初始化

声明变量的同时进行赋值

```typescript
let Name :string = '王磊';
console.log(Name);
```



## 类型注解

类型注解：是一种为变量添加类型约束的方式

> 约定了什么类型，将只能给变量赋什么类型的值



## 变量的命名规则和规范

### 命名规则

变量名称只能出现：数字、字母、下划线（_）、美元符号（￥）、并且**不能以数字开头**。

> 变量名称区分大小写

### 命名规范

1.变量名称要有意义，顾名思义。

2.推荐使用驼峰命名法（首字母小写，后面每个单词首字母大写）



## 交换变量（demo）

```typescript
let first:string = '第一个值'
let second:string = '第二个值'
let temp:string

console.log(first);
console.log(second);
console.log('---------------');

temp = first 
first = second
second = temp
console.log(first);
console.log(second);
```

## 数据类型

TypeScript中数据类型主要分为两类：1.原始数据类型。2.对象类型（复杂数据类型）

常见的原始数据类型有5个：number / string / boolean / undefined / null



## number（数字类型）

number包含整数值和浮点型值。

`number`类型注解`:number`

```typescript
let age:number = 18
```



## string(字符串类型)

字符串：由零个或多个字符串串联而成的，用来表示文本信息。

`string`类型注解：`:string`

```typescript
let hello:string = 'Hello String'
```



## boolean（布尔类型）

用来表示真或假。

只有两个值，分别是：true（真）和false（假）。

`boolean`类型注解`：boolean`

```typescript
let study:boolean = true
```



## undefined、null

`undefined`类型的值为：undefined。

`null`类型的值为：`null`.

类型注解：`:undefined`,`null`。



共同特点：只有一个值，即为本身。

不同点：

`undefined`:表明已声明但未赋值的变量值（找不到值）。

`null`:表明声明了变量且已赋值，值为`null`(能找到值，值就是`null`)。



# 第三天

## 运算符

运算符也叫作操作符，用来实现赋值、算数运算、比较等功能的符号。

常见的运算符：

- 算数运算符
- 赋值运算符
- 递增/递减运算符
- 比较运算符
- 逻辑运算符



## 算数运算符

算数运算符包含： **+  -  /  ***

算数运算符：进行算数运算时使用的符号，用于两个数值之间的计算。

> ’+‘也能用在许多其他地方，比如字符串拼接。
>
> ```typescript
> console.log('周杰' + '伦')
> ```
>
> 当加号两边只要有一边是字符串时，都会执行字符串拼接。
>
> ```typescript
> console.log( 1 + 2 ) // 3
> console.log( 1 + '2') // 12
> console.log( '1' + 2) // 12
> ```



## 赋值运算符

赋值运算符：将等号右边的值赋值给它左边的变量，比如：等号（ = ）。

```typescript
let age：number = 18
```

除了等号（ = ），还有：加等（ += ）、减等（ -= ）、乘等（ *= ）、除等（ /= ）。

```typescript
age *= 19
```

这一句相当于

```typescript
age = age * 18
```



## 自增、自减运算符

自增( ++ ) 相当于（ +=1 ）的简写。

> 自减( -- ) 相当于（ -=1 ）的简写。
>
> ```typescript
> console.log(a++)
> ```
>
> 相当于
>
> ```typescript
> a += 1 
> console.log(a)
> ```
>
> 相当于
>
> ```typescript
> a = a + 1
> console.log(a)
> ```



## 比较运算符

比较运算符：用于比较两个数据的值，并返回其比较的结果。结果为布尔类型。

比较运算符有六个：

- 大于（ > ）

- 大于等于（ >= ）

- 小于( < )

- 小于等于( <= )

- 等于( === )

- 不等于( !== )

  

## 逻辑运输符

与：两个条件同时满足，用 && 表示。当两边的值同时为true，结果才为true；否则为false。

或：只要有一个条件满足，用 || 表示。当两边的值只有有一个为true，结果就为true；否则为false。

非：取反，用 ！表示。会将 true 变为 false ，将 false 变为 true。

逻辑运算符通常用在布尔类型的计算，并且结果也是布尔类型。



# 第四天



## 条件语句

条件语句：根据判断条件的结果（真或假），来执行不同的代码，从而实现不同的功能。

> 条件语句也叫分支语句，不同的情况就是不同的分支。

### if语句

if语句用于实现条件判断。

语法：

```
if ( 判断条件 ) {
	条件为真时，执行的代码
}
```

判断条件：布尔类型（ true 或 false ）

### else语句

else语句必须配合 if语句 使用，else语句 表示条件为假时，要执行的代码

```
if ( 判断条件 ) {
	条件为真时，执行的代码
} else {
	条件为假时，执行的代码
}
```



## 三元运算符

三元运算符作用：根据判断条件的真假，得到不同的结果。

语法

```
结果 = 判断条件 ？ 值1 ： 值2 
```

当判断条件为真时，结果为 值1

当判断条件为假时，结果为 值2

> 得到结果的类型由值1和值2的类型决定的。



## 循环语句

循环语句：用来重复执行某件事。

### for循环

for循环的组成：

1. 初始化语句：声明计数器变量用来记录循环次数（执行一次）
2. 判断条件:判断循环次数是否达到目标次数
3. 计数器更新：完成一次循环就让计数器加1
4. 循环体：循环的代码，也就是要重复做的事。

### for循环的基本使用

语法形式

```
for( 初始化语句；判断条件；计数器更新) {
	循环体
}
```

初始化语句：声明计数器变量，记录循环次数。

判断条件：判断循环次数是否达到目标次数。

计数器更新：计数器数量加1

循环体：重复执行的代码，也就是要重复做的事。

```typescript
for( let i:number = 1; i <= 3; i++ ){
    console.log('我不相信');
}
```

### for循环的执行过程

1. 初始化代码：只会执行一次
2. 重复执行的部分：判断条件、循环的执行代码、计数器更新

### DEMO

终端中打印 1~5

```typescript
// 打印 1~5
for( let i:number = 1; i<=5; i++){
    console.log(i); 
}
```

打印正在吃第几个包子

```typescript
// 打印正在吃第几个包子
for( let i:number = 1; i<=5; i++){
    console.log( '正在吃第' + i + '个包子' ); 
}
```

计算1~100之间数字的和

```typescript
// 计算1~100的和
let sum:number = 0
for( let j:number = 1; j <= 100; j++ ){
    sum += j
}
console.log(sum);
```



### break和continue

break和continue常在循环语句中，用来改变循环的执行过程。

 break能够让循环提前结束。（终止循环）

```typescript
for( let i:number = 1; i<=5; i++){
    if ( i === 3 ) {
        break;
    }
    console.log( '正在吃第' + i + '个包子' ); 
}
```

continue能让循环间断执行（跳过本次循环，继续下一次循环）

```typescript
for( let i:number = 1; i<=5; i++){
    if ( i === 3 ) {
        console.log('这个包子不好吃');
        continue;
    }
    console.log( '正在吃第' + i + '个包子' ); 
}
```



## 数组

数组：用于存储任意多个数据的集合。

```typescript
let names：string[] = ['迪丽热巴','古力娜扎','马尔扎哈']
```

### 创建数组

数组的类型注解由两部分组成： 类型 + [ ]  。类型表示数组中的数据的类型。

多个元素间用 ， 分隔。

数组中的每一个内容。

创建数组的两种语法形式。

1. 语法

   ```typescript
   let names:string[] = []
   ```

   创建了一个空数组。

2. 语法

   ```typescript
   let names:string[] = new Array()
   ```

   功能与语法1相同

   有元素时的创建方式：

   ```typescript
   let names:string[] = new Array('迪丽热巴','古力娜扎','玛尔扎哈')
   ```

### 数组长度和索引

数组长度：表示数组中元素的个数，通过数组的`length`属性来获取。

数组中每个元素都有自己的序号。

我们把数组中元素的序号称作：索引（下标），数组中的元素和索引一一对应。

> 数组的索引从0开始。

### 数组的取值和存值

#### 获取元素

从数组中获取到某一个元素的值就是从数组中取值。

:语法`数组名称[索引]`

```typescript
let names:string[] = ['迪丽热巴', '古力娜扎', '玛尔扎哈']
console.log(names[2]);
```

#### 修改元素

修改数组中的某个元素的值，就要使用数组存值。

```typescript
let names:string[] = ['迪丽热巴', '古力娜扎', '玛尔扎哈']
names[2] = '刘亦菲'
console.log(names[2]);
```

#### 添加元素

可以通过索引进行添加元素

语法`数组名称[索引] = 新值`，若索引不存在就是自动添加元素，

```typescript
let names:string[] = ['迪丽热巴', '古力娜扎', '玛尔扎哈']
names[2] = '刘亦菲'
names[3] = '马尔扎哈'
names[names.length] = 'gakki'
console.log(names);
```

### 遍历数组

将数组中的每一个元素挨个获取一次。

1. for循环

```typescript
let names:string[] = ['迪丽热巴', '古力娜扎', '玛尔扎哈']
names[2] = '刘亦菲'
names[3] = '马尔扎哈'
names[names.length] = 'gakki'
for ( let i:number = 0; i < names.length; i++) {
    console.log(names[i]);
}
```

#### demo

1. 求数组中所有元素的和
2. 找出最大值
3. 找出不为零的元素

```typescript
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
```

## 函数

函数的使用分为两步

1. 声明函数
2. 调用函数

### 声明函数

```typescript
function 函数名称() {
	函数体
}
```

> 函数名称：推荐以动词作为开头，因为函数表示做一件事，表示实现一个功能。
>
> 函数体：要实现功能的代码，复用的代码，

### 调用函数

```typescript
函数名称()
```

### demo求和函数

```typescript
let num1:number = 1
let num2:number = 2
function sum(num1:number,num2:number){
    console.log(num1 + num2);
}
sum(num1,num2)
```

### 函数参数

函数参数分为形参和实参。

- 形参：声明函数时指定的参数，放在声明函数的小括号中。

  ```typescript
  function sign(songName:string){}
  ```

  语法：形参名称:类型注解，类型变量声明，但不赋值

  作用：指定函数中接受的参数。

  然后，可以在函数体中，像使用变量一样使用形参。

  

- 实参：调用函数时传递给函数的参数。会在函数体中取代形参

> 1. 多个参数之间可以用 ， 分隔。
> 2. 形参和实参间需要一一对应。

### demo计算数组中所有元素的和的函数

```typescript
function arraySum( arr:number[]){
    let sum:number = 0
    arr.forEach( (item) => {
        sum += item
    })
    console.log(sum);
}
arraySum([1,1,1,1,1,1,1,1,1,1,1,11,123])
```

### 函数返回值

返回值的作用：将函数内部计算的结果返回，以便于使用该结果继续参与其他的计算。

> 如果没有指定返回值，那么函数返回默认为 void （空）

### 返回值的声明

1. 指定返回值类型

   需要在声明函数的（）后面，通过 `:类型注解`指定

2. 指定返回值

   在函数体中使用`return`关键字返回返回值。

```typescript
function sum():number {
    return sum；
}
```

### 返回值的使用

1. 使用变量接收函数返回值

   ```typescript
   let result：类型注解 = 函数名()
   ```

2. 直接使用函数调用的结果

   ```typescript
   console.log(10 * 函数名() )
   ```

   

