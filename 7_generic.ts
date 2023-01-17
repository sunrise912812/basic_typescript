const arrayOfNumbers : Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings : Array<string> = ['Hello', 'TypeScript']

function reverse<T>(array : T[]) : T[]{ // T - generic тип который будет подстраиваться под определённый тип массива
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)