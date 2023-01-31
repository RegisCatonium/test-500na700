document.addEventListener('DOMContentLoaded', function() {

	// слайдер
	const slider = new Swiper('#slider', {
		loop: true,
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 40,
		navigation: {
			prevEl: '#slider-arr-prev',
			nextEl: '#slider-arr-next',
		},
	})
	// --

	// маска
	const phoneInput = document.querySelector('#phone')
	const btn = document.querySelector('#btn')
	const mask = new IMask(phoneInput, {
		mask: '+{7} (000) 000 - 00 - 00'
	})
	// --

	// фон для сабменю
	const subMask = document.querySelector('.sub-mask')
	const linkMenu = document.querySelectorAll('.nav-menu__link')

	linkMenu.forEach(item => {
		item.addEventListener('mouseover', () => {
			subMask.classList.add('active')
		})
		item.addEventListener('mouseout', () => {
			subMask.classList.remove('active')
		})
	})
	// --

	// бургер, маска в моб. версии
	const checkbox = document.getElementById('burger-checkbox'),
			maskPage     = document.querySelector('.page__mask'),
			html     = document.querySelector('Html');

	checkbox.addEventListener('click', () => {
	if(checkbox.checked) {
		html.classList.add('no-scroll')
		maskPage.style.display = 'block'
	}	else {
		html.classList.remove('no-scroll')
		setTimeout(() =>{
			maskPage.style.display = 'none'
		}, 300)
	}
	});
	// --

})
