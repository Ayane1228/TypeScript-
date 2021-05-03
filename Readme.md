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

判断条件：布尔类型（ true 或 false ）。

### else语句

else语句必须配合 if语句 使用，else语句 表示条件为假时，要执行的代码。

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

当判断条件为真时，结果为 值1。

当判断条件为假时，结果为 值2。

> 得到结果的类型由值1和值2的类型决定的。



## 循环语句

循环语句：用来重复执行某件事。

### for循环

for循环的组成：

1. 初始化语句：声明计数器变量用来记录循环次数（执行一次）。
2. 判断条件:判断循环次数是否达到目标次数。
3. 计数器更新：完成一次循环就让计数器加1。
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

计数器更新：计数器数量加1。

循环体：重复执行的代码，也就是要重复做的事。

```typescript
for( let i:number = 1; i <= 3; i++ ){
    console.log('我不相信');
}
```

### for循环的执行过程

1. 初始化代码：只会执行一次。
2. 重复执行的部分：判断条件、循环的执行代码、计数器更新。

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

   功能与语法1相同。

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

语法`数组名称[索引]`：

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

可以通过索引进行添加元素。

语法`数组名称[索引] = 新值`，若索引不存在就是自动添加元素。

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

1. 求数组中所有元素的和。
2. 找出最大值。
3. 找出不为零的元素。

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

函数：声明一次但却可以调用任意多次的一段代码。

函数的使用分为两步：	

1. 声明函数。
2. 调用函数。

### 声明函数

```typescript
function 函数名称() {
	函数体
}
```

> 函数名称：推荐以动词作为开头，因为函数表示做一件事，表示实现一个功能。
>
> 函数体：要实现功能的代码，复用的代码。

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

  语法：形参名称:类型注解，类型变量声明，但不赋值。

  作用：指定函数中接受的参数。

  然后，可以在函数体中，像使用变量一样使用形参。

  

- 实参：调用函数时传递给函数的参数。会在函数体中取代形参。

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

> 如果没有指定返回值，那么函数返回默认为 void （空）。

### 返回值的声明

1. 指定返回值类型：

   需要在声明函数的（）后面，通过 `:类型注解`指定

2. 指定返回值：

   在函数体中使用`return`关键字返回返回值。

```typescript
function sum():number {
    return sum；
}
```

### 返回值的使用

可以通过两种方式接收返回值。

1. 使用变量接收函数返回值：

   ```typescript
   let result：类型注解 = 函数名()
   ```

2. 直接使用函数调用的结果：

   ```typescript
   console.log(10 * 函数名() )
   ```


### 函数demo

计算三角形面积：

> 公式： 1/2 * 高 * 底

```typescript
function triangularArea(height,bottom):number{
    return 0.5*(height * bottom)
}

console.log(triangularArea(5,10));
```

比较两个数中较大的值：

```typescript
function getMax( num1, num2 ):number {
    return num1 > num2 ? num1 : num2
}
console.log(getMax(1,2));
```

> return其他说明
>
> 1. `return`可以将函数内部的计算结果返回。
> 2. 终止函数代码执行，即：`return`后面的代码不会执行。
> 3. `return`只能在函数中使用。
> 4. `return`可以单独使用（后面不跟内容），用来刻意终止函数执行。

# 第五天

## 变量作用域

变量作用域：代码中定义变量的区域，它决定了变量的使用范围。

在TS(JS)中，函数可以形成作用域，叫做：函数作用域。

根据函数作用域范围的不同，变量可以分为两种：1.局部变量 2.全局变量。

局部变量：表示在函数内部声明的变量，该变量只能在函数内部使用。

```typescript
function fn() {
	// 变量 num 是局部变量
    let num:number = 1
    // 这里能访问到变量num
	console.log(num)
}
fn()
// 这里不能访问到局部变量
console.log(num)
```

全局变量：在函数外部声明的变量，该变量在当前ts文件的任何地方都可以使用。

```typescript
// 变量 num 是全局变量
let num:number
function fn() {
    num = 1
    // 这里能访问到变量num
	console.log(num)
}
fn()
// 这里能访问到全局变量
console.log(num)
```

## 对象

对象：一组相关属性和方法的集合，并且是无序的。

在TS中，如果要描述一个事物或一组相关数据，就可以用对象来实现。

创建对象语法：

```typescript
let person = {}
```

此处的 { }表示对象，这个对象没有属性或方法，这个对象就是一个空对象。

对象中的属性或方法，采用的是 键值对的形式。键、值之间使用冒号 ： 来配对。

```typescript
let person = {
	key1：value1,
	key2: value2
}
```

属性和方法的区别：值是不是函数。如果是，就称为方法；否则，就是普通属性。

```typescript
let person  = {
	name:'男孩',
	say:function(){
		console.log('唱歌')
	}
}
```



> 函数作为方法时，可以省略function后面的函数名称，也叫做匿名函数。

## 接口

### 对象属性的类型注解

TS中的对象是结构化的，结构简单来说就是对象有什么属性或方法。

在使用对象前，就可以根据需求，提前设计好对象的结构。

对象的类型注解是为了约束对象的结构。

对象的类型注解的语法**类似**对象设置属性的语法。

> 键值对中的值是类型	。
>
> 多个键值对之间用 ； 隔开，并且分号可以省略。

```typescript
// 此处的{}表示类型注解
let person:{
	name:string;
	age:number
}
// 此处的{}表示TS中的具体的对象值
person = {
	name:'张三',
	age:18
}
```

### 对象方法的类型注解

对象方法的类型注解就是方法的**形参**和**返回值**的类型。

语法：

```
let 对象 ：{
	方法名: ( 形参 ) => 返回值的类型
}
```

```typescript
let person:{
	// 表示参数和返回值均为空
    sing:() => void
    // 表示 参数为空 返回值的类型注解为字符串类型
	singHi:() => string
    // 表示形参为 song且类型注解为string，同时返回值为 string类型
	singSong: ( song:string ) => string
}
```

使用：

```typescript
let person:{
	// 表示参数和返回值均为空
    sing:() => void
    // 表示 参数为空 返回值的类型注解为字符串类型
	singHi:() => string
 	// 表示形参为 song且类型注解为string，同时返回值为 string类型
	singSong: ( song:string ) => string
}

person = {
    sing:() => {
        console.log('这个方法的返回值为void');
    },
    singHi:() => {
        return '返回值必须是一个string'
    },
    singSong:( song ) => {
        return '返回值必须是字符串' + song
    }
}
```

### 接口的使用

直接在对象后面写类型注解的坏处：

1. 代码结构不简洁。
2. 无法复用类型注解。

这里就可以使用接口。

接口：为对象的类型注解命名，并为代码建立契约来约束对象的结构。

语法：

```typescript
// 创建接口
interface person {
	name:string
	age:number
	sing:( song:string ) => string
}
// 使用接口
let person:person = {
    name:'刘亦菲',
    age:18,
    sing:( song ) => {
        return '我会唱' +  song + '这首歌'
    }
}
console.log(person);

console.log(person.sing('心悸'))

```

## 对象的取值和存值

获取对象中的属性：访问属性。

获取对象中的方法：调用方法。

1. 通过 `. `获取对象的属性。
2. 通过`对象.方法()`调用方法。

存值可以通过获取对象中的值后重新赋值。

## 内置对象

内置对象指编程语言自带的对象或其他人创建的对象（第三方的API）。

## 类型推论

在TS中某些没有明确指出类型的地方，类型推论会帮组提供类型。

发生类型推论的2种常见场景：

1. 声明变量并初始化时。
2. 决定函数返回值时。

## 浏览器中使用ts代码

浏览器中无法直接运行TS代码，需要先转为JS代码才可以。

这里可以使用`tsc --watch index.ts`监视TS代码的变化。

> 表示监视 `index.ts`文件，只要重新保存了ts文件，就会自动调用tsc将TS代码转为JS代码。



## 类型断言

问题：通过`queryselector()`通过id选题器获取DOM元素时，拿到的元素类型都是Element。

因为无法根据id来确定元素的类型，所以该方法就返回了一个宽泛的类型：Element类型。

但由于Element类型只包含所有元素共有的属性和方法（id、class）等，无法获取到`img`元素的`src`属性。

所以就要使用类型断言：

类型断言：可以**手动指定**一个更加**具体的类型**。

语法

```typescript
// 获取id为image的元素为img并手动确定img的类型为HTMLImageElement
let img = querySelector('#image') as HTMLImageElement
```

> 我们可以通过`console.dir()`获取从它的原型`_proto_`获取到元素的具体类型。

> 使用函数声明的形式时：使用事件对象参数时，应该指定类型注解**`event:MouseEvent`**，否则，访问事件对象的属性时没有任何提示。

```typescript
// 获取当前触发点击事件的dom元素 
btn.addEventListener('click',handleClick)
function handleClick(event:MouseEvent){
	console.log(event.target)
}
```

# 井字棋

## 模板

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>井字棋</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>井字棋</h1>

    <div class="container">
      <!-- 游戏面板（棋盘） -->
      <div id="bord" class="game-board x">
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
        <div class="row">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </div>
      </div>

      <!-- 游戏获胜信息面板 -->
      <div id="message" class="game-message">
        <p id="winner">X 赢了！</p>
        <button id="restart">重新开始</button>
      </div>
    </div>
  </body>
</html>

```

```css
p {
  margin: 0;
}

body {
  background-color: #f9f2e7;
}

/* 标题 */
h1 {
  text-align: center;
  font-size: 60px;
  color: #477998;
}

/* 游戏内容容器 */
.container {
  position: relative;
  width: 471px;
  height: 471px;
  margin: 0 auto;
}

/* 游戏获胜信息面板 */
.game-message {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(69, 133, 136, 0.4);
  text-align: center;
}

/* winner 获胜者 */
.game-message p {
  margin: 180px 0 40px 0;
  color: #fff;
  font-size: 50px;
}

/* 重新开始游戏按钮 */
.game-message button {
  color: #517304;
  border-color: #517304;
  width: 110px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
}

/* 游戏面板棋盘 */
.game-board {
  width: 471px;
  height: 471px;
}

.game-board.x .cell:not(.x):not(.o):hover::before {
  content: 'X';
  color: lightgray;
}
.game-board.o .cell:not(.x):not(.o):hover::before {
  content: 'O';
  color: lightgray;
}

/* 棋盘 - 行 */
.row {
  display: flex;
}
.row:last-child .cell {
  border-bottom: 0;
}

/* 棋盘 - 单元格 */
.cell {
  flex: 1;
  box-sizing: border-box;
  width: 157px;
  height: 157px;
  line-height: 157px;
  border-right: 6px solid #546363;
  border-bottom: 6px solid #546363;
  text-align: center;
  cursor: pointer;
  font-size: 88px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, sans-serif;
}
.cell:last-child {
  border-right: 0;
}

/* x 玩家 */
.cell.x::before {
  content: 'X';
  color: #01a8c6;
}
/* o 玩家 */
.cell.o::before {
  content: 'O';
  color: #8fbe01;
}

```

## 单元格点击	

点击棋盘中的任意单元格，单元格默认显示x

- 获取所有单元格元素
- 给每一个单元格添加点击事件
- 给当前被点击的单元格添加类名x

```ts
/**
 * 获取所有单元格元素
 * 给每一个单元格添加点击事件
 * 给当前被点击的单元格添加类名x 
 */
const cells = document.querySelectorAll('.cell')
cells.forEach( (item) => {
    // 类型断言
    let cell = item as HTMLDivElement
    // 绑定事件
    cell.addEventListener('click',(e) => {
        // 类型断言
        let target = e.target as HTMLDivElement
        target.classList.add('x') 
    })
})
```

> 优化：防止重复点击：给事件添加`once`属性。
>
> 将函数提取出来。
>
> ```ts
> /**
>  * 获取所有单元格元素
>  * 给每一个单元格添加点击事件
>  * 给当前被点击的单元格添加类名x 
>  */
> const cells = document.querySelectorAll('.cell')
> cells.forEach( (item) => {
>     // 类型断言
>     let cell = item as HTMLDivElement
>     // 绑定事件
>     cell.addEventListener('click',clickCell,{ once:true } 
> })  
> 
> // 棋盘单元格点击事件，函数声明时要指定类型注解
> function clickCell(e:MouseEvent){
>     let target = e.target as HTMLDivElement
>     target.classList.add('x') 
> }
> ```

## 切换玩家

不能将类名写死。这里要让添加的类名不固定。

可以用一个flag值，表示当前要添加的类名是'X'还是'O'。

- 创建一个存储当前玩家的变量（currentPlayer），默认值为O
- 给添加给单元格写死的类名x，替换为currentPlayer
- 点击后currentPlayer切换为另外一个玩家
- 修改`game-board`的类名（借此修改鼠标移上去去时单元格添加的伪类）与currentPlayer一致

```ts
// 获取所有单元格
const cells = document.querySelectorAll('.cell')
// 获取鼠标移上去时的元素
const gameBord = document.querySelector('.game-board')

// 遍历单元格元素添加点击方法
cells.forEach( (item) => {
    // 类型断言
    let cell = item as HTMLDivElement
    // 绑定事件(只能触发一次)
    cell.addEventListener('click',clickCell,{ once:true })
})  

let currentPlayer:string = 'x'

// 棋盘单元格点击事件
function clickCell(e:MouseEvent){
    let target = e.target as HTMLDivElement
    // 给点击的单元格添加当前玩家的样式，点击后切换玩家
    target.classList.add(currentPlayer) 
    // 切换玩家
    // 修改当前玩家
    currentPlayer = currentPlayer ==='x' ? 'o' : 'x'
    // 移除类名、重置为当前玩家（鼠标移到棋盘上的伪类重置为当前玩家）
    gameBord.classList.remove('x','o')
    gameBord.classList.add(currentPlayer)
}

```

## 枚举

由于`string`取值宽泛，无法约束其他写错的取值（如 X O 0）。这里可以使用枚举：

枚举：变量的值只能是几个固定值中的一个。是用来组织关联数据的一种方式。

JS中是没有枚举的，TS中新增了这一功能。

创建语法：

```typescript
enum 枚举名称 { 成员1，成员2 ....}
```

```typescript
enum Player { X,O }
```

> 我们约定枚举名称和成员名称都以大写字母开头。
>
> 多个成员之间用 ， 隔开。
>
> 枚举中的成员不是键值对。

使用枚举：在声明变量中的类型注解中使用，变量赋值时使用 `. 获取枚举中的规定的值

```typescript
enum Gender { Femle,Male }
let userGender：Gender
userGender = Gender.Femle
```

> 枚举成员是只读的。只能访问，不能修改。

数字枚举：当枚举中的成员没有赋初始值时，他们的值是从0开始自增的。

```typescript
enum Gender { Femle,Male }
let userGender:Gender = Gender.Femle
console.log(userGender) // 0
userGender = Gender.Male
console.log(userGender) // 1
```

字符串枚举：枚举成员的值为字符串。使用字符串枚举时，每个成员都必须有初始值。

```typescript
enum Gender { 
    Femle = '女',
    Male = '男' 
}
let userGender:Gender = Gender.Femle
console.log(userGender) // 女
userGender = Gender.Male
console.log(userGender) // 男
```

## 使用枚举案例

- 创建字符串枚举（Player）,提供X和O两个成员。

- 将成员X的值设置为’x‘；将成员O的值设置为’O‘。

- 将变量currentPlayer的类型设置为Player枚举类型，默认为Player.X。

- 将所有的x和o用枚举成员替代。

- ```typescript
  // 获取所有单元格
  const cells = document.querySelectorAll('.cell')
  // 获取鼠标移上去时的元素
  const gameBord = document.querySelector('.game-board')
  
  //创建枚举
  enum Player {
      X = 'x',
      O = 'o'
  }
  // 遍历单元格元素添加点击方法
  cells.forEach( (item) => {
      // 类型断言
      let cell = item as HTMLDivElement
      // 绑定事件(只能触发一次)
      cell.addEventListener('click',clickCell,{ once:true } )
  })  
  
  let currentPlayer:Player = Player.X
  
  // 棋盘单元格点击事件
  function clickCell(e:MouseEvent){
      let target = e.target as HTMLDivElement
      // 给点击的单元格添加当前玩家的样式，点击后切换玩家
      target.classList.add(currentPlayer) 
      // 切换玩家
      // 修改当前玩家
      currentPlayer = currentPlayer === Player.X ? Player.O : Player.X
      // 移除类名、重置为当前玩家（鼠标移到棋盘上的伪类重置为当前玩家）
      gameBord.classList.remove(Player.X, Player.O)
      gameBord.classList.add(currentPlayer)
  }
  
  ```

  ## 游戏结果判断

  通过每个单元格元素的索引来判断游戏结果。

  |  0   |  1   |  2   |
  | :--: | :--: | :--: |
  |  3   |  4   |  5   |
  |  6   |  7   |  8   |

  获胜的结果

  - [0,1,2]
  - [3,4,5]
  - [6,7,8]
  - [0,3,6]
  - [1,4,7]
  - [2,5,8]
  - [0,4,8]
  - [2,4,6]

  将这些成功内容保存到一个大数组中。点击后进行判断。

  判断过程：遍历这个大数组，分别判断每一种情况对应的三个单元格元素，是否都是相同的X或O类名。只要存在一个满足，就成功了。

  ### 判赢函数封装

  参数：当前玩家

  返回值：布尔值

  思路：遍历判赢数组，分别判断每种情况对应的三个单元格元素，是否同时包含当前玩家的类名。

  - 使用`some()`方法遍历数组，将`some`方法的返回值作为判赢函数的返回值结果。
  - 在`some`方法的回调函数中，获取到每种获胜情况对应的三个单元格元素。
  - 判断这三个单元格元素是否**同时包含**当前玩家的类名。
  - 如果包含，说明当前玩家赢了，返回true。否则返回false，继续循环。

  ```typescript
  // 判赢数组
  let winArr = [
      [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]
  /**
  - 使用some()方法遍历数组，将some方法的返回值作为判赢函数的返回值结果。
  - 在some方法的回调函数中，获取到每种获胜情况对应的三个单元格元素。
  - 判断这三个单元格元素是否同时包含当前玩家的类名。
  - 如果包含，说明当前玩家赢了，返回true。否则返回false，继续循环。
   * @param player 
   * @returns 
   */
  // 判赢hanshu
  function checkWin(player:Player){
      return winArr.some( (item) => {
          // 在some方法的回调函数中，获取到每种获胜情况对应的三个单元格元素。
          // 先获取到每种获胜情况的索引
          // 通过这三个索引从cells中获取到单元格元素
          let cellIndex0 = item[0]
          let cellIndex1 = item[1]
          let cellIndex2 = item[2]
          // 判断是否包含当前玩家的类名
          if( hasClass(cells[cellIndex0],player) && hasClass(cells[cellIndex1],player) && hasClass(cells[cellIndex2],player)) {
              return true
          } else {
              return false
          }
          
      })
  }
  
  // 封装元素是否包含类名
  function hasClass(el:Element, name:string){
      return  el.classList.contains(name)
  }
  ```

  ### 判断平局

  创建变量（步数steps），如果step等于9，就为平局。

   

  ## 显示结果

  获取相关元素 `#message` 和 `#winner`

  ```typescript
  // 获取获胜信息相关元素
  const message = document.querySelector('#message') as HTMLDivElement
  const winner = document.querySelector('#winner') as HTMLDivElement
  ```
  
  修改dispaly属性
  
  展示获胜信息
  
  ```js
  message.style.display = 'block'
  winner.innerText = currentPlayer + '  赢了！'
  return
  ```
  
  ### 重新开始游戏
  
  获取元素
  
  ```typescript
  // 重新开始游戏
  const restart = document.querySelector('#restart') as HTMLButtonElement
  ```
  
  添加点击事件
  
  - 隐藏获胜信息
  - 重置棋盘
  - 重置当前玩家
  - 重置所有单元格
  - 重置步数
  - 重新绑定事件
  
  ```typescript
  // 点击重新开始事件
  restart.addEventListener('click',function(){
      // 隐藏获胜信息
      message.style.display = 'none'
      // 重置棋盘
      currentPlayer = Player.X
      cells.forEach( (item) => {
          item.classList.remove(Player.X,Player.O)
      })
      // 重置步数
      step = 0
      // 
  })
  ```
  
  

