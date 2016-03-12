function show(obj){
	var area = document.getElementById("cal");
	area.value+=obj.childNodes[0].nodeValue;
	return area.value;
}

function fback(){
	var area = document.getElementById("cal");
	var num = area.value;
	// var new_num = parseInt(num/10);
	// area.value = new_num;
	area.value = num.slice(0,-1);
}

function fclear(){
	var area = document.getElementById("cal");
	area.value = "";
}

function calculate(ob){
	var num1 = document.getElementById("cal").value;
	var cal = ob.childNodes[0].nodeValue;
	show(ob);
}

function fresult(){
	var result = document.getElementById("cal").value;
	result = eval(result);
	document.getElementById("cal").value = result;
}
