document.addEventListener('DOMContentLoaded', () => {
	// Закрытие меню при клике вне его
	document.addEventListener('click', function (event) {
		const menuToggle = document.getElementById('menu-toggle')
		const menu = document.querySelector('.hamburger-menu')

		if (!menu.contains(event.target) && menuToggle.checked) {
			menuToggle.checked = false
		}
	})

	// Закрытие/открытие окна Входа в аккаунт
	const closePopAppBtn = document.querySelector('.close-sign-in-window')
	const openPopAppBtns = document.querySelectorAll('.open-sign-in-btn')

	const signInWindow = document.querySelector('.sign-in-container')

	openPopAppBtns.forEach(openPopAppBtn => {
		openPopAppBtn.addEventListener('click', () => {
			signInWindow.classList.add('opened')
		})
	})

	closePopAppBtn.addEventListener('click', () => {
		signInWindow.classList.remove('opened')
	})

	// Закрытие/открытие поиска
	const searchLine = document.querySelector('.search-line-container')
	const searchLineInput = document.querySelector('.search-input')
	const openSearchBtn = document.querySelector('.search-btn')

	openSearchBtn.addEventListener('click', () => {
		searchLine.classList.toggle('opened')
		searchLineInput.focus()
	})

	window.addEventListener('click', event => {
		if (
			!searchLine.contains(event.target) &&
			!openSearchBtn.contains(event.target)
		) {
			searchLine.classList.remove('opened')
		}
	})

	// Очистка поля ввода
	const clearInput = document.querySelector('.cancel-line-btn')

	clearInput.addEventListener('click', () => {
		searchLineInput.value = ''
		searchLineInput.focus()
	})

	// Закрытие/открытие двойного меню
	document.querySelectorAll('.nav-menu-list-item').forEach(menuItem => {
		const isMobile = window.innerWidth < 768
		let timeout

		// Обработчик событий для десктопа
		const handleDesktopMenu = () => {
			menuItem.addEventListener('mouseenter', () => {
				clearTimeout(timeout)
				let submenu = menuItem.querySelector('.sublist-menu')
				let menuItemLink = menuItem.querySelector('.nav-menu-list-item-link')

				if (submenu) {
					document
						.querySelectorAll('.sublist-menu.opened')
						.forEach(openedSubmenu => {
							openedSubmenu.classList.remove('opened')
						})
					document
						.querySelectorAll('.nav-menu-list-item-link.opened')
						.forEach(openedItemLink => {
							openedItemLink.classList.remove('opened')
						})

					submenu.classList.add('opened')
					if (menuItemLink) {
						menuItemLink.classList.add('opened')
					}
				}
			})

			menuItem.addEventListener('mouseleave', () => {
				let submenu = menuItem.querySelector('.sublist-menu')
				let menuItemLink = menuItem.querySelector('.nav-menu-list-item-link')

				if (submenu) {
					timeout = setTimeout(() => {
						submenu.classList.remove('opened')
						if (menuItemLink) {
							menuItemLink.classList.remove('opened')
						}
					}, 300)
				}
			})

			let submenu = menuItem.querySelector('.sublist-menu')
			if (submenu) {
				submenu.addEventListener('mouseenter', () => {
					clearTimeout(timeout)
				})

				submenu.addEventListener('mouseleave', () => {
					timeout = setTimeout(() => {
						submenu.classList.remove('opened')
						let menuItemLink = menuItem.querySelector(
							'.nav-menu-list-item-link'
						)
						if (menuItemLink) {
							menuItemLink.classList.remove('opened')
						}
					}, 300)
				})
			}
		}

		// Обработчик событий для мобильных устройств
		const handleMobileMenu = () => {
			menuItem.addEventListener('click', () => {
				let submenu = menuItem.querySelector('.sublist-menu')
				let menuItemLink = menuItem.querySelector('.nav-menu-list-item-link')

				if (submenu) {
					const isOpened = submenu.classList.contains('opened')

					document
						.querySelectorAll('.sublist-menu.opened')
						.forEach(openedSubmenu => {
							openedSubmenu.classList.remove('opened')
						})
					document
						.querySelectorAll('.nav-menu-list-item-link.opened')
						.forEach(openedItemLink => {
							openedItemLink.classList.remove('opened')
						})

					if (!isOpened) {
						submenu.classList.add('opened')
						if (menuItemLink) {
							menuItemLink.classList.add('opened')
						}
					} else {
						submenu.classList.remove('opened')
					}
				}
			})
		}

		if (isMobile) {
			handleMobileMenu()
		} else {
			handleDesktopMenu()
		}
	})

	// Показать пароль
	document
		.getElementById('togglePassword')
		.addEventListener('click', function () {
			const passwordInput = document.getElementById('password')
			const type =
				passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
			passwordInput.setAttribute('type', type)
		})

	// Переключение табов
	const tabsContainer = document.querySelector('.tabs-container-wrapper')
	const titlesContainer = document.querySelector('.titles-container')
	const titles = titlesContainer.querySelectorAll('.section-title')

	titles.forEach((title, index) => {
		title.addEventListener('click', () => {
			titles.forEach(title => {
				title.classList.remove('active')
			})

			const offset = -index * 100
			tabsContainer.style.transform = `translateX(${offset}%)`

			title.classList.add('active')
		})
	})
})
