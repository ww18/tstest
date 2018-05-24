/**
 * Created by ww on 2018/5/23.
 */
var isBoon:boolean = false;
var num:number = 10;
var str:string = '10';
var list1:number[] = [1,2,3];
var list2:Array<string> = ['iwen','ime'];
enum Color {red, green, blue};//还可以修改下标
var c:Color = Color.green; //获取下标
var is:any = '123';
var list:any[] = [1,3,'232'];
var list1:any = [1,3,'232'];

function tell():string{
    alert(Color[0]);
    return 'hello';
}
tell();