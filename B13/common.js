function validateForm1() {
    var x = document.forms["registerform"]["ten"].value;
    if (x == "") {
        $('#hide1').show(500);
    }else{
    	 $('#hide1').hide();
         return 1;
    }
}
function validateForm2() {
    var x = document.forms["registerform"]["namsinh"].value;
    if (x == "") {
        $('#hide2').show(500);
    }else{
         $('#hide2').hide();
          return 1;
    }
}
function checkGender(){
    if ($('#nam').is(':checked')==false && $('#nu').is(':checked')==false){
        $('#hide3').show(500);
    }if($('#nam').is(':checked')){
        window.open('nam.html');
    }if ($('#nu').is(':checked')){
        window.open('nu.html');
    }
}
function checkHobby(){
    if ($('#bongda').is(':checked')==false &&  $('#amnhac').is(':checked')==false){
        $('#hide4').show(500);
    }else{
        $('#hide4').hide();
        return 1;
    }
}
function validateSite(){
    if(validateForm1()==1 && validateForm2()==1 && checkHobby()==1){
        checkGender();
    }else{
        return false;
    }
}
function saveData(){
    localStorage.setItem("name", $('#ten').val());
    localStorage.setItem("birth", $('#namsinh').val());
    // localStorage.setItem("hobby1", $('#bongda').val());
    // console.log( localStorage.getItem("hobby1"));
}
function saveHobby(){
    if ($('#bongda').is(':checked')==true && $('#amnhac').is(':checked')==true) {
        localStorage.setItem("hobby",1);
    }else if($('#bongda').is(':checked')==true){
        localStorage.setItem("hobby",2);
    }else if($('#amnhac').is(':checked')==true){
        localStorage.setItem("hobby",3);
    }
}
function saveGender(){
    if ($('#nam').is(':checked')==true){
        localStorage.setItem("gender", 1);
    }else localStorage.setItem("gender", 2);
}

