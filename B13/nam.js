$('#ten').val(localStorage.getItem("name"));
$('#namsinh').val(localStorage.getItem("birth"));

var x=localStorage.getItem("hobby");
if (x==1){
	$('#bongda').prop('checked', true);
	$('#amnhac').prop('checked', true);
}if (x==2) {
	$('#bongda').prop('checked', true);
}if (x==3) {
	$('#amnhac').prop('checked', true);
}
var y=localStorage.getItem("gender");
if (y==1) {
	$('#nam').prop('checked', true);
}else $('#nu').prop('checked', true);