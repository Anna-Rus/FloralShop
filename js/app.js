var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}


function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();


//BildSlider
let sliders = document.querySelectorAll('._swiper');

if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }


if (document.querySelector('.products-page__body')) {
	let mainslide = new Swiper('.products-page__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 40,
		autoHeight: true,
		speed: 800,
		//loop: true,
		// Arrows
		navigation: {
			nextEl: '.products-page__button-next',
			prevEl: '.products-page__button-prev',
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
				autoHeight: true,
				spaceBetween: 20,
			},
			320: {
				slidesPerView: 1,
				autoHeight: true,
				spaceBetween: 20,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			790: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1100: {
				slidesPerView: 4,
			},
		},
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
	});
}




let headerBurger = document.querySelector('.menu-header__icon-burger');
let headerMenu = document.querySelector('.menu-header__menu');
if (headerBurger) {
	headerBurger.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	});
}


