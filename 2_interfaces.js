var rect1 = {
    id: '12345',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '123',
    size: {
        width: 50,
        height: 70
    }
};
rect2.color = 'black';
var rect3 = {};
var rect5 = {};
var rect7 = {
    id: '1',
    size: {
        height: 10,
        width: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
