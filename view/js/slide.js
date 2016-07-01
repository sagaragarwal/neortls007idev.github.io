var slideIndex1 = 0;
carousel1();

function carousel1() {
	var i;
	var x = document.getElementsByClassName("mySlides1");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex1++;
	if (slideIndex1 > x.length) {slideIndex1 = 1}
	x[slideIndex1-1].style.display = "block";
	setTimeout(carousel1, 2000); // Change image every 2 seconds
}

var slideIndex2 = 0;
carousel2();

function carousel2() {
	var i;
	var x = document.getElementsByClassName("mySlides2");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex2++;
	if (slideIndex2 > x.length) {slideIndex2 = 1}
	x[slideIndex2-1].style.display = "block";
	setTimeout(carousel2, 2000); // Change image every 2 seconds
}