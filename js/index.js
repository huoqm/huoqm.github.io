function closeActivity() {
	document.getElementById("activity").style.display = "none";
} //活动关闭按钮
var time = 300;
var h = 0;

function addCount() {
	if (time > 0) {
		time--;
		h = h + 5;
	} else {
		return;
	}
	if (h > 600) {
		return;
	}
	document.getElementById("happyNewyear").style.display = "";
	document.getElementById("happyNewyear").style.height = h + "px";
	setTimeout("addCount()", 30);
}
window.onload = function showAds() {
	addCount();
	setTimeout("noneAds()", 7000);
}
var T = 300;
var N = 600;

function noneAds() {
	if (T > 0) {
		T--;
		N = N - 5;
	} else {
		return;
	}
	if (N < 0) {
		document.getElementById("happyNewyear").style.display = "none";
		return;
	}
	document.getElementById("happyNewyear").style.height = N + "px";
	setTimeout("noneAds()", 30);
}
