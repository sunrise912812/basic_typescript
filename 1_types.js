var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.5;
var num = 3e10;
var message = 'Hello TypeScript';
var numberArray = [1, 1, 2, 3, 5, 8, 13, 21]; // Создаем числовой массив
var numberArray2 = [1, 1, 2, 3, 5, 8, 13, 21]; // Создаем числовой массив 2 способ (generic)
var words = ['Hello', 'TypeScript'];
var words2 = ['Hello', 'TypeScript'];
//Tuple
var contact = ['Pavel', 87472660556]; //Создаем массив с несколькими типами
//Any
var variable = 42; //Если необходимо изменять тип указываем тип any
variable = 'string';
//Function
function sayMyName(name) {
    console.log(name);
}
sayMyName('Pavel');
//Never
function throwError(mesage) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
var login = 'admin';
var id1 = 1;
var id2 = 'one';
var email = 'pavel.bazarkin@mail.ru';
