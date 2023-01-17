var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[".concat(name, "] : TypeScript version is ").concat(this.version);
    };
    return TypeScript;
}());
//class Car{
//    readonly model : string
//    readonly numberOfWheels : number = 4
//    constructor(theModel : string){
//        this.model = theModel // Если поле readonly то менять его в классе можно только в конструкторе
//    }
//}
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    } // Можно указать модификатор внутри конструктора, так запись получится короче
    return Car;
}());
//============= Модификаторы
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // protected - поле доступно для класса и для всех классов которые от него наследуются
        this.color = 'black'; // public - по умолчанию
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    Animal.prototype.go2 = function () {
        this.go();
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
//cat.voice = '' - работать не будет т.к поле voice protected и для instance уже не доступно
cat.color = 'orange'; // Доступно для instance т.к имеет модификатор public
console.log(cat.color);
cat.setVoice('test');
cat.go2();
//============= Абстрактные классы
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is info';
    };
    return AppComponent;
}(Component));
