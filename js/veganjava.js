
function change(imgName){

	var myUrl = "url('img/hooverimg/" + imgName+ "')";
	document.getElementById('myHeader').style.backgroundImage = myUrl;
	document.getElementById('myHeader').style.backgroundRepeat = "no-repeat";
	//document.getElementById('myHeader').style.backgroundImage = "url('img/hooverimg/Apples.jpg')";
}	


function changeReset() {
	document.getElementById('myHeader').style.backgroundImage = "";
}

