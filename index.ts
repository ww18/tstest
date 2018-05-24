/**
 * Created by ww on 2018/5/23.
 */
var isBoon:boolean = false;
var num:number = 10;
var str:string = '10';
var list1:number[] = [1,2,3];
var list2:Array<string> = ['iwen','ime'];
enum Color {red, green, blue}; //还可以修改下标
var c:Color = Color.green; //获取下标
var is:any = '123';
var list:any[] = [1,3,'232'];
var list3:any[] = [1,3,'232'];

function tell():string{
    alert(Color[0]);
    return 'hello';
}
var add:(name:string,age:number)=>string = function(n:string,a:number):string{
    alert(123);
    return 'lall';
}

function hello(firstName:string,lastName:string='wenwen'){
    return firstName + ' ' + lastName;
}
hello('hello');
function change(...arg:string[]){
    return arg.join(' ');
}
var argumes = change('hello','world','lalal');
document.getElementById('pid').innerHTML = argumes;

//lambads就是箭头函数
var people = {
    name: ['hello','wenwen'],
    sayName: function(){
        return ()=>{
            var i = Math.floor(Math.random()*2);
            return 'sayname = ' + this.name[i];
        }
    }
}
var newPeople = people.sayName();
//alert(newPeople());

function attr(nameorage:any):any{
    if(nameorage && typeof nameorage === 'string'){
        alert(nameorage);
    }else{
        alert('other');
    }
}

//attr('string');
//attr('string','lalll');

class Person{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person{
    school: string;
    constructor(school?:string){
        super('ww',100);
        this.school = school;
    }
    saySchool(){
        alert(this.name + this.age + this.school);
    }
}
var teacher = new Teacher();
teacher.school = 'yid';
teacher.saySchool();