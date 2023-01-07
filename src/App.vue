<template>
  <AppHeader></AppHeader>
  <AppBanner></AppBanner>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppBanner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBanner
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
  }

  :root{
    --color: rgb(39, 140, 30);
    --color-secundario: rgb(55, 185, 43);
  }

  html{
    font-size: 63.5%;
  }

 .center{
    width: 80%;
    height: 100%;
    margin: 0 auto;
 }

 h1{
  font-size: 4rem;
  color: #fff;
 }
</style>
