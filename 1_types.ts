const isFetching : boolean = true
const isLoading : boolean = false

let int : number = 42
const float : number = 4.5
const num : number = 3e10

const message : string = 'Hello TypeScript'

const numberArray : number[] = [1, 1, 2, 3, 5, 8, 13, 21] // Создаем числовой массив
const numberArray2 : Array<number> = [1, 1, 2, 3, 5, 8, 13, 21] // Создаем числовой массив 2 способ (generic)

const words : string[] = ['Hello', 'TypeScript']
const words2 : Array<string> = ['Hello', 'TypeScript']

//Tuple
const contact : [string, number] = ['Pavel', 87472660556] //Создаем массив с несколькими типами

//Any
let variable : any = 42 //Если необходимо изменять тип указываем тип any
variable = 'string'

//Function

function sayMyName(name : string) : void{ //Тип void указывает что функция ничего не возвращает
    console.log(name)
}

sayMyName('Pavel')

//Never
function throwError(mesage : string) : never{ //Указываем тип never если компилятор явно видит что будет выброшена ошибка
    throw new Error(message)
}

function infinite() : never{ //Указываем тип never так как функция будет выполнять постоянно
    while(true){

    }
}

//Type - создание собственных типов

type Login = string

const login : Login = 'admin'
//const login2 : Login = 1 - работать не будет так как Login у нас строка

type ID = number | string //Тип ID либо число, либо строка

const id1 : ID = 1
const id2 : ID = 'one'
//const id3 : ID = true - работать не будет так как ID у нас число или строка

type SomeType = string | null | undefined // Тип SomeType может принимать значение либо string, null, undefined 

const email : SomeType = 'pavel.bazarkin@mail.ru'