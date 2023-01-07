import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const banner = document.getElementById('banner');
const banner_btn1 = document.querySelector('.banner-btn-1');
const banner_btn2 = document.querySelector('.banner-btn-2');
const banner_btn3 = document.querySelector('.banner-btn-3');



banner_btn1.addEventListener('click', () => {
    banner.style.backgroundImage = "url('./assets/img/Banner.jpg')";
    banner_btn1.style.background = "rgb(55, 185, 43)";
    banner_btn2.style.background = "rgba(152, 152, 152)";
    banner_btn3.style.background = "rgba(152, 152, 152)";
});

banner_btn2.addEventListener('click', () => {
    banner.style.backgroundImage = "url('./assets/img/Banner2.jpg')";
    banner_btn2.style.background = "rgb(55, 185, 43)";
    banner_btn1.style.background = "rgba(152, 152, 152)";
    banner_btn3.style.background = "rgba(152, 152, 152)";
});

banner_btn3.addEventListener('click', () => {
    banner.style.backgroundImage = "url('./assets/img/Banner3.jpg')";
    banner_btn1.style.background = "rgba(152, 152, 152)";
    banner_btn2.style.background = "rgba(152, 152, 152)";
    banner_btn3.style.background = "rgb(55, 185, 43)";
});

