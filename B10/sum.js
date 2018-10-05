// var x=document.getElementById('number1').value;
// var y=document.getElementById('number2').value;
// document.getElementById('result').inerHTML=x+y;
function sumab(a, b){
	document.getElementById('result').innerHTML = parseInt(a) + parseInt(b);
}
function subab(a, b){
	document.getElementById('result').innerHTML = parseInt(a) - parseInt(b);
}
function multab(a, b){
	document.getElementById('result').innerHTML = parseInt(a) * parseInt(b);
}
function divab(a, b){
	document.getElementById('result').innerHTML = parseInt(a) / parseInt(b);
}
var rs="";
function addVal(a){
	rs= rs + a;
	document.getElementById('kq').innerHTML=rs;
}
function back(){
	rs=rs.substring(0,rs.length -1);
	document.getElementById('kq').innerHTML=rs;
}
function cal(){
	rs=eval(rs);
	document.getElementById('kq').innerHTML=rs;
}
var str="0123456789"
console.log(str.length);
console.log(str.lastIndexOf('a'));//vi tri cuoi
//k tim ra tra ve gia tri -1, indexOf(): vi tri dau
//cat chuoi
console.log(str.substring(3,8));