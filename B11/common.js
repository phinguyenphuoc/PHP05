var x;
var y;
function show(id, x){
	if (x==1) {
	document.getElementById(id).src='ball.png';
	}else {
		document.getElementById(id).src='cir.png';
	}
	return x;
}
function result(x){
	return this.x=x;
}
function compare(a){
	if(a==this.x){
		alert('xg');
	}
}