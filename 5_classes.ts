class TypeScript{
    version : string

    constructor(version : string){
        this.version = version
    }

    info(name : string){
        return `[${name}] : TypeScript version is ${this.version}`
    }
}

//class Car{
//    readonly model : string
//    readonly numberOfWheels : number = 4

//    constructor(theModel : string){
//        this.model = theModel // Если поле readonly то менять его в классе можно только в конструкторе
//    }
//}

class Car{
    readonly numberOfWheels : number = 4
    constructor(readonly model : string){} // Можно указать модификатор внутри конструктора, так запись получится короче
}

//============= Модификаторы

class Animal{
    protected voice : string = '' // protected - поле доступно для класса и для всех классов которые от него наследуются
    public color : string = 'black' // public - по умолчанию

    private go() : void{ //private - доступны только в том классе в котором они определены
        console.log('Go')
    }

    public go2() : void{
        this.go()
    }
}

class Cat extends Animal{
    public setVoice(voice : string) : void{
        this.voice = voice
    }
}

const cat = new Cat()
//cat.voice = '' - работать не будет т.к поле voice protected и для instance уже не доступно
cat.color = 'orange' // Доступно для instance т.к имеет модификатор public
console.log(cat.color)
cat.setVoice('test')
cat.go2()

//============= Абстрактные классы

abstract class Component{
    abstract render() : void
    abstract info() : string
}

class AppComponent extends Component{
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info'
    }
}