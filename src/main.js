import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

/*BANNER*/

const banner = document.getElementById('banner');
const banner_btn1 = document.querySelector('.banner-btn-1');
const banner_btn2 = document.querySelector('.banner-btn-2');
const banner_btn3 = document.querySelector('.banner-btn-3');



banner_btn1.addEventListener('click', () => {
    banner.classList.remove('background2');
    banner.classList.remove('background3');
    banner.classList.add('background1');


    banner_btn1.style.background = "#74ee63";
    banner_btn2.style.background = "rgba(152, 152, 152)";
    banner_btn3.style.background = "rgba(152, 152, 152)";
});

banner_btn2.addEventListener('click', () => {
    banner.classList.remove('background1');
    banner.classList.remove('background3');
    banner.classList.add('background2');

    banner_btn2.style.background = "#74ee63";
    banner_btn1.style.background = "rgba(152, 152, 152)";
    banner_btn3.style.background = "rgba(152, 152, 152)";
});

banner_btn3.addEventListener('click', () => {
    banner.classList.remove('background1');
    banner.classList.add('background3');
    banner.classList.remove('background2');

    banner_btn1.style.background = "rgba(152, 152, 152)";
    banner_btn2.style.background = "rgba(152, 152, 152)";
    banner_btn3.style.background = "#74ee63";
});







/*CALCULO IMC*/
const btn_imc = document.querySelector('.btn-imc');

btn_imc.addEventListener('click', () =>{
    const ipt_height = parseInt(document.querySelector('.height').value);
    const ipt_weight = parseInt(document.querySelector('.weight').value); 
    const span_imc = document.querySelector('.imc-span');
    

    let height_mts = ipt_height / 100;

    let imc = Math.ceil(ipt_weight / Math.pow(height_mts,2));

    // switch (imc) {
    //     case imc < 19:
    //         span_imc.innerHTML = `Su imc es de ${imc} y su condición es Peso bajo`;
    //         break;
    
    //     case imc >= 19 && imc < 25:
    //         span_imc.innerHTML = `Su imc es de ${imc} y su condición es Peso Normal`;
    //         break;

    //     case imc >= 25 && imc < 30:
    //         span_imc.innerHTML = `Su imc es de ${imc} y su condición es Sobrepeso`;
    //         break;

    //     case imc >= 30 && imc < 40:
    //         span_imc.innerHTML = `Su imc es de ${imc} y su condición es Obesidad`;
    //         break;

    //     case imc >= 40:
    //         span_imc.innerHTML = `Su imc es de ${imc} y su condición es Obesidad Extrema`;
    //         break;

    //     default:
    //         break;
    // }
    span_imc.innerHTML = `Su imc es de ${imc}`;

    

});




/*Gallery*/
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 4) {
        counter = 1;
    }
}, 5000);

