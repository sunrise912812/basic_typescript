interface Rect{
    readonly id : string // readonly указывает что поле только для чтения
    color?: string // ? - указывет что поле не обязательно для заполнения
    size : {
        width : number
        height : number
    }
}

const rect1 : Rect = {
    id : '12345',
    size : {
        width : 20,
        height : 30
    },
    color : '#ccc'
}

const rect2 : Rect = {
    id : '123',
    size : {
        width : 50,
        height : 70
    }
}

rect2.color = 'black' 

const rect3 = {} as Rect
const rect5 = <Rect>{}

interface RectWidthArea extends Rect{
    getArea : ()=> number //Указывает тип данных стрелочная фунция затем указываем что будет возвращён тип данных number
}

const rect7 : RectWidthArea = {
    id : '1',
    size : {
        height : 10,
        width : 20
    },
    getArea() : number{
        return this.size.width * this.size.height
    }
}

interface IClock{
    time : Date
    setTime(date : Date) : void
}

class Clock implements IClock{ //Имплементируем класс на основе интерфейса IClock
    time : Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

interface Styles{
    [key : string] : string // Указывает тип ключа string и тип значения string, после этого ко всем ключам привяжется нужный тип что бы несколько раз не дублировать код
}

const css : Styles = {
    border : '1px solid black',
    marginTop : '2px',
    borderRadius : '5px'
}