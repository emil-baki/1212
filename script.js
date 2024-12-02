// Массив фотографий
const galleryImages = [
    'images/tow-truck-1.jpg',
    'images/tow-truck-2.jpg',
    'images/tow-truck-3.jpg',
    'images/tow-truck-4.jpg',
    'images/tow-truck-5.jpg',
];

// Динамическое добавление фотографий в слайдер
const swiperWrapper = document.querySelector('.swiper-wrapper');
galleryImages.forEach((src) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="${src}" alt="Фото эвакуации" class="img-fluid">`;
    swiperWrapper.appendChild(slide);
});

// Инициализация Swiper.js
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

