<template>
  <AppHeader></AppHeader>
  <AppBanner></AppBanner>
  <AppAbout></AppAbout>
  <AppImc></AppImc>
  <AppPrice basic=5000 pro=8000 ultimate=12000></AppPrice>
  <AppTrainers></AppTrainers>
  <AppGallery></AppGallery>
  <AppNewsletter></AppNewsletter>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppBanner from './components/Banner.vue'
import AppAbout from './components/About.vue'
import AppImc from './components/IMC.vue'
import AppPrice from './components/Prices.vue'
import AppTrainers from './components/Trainers.vue'
import AppGallery from './components/Gallery.vue'
import AppNewsletter from './components/Newsletter.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBanner,
    AppAbout,
    AppImc,
    AppPrice,
    AppTrainers,
    AppGallery,
    AppNewsletter,
    AppFooter
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

  *{
    margin: 0;   
    padding: 0;
    box-sizing: border-box;
    transition: all 300ms;
    font-family: 'Raleway', sans-serif;
    scroll-behavior: smooth;
  }

  :root{ 
    --color: #27c512;
    --color-secundario: #74ee63;
  }

  html{
   font-size: 63.5%;
  }

  body{
    background-image: url('./assets/img/Body.jpg');
    background-size: 100%;
    object-fit: cover;
  }

 .center{
    width: 80%;
    height: 100%;
    margin: 0 auto;
 }

 h1{
  font-size: 4rem;
  color: #ffffff;
 }


 @media (max-width: 1200px) {
  html{
   font-size: 45%;
  } 
 }


 
</style>
