$(document).ready(function() {

$('.slider').slick({
	arrows: true,
	dots: false,
	adaptiveHeight: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	easing:'ease-out',
	infinite:true,
	initialSlide: 0,
	autoplay: true,
	autoplaySpeed:3000,
	pauseOnFocus: true,
	pauseOnHover: true,
	pauseOnDotsHover:true,
	draggable: true,
	swipe: true,
	touchThreshold:5,
	touchMove: true,
	waitForAnimate: true,
	centerMode: false,
	variableWidth: false,
	rows: 1,
	slidesPerRow: 1,
	vertical: false,
	verticalSwiping: false,
	fade: false,
	asNavFor:"",
	responsive: [
		{
			breakpoint: 0,
			settings: {}
		}
	],
	mobileFirst: false,
	// appendArrows: $(''),
		
});

})
document.addEventListener("DOMContentLoaded", function(event) {
let menu_icon = document.querySelector(".icon-menu");
if (menu_icon != null) {
	let menu_body = document.querySelector('.menu__body')
	menu_icon.addEventListener('click', function(e) {
		menu_icon.classList.toggle('_active');
		menu_body.classList.toggle('_active');
		document.querySelector('body').classList.toggle('_lock')
	})
}

function parallax(event) {
	this.querySelectorAll('.parallax__item').forEach(item => {
		let speed = item.getAttribute('data-speed') * 0.0007;
		let distanceX = (screen.width / 2 - event.clientX) * speed;
		let distanceY = (screen.width / 2 - event.clientY) * speed;
		item.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
	});
}
document.addEventListener('mousemove', parallax);
function ibg() {
    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
};
ibg()

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } 
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});
let p2 = document.querySelectorAll('#start');
let b2 = document.querySelectorAll('#back');
let tabs_buttons = document.querySelector('.section5__tabs').querySelectorAll('span');

document.addEventListener('mousemove', function() {
	p2.forEach((item) => {
		item.addEventListener('click', function(e) {
			let i = e.target.getAttribute('data-num')
			let ul = document.querySelectorAll('.ul');
			ul[i].style.opacity = "1";
			ul[i].style.visibility = "visible";

		})
	})
	b2.forEach((item) => {
		item.addEventListener('click', function(e) {
			let i = e.target.getAttribute('data-num')
			let ul = document.querySelectorAll('.ul');
			ul[i].style.opacity = "0";
			ul[i].style.visibility = "hidden";

		})
	})
	tabs_buttons.forEach((item) => {
		item.addEventListener('click', function(e) {

			tabs_buttons.forEach((i2) => {
				i2.classList.remove('_active')
			})
			
			if(e.target.classList.contains("tabs_buttons")) {
				e.preventDefault()
				e.target.parentElement.classList.add("_active")
			}
			else {
				e.target.classList.add('_active')
			}
		})
	})
	
	})

});

