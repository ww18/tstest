var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by ww on 2018/5/23.
 */
var isBoon = false;
var num = 10;
var str = '10';
var list1 = [1, 2, 3];
var list2 = ['iwen', 'ime'];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
; //还可以修改下标
var c = Color.green; //获取下标
var is = '123';
var list = [1, 3, '232'];
var list3 = [1, 3, '232'];
function tell() {
    alert(Color[0]);
    return 'hello';
}
var add = function (n, a) {
    alert(123);
    return 'lall';
};
function hello(firstName, lastName) {
    if (lastName === void 0) { lastName = 'wenwen'; }
    return firstName + ' ' + lastName;
}
hello('hello');
function change() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg.join(' ');
}
var argumes = change('hello', 'world', 'lalal');
document.getElementById('pid').innerHTML = argumes;
//lambads就是箭头函数
var people = {
    name: ['hello', 'wenwen'],
    sayName: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 2);
            return 'sayname = ' + _this.name[i];
        };
    }
};
var newPeople = people.sayName();
//alert(newPeople());
function attr(nameorage) {
    if (nameorage && typeof nameorage === 'string') {
        alert(nameorage);
    }
    else {
        alert('other');
    }
}
//attr('string');
//attr('string','lalll');
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(school) {
        var _this = _super.call(this, 'ww', 100) || this;
        _this.school = school;
        _this.school = school;
        return _this;
    }
    Teacher.prototype.saySchool = function () {
        alert(this.name + this.age + this.school);
    };
    return Teacher;
}(Person));
var teacher = new Teacher();
teacher.school = 'yid';
teacher.saySchool();
