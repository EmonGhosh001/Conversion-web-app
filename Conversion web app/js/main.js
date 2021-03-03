const result= document.getElementById('result');
const submit= document.getElementById('submit');
function convert(e){
	e.preventDefault();
	const num= document.getElementById('number').value;
	if (num==="") {
		alert("Please Enter Your Number");
	}
	else if(num<0){
		alert("Please Enter Your Positive Number");
	}
	else{
		result.style.visibility='visible';
	}
	binarynum= Number(num).toString(2);
	result.innerText= binarynum;
}

submit.addEventListener('click',convert);
