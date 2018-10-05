	// <!-- 4 cách xuất dữ liệu ra trang web -->
	//alert
	//js đặt ở phía dưới trên thẻ đóng body
	document.getElementById('demo2').innerHTML='hello inner html';
	document.write('<h1>Hello document</h1>');
	console.log('hello console');
	//bien trong js
	var userName;
	var phone;
	var email;
	var age;
	/*adsf*/
	function myFunction() {
		// body...
	}
	//goi ham
	myFunction();
	//
	function sum(a, b) {
		return a + b;
	}
	document.write(sum(7, 8));
	//cau dieu kien
	var condition = true;
	if (condition) {
		document.write('<br>');
		document.write('aaaaaaaaaaaaaaaaaaaaaaa');
	} else {

	}
	//vong lap
	for (var i = 1; i < 10; i++){
		document.write(i);
		document.write('<br>');
	}
	//==============================
	//===============================
	for (var n = 1; n <= 20; n++) {
		if (n % 15 == 0){
			document.write(n + " chia het cho 15");
			document.write('<br>')
		}else if (n % 3 == 0) {
			document.write(n + " chia het cho 3");
			document.write('<br>');
		} else if (n % 5 == 0) {
			document.write(n + " chia het cho 5");
			document.write('<br>');
		}else {
			document.write(n + " khong chia het cho 3,5,15");
			document.write('<br>');
		}
	}