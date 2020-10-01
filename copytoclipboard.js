var b1 = document.getElementById("b1");
b1.addEventListener("click", function() {
	copyToClipboard(b1);
});

var b2 = document.getElementById("b2");
b2.addEventListener("click", function() {
	copyToClipboard(b2);
});

var b3 = document.getElementById("b3");
b3.addEventListener("click", function() {
	copyToClipboard(b3);
});

var b4 = document.getElementById("b4");
b4.addEventListener("click", function() {
	copyToClipboard(b4);
});

var b5 = document.getElementById("b5");
b5.addEventListener("click", function() {
	copyToClipboard(b5);
});

var b6 = document.getElementById("b6");
b6.addEventListener("click", function() {
	copyToClipboard(b6);
});

function copyToClipboard(element) {
	var text = document.getElementById(element.id);
	var selection = window.getSelection();
	var range = document.createRange();
	range.selectNodeContents(text);
	selection.addRange(range);
	document.execCommand('copy');
	selection.removeAllRanges();

	document.getElementById(element.id + '_copy').innerText = 'Copied!';
	var id = setInterval(frame, 50);
	var opacity = 0; 
	var sign = 1;
	document.getElementById(element.id + '_copy').style.opacity = opacity;
	function frame() {
		if (opacity < 0) {
			clearInterval(id);
		} else {
			if (sign == 1) {
				opacity += 0.05;
				if (opacity > 1) {sign = 0;}
			} else {
				opacity -= 0.05;
			}
			document.getElementById(element.id + '_copy').style.opacity = opacity;
		} 
	}
}