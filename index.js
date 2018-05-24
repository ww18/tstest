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
function tell() {
    alert(Color[0]);
}
tell();
