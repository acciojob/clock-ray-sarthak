//your JS code here. If required.
function star(){
let today=new Date();
let h=today.getHours();
let m = today.getMinutes();
  let s = today.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
  
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
	let anot="AM";
	if(h>12){
		h=h-12;
		anot="PM"
	}
	document.getElementById("timer").innerText=month+"/"+day+"/"+year+", "+h+":"+m+":"+s+` ${anot}`;
	setTimeout(star, 1000);
	
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}






