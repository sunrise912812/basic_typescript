function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed();
    }
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return res.header + res.result;
    }
    else {
        return res.header + res.message;
    }
}
function setAlertType(type) {
    //...
}
setAlertType('success');
setAlertType('warning');
//setAlertType('default') - работать вызов функции не будет т.к значение default не указано в типе AlertType
