function validateForm1() {
    var x = document.forms["registerform"]["ten"].value;
    if (x == "") {
        $('#hide1').show(500);
    }else{
    	 $('#hide1').hide();
    }
}
function validateForm2() {
    var x = document.forms["registerform"]["namsinh"].value;
    if (x == "") {
        $('#hide2').show(500);
    }else{
         $('#hide2').hide();
    }
}
// function validateForm4() {
//     var x = document.forms["registerform"]["gioitinh"].value;
//     if (x == "") {
//         $('#hide3').show(500);
//     }else{
//          $('#hide3').hide();
//     }
// }
// function validateForm4() {
//     var x = document.forms["registerform"]["sothich"].value;
//     if (x == "") {
//         $('#hide4').show(500);
//     }else{
//          $('#hide4').hide();
//     }
// }
function validateForm3(){
    if ($('input:checkbox', this).is(':checked') && $('input:radio', this).is(':checked')) {
        console.log('a');
    } else {
        alert('Please select something!');
        return false;
    }
}
// $("#nam").click(function(){
//     window.open('nam.html');
//     var x=$('#ten').val();
//     var y=$('#namsinh').val();
//     var z=$('#sothich').val();
// })