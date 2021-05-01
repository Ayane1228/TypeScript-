let names:string[] = ['迪丽热巴', '古力娜扎', '玛尔扎哈']
names[2] = '刘亦菲'
names[3] = '马尔扎哈'
names[names.length] = 'gakki'
for ( let i:number = 0; i < names.length; i++) {
    console.log(names[i]);
}