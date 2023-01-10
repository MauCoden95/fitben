<template>
  <AppHeader></AppHeader>
  <AppBanner></AppBanner>
  <AppAbout></AppAbout>
  <AppImc></AppImc>
  <AppPrice></AppPrice>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppBanner from './components/Banner.vue'
import AppAbout from './components/About.vue'
import AppImc from './components/IMC.vue'
import AppPrice from './components/Prices.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBanner,
    AppAbout,
    AppImc,
    AppPrice
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
    --color: #0bbb05;
    --color-secundario: #9bff98;
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
</style>
