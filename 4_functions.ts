function add(a : number, b : number) : number{
    return a + b
}

function toUpperCase(str : string) : string{
    return str.trim().toUpperCase()
}

interface MyPostion{
    x : number | undefined
    y : number | undefined
}

interface MyPostionWidthDefault extends MyPostion{
    default : string
}

function postion() : MyPostion
function postion(a : number) : MyPostionWidthDefault
function postion(a : number, b : number) : MyPostion

function postion(a? : number, b? : number){ //? cставим так как параметры не обязательны и функция может вызываться без параметров
    if(!a && !b){
        return {x : undefined, y : undefined}
    }
    if(a && !b){
        return {x : a, y : undefined, default : a.toString()}
    }
    return {x : a, y : b}
}

console.log('Empty: ', postion())
console.log('One param: ', postion(100))
console.log('Two params: ', postion(100, 200))