const swiper = new Swiper('.new-items-slider', {
	direction: 'horizontal',
	slidesPerView: 4,
	spaceBetween: 40,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	speed: 600,
	simulateTouch: true,
	touchRatio: 1,
	touchReleaseOnEdges: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// Пункт останова для экранов от ---px и больше
		0: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		561: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		961: {
			slidesPerView: 4,
		},
	},
})
