$('#demo').click(function(){
	alert('a');
});
$('#demo2').click(function(){
	alert('abc');
});
$('.demo3').click(function(){
	alert('123');
});
$('#bt').click(function(){
	$('#demo4').html('hello world');
});
$('#bt1').click(function(){
	$('#demo5').css("font-size", "30px");
});
$('#bt2').click(function(){
	$('#demo6').hide();
});
$('#bt3').click(function(){
	$('#demo6').show();
});
$('#btfade').click(function(){
	$('#div1').fadeIn();
	$('#div2').fadeIn("slow");
	$('#div3').fadeIn(3000);
});
function sumAb(a, b){
	return parseInt(a) + parseInt(b);
}
$('#num1').keyup(function(){
	var a=$('#num1').val();
	var b=$('#num2').val();
	console.log(a);
	console.log(b);

	$('#result').html(sumAb(a, b));
});
$('#num1').keyup(function(){
	var a=$('#num1').val();
	var b=$('#num2').val();
	$('#result').html(sumAb(a, b));
});
// ------------------++++++++++++++++++++++++++++++++++++++++++++++++
function validateForm() {
    var x = document.forms["registerform"]["ten"].value;
    if (x == "") {
        $('#hide1').show(500);
    }else{
    	 $('#hide1').hide();
    }
}
function validateForm2() {
    var x = document.forms["registerform"]["old"].value;
    if (x == "") {
        $('#hide2').show(500);
        return false;
    }
}
function validateForm3() {
    var x = document.forms["registerform"]["children"].value;
    if (x == "") {
        $('#hide3').show(500);
        return false;
    }
}
function validateForm4() {
    var x = document.forms["registerform"]["den"].value;
    if (x == "") {
        $('#hide4').show(500);
        return false;
    }
}
function validateForm5() {
    var x = document.forms["registerform"]["di"].value;
    if (x == "") {
        $('#hide5').show(500);
        return false;
    }
}
function comparePer(){
	a = $('#old').val();
	b = $('#children').val();
	if(parseInt(a)<parseInt(b)){
		alert('so tre em khong duoc lon hon so nguoi lon');
	}
}































































