$(function() {
	
//animated scrolling web
	$('a').on('click', function(event) {
		if (this.hash !== "") {
		    event.preventDefault();
		    var hash = this.hash;
		    $('html, body').animate({
			    scrollTop: $(hash).offset().top}, 
			    1200, function(){
		        window.location.hash = hash;
		    	}
		    );
		}
	});

	// carousel settings
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);

	function changeSlide() {
		carouselList.animate(
			{'marginLeft':-300}, //gdy bedzie 400, to slajdy przesuna sie w prawo
			500,
			moveFirstSlide
		);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});
	}

});