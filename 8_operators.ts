interface Person{
    name : string
    age : number
}

type PersonKeys = keyof Person // 'name', 'age' - keys вернет ключи из интерфейса Person

let key : PersonKeys = 'name'
key = 'age'

type User = {
    _id : number
    name : string
    email : string
    createdAt : Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // Exclude исключает поля _id, createdAt из нового типа созданного на основе типа User, с помощью keyof проходимся по ключам из типа User

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // Pick указывает какие поля нужно включить из типа User в нашем случае это поля name, email

let user1 : UserKeysNoMeta = 'name'
//user1 = '_id' - работать не будет так как мы выше исключили из типа поле _id