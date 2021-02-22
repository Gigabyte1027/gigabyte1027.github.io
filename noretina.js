function home() {
		document.getElementById('home').style.left = "0";
		document.getElementById('chat').style.left = "200%";
		document.getElementById('game').style.left = "300%";
		document.getElementById('nav1').style.backgroundPosition = "0% 100%";
		document.getElementById('nav2').style.backgroundPosition = "25% 0%";
		document.getElementById('nav3').style.backgroundPosition = "50% 0%";
		document.getElementById('nav4').style.backgroundPosition = "75% 0%";
		document.getElementById('nav5').style.backgroundPosition = "100% 0%";
}
function chat() {
		document.getElementById('home').style.left = "-100%";
		document.getElementById('chat').style.left = "0";
		document.getElementById('game').style.left = "100%";
		document.getElementById('nav1').style.backgroundPosition = "0% 0%";
		document.getElementById('nav2').style.backgroundPosition = "25% 100%";
		document.getElementById('nav3').style.backgroundPosition = "50% 0%";
		document.getElementById('nav4').style.backgroundPosition = "75% 0%";
		document.getElementById('nav5').style.backgroundPosition = "100% 0%";
}
function game() {
		document.getElementById('home').style.left = "-200%";
		document.getElementById('chat').style.left = "-100%";
		document.getElementById('game').style.left = "0";
		document.getElementById('nav1').style.backgroundPosition = "0% 0%";
		document.getElementById('nav2').style.backgroundPosition = "25% 0%";
		document.getElementById('nav3').style.backgroundPosition = "50% 100%";
		document.getElementById('nav4').style.backgroundPosition = "75% 0%";
		document.getElementById('nav5').style.backgroundPosition = "100% 0%";
}