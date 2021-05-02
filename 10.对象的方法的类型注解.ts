let person:{
	// 表示参数和返回值均为空
    sing:() => void
    // 表示 参数为空 返回值为字符串类型
	singHi:() => string
    // 表示形参为 song 返回值为 string类型
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