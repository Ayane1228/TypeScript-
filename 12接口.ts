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
