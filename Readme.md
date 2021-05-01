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



