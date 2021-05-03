// enum Gender { Femle,Male }
// let userGender:Gender = Gender.Femle
// console.log(userGender) // 0
// userGender = Gender.Male
// console.log(userGender) // 1

// 字符串枚举
enum Gender { 
    Femle = '女',
    Male = '男' 
}
let userGender:Gender = Gender.Femle
console.log(userGender) // 女
userGender = Gender.Male
console.log(userGender) // 男