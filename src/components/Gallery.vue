<template>
    <section id="gallery">
        <h2>Galería</h2>
        <div class="center">            
            <div class="slider">
                <div class="slides">
                    <input type="radio" name="radio-btn" id="radio1">
                    <input type="radio" name="radio-btn" id="radio2">
                    <input type="radio" name="radio-btn" id="radio3">
                    <input type="radio" name="radio-btn" id="radio4">

                    <div class="slide first">
                        <img src="../assets/img/Gallery1.jpg" alt="Slide1">
                    </div>

                    <div class="slide">
                        <img src="../assets/img/Gallery2.jpg" alt="Slide1">
                    </div>

                    <div class="slide">
                        <img src="../assets/img/Gallery3.jpg" alt="Slide1">
                    </div>

                    <div class="slide">
                        <img src="../assets/img/Gallery4.jpg" alt="Slide1">
                    </div>


                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                    </div>
                </div>

                <div class="navigation-manual">
                    <label for="radio1" class="manual-btn"></label>
                    <label for="radio2" class="manual-btn"></label>
                    <label for="radio3" class="manual-btn"></label>
                    <label for="radio4" class="manual-btn"></label>
                </div>
            </div>  
        </div>
    </section>
</template>


<script>
export default {
    name: 'AppGallery'
}
</script>


<style>
    #gallery{
        width: 100%;
        min-height: 55rem;
        background: rgb(0, 0, 0);
    }

    #gallery h2{
        display: block;
        width: 80%;
        margin: 0 auto;
        font-size: 3rem;
        text-align: center;
        color: var(--color);
        border-top: .1rem dashed rgb(255, 255, 255);
        border-bottom: .1rem dashed rgb(255, 255, 255);
        padding: 1rem;
    }

    #gallery .center{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem;
    }

    .slider{
        width: 80rem;
        height: 100%;
        border-radius: 1rem;
        overflow: hidden;
    }

    .slides{
        width: 500%;
        height: 100%;
        display: flex;
    }

    .slides input{
        display: none;
    }

    .slide{
        width: 20%;
        transition: 2s;
    }

    .slide img{
        width: 100%;
        height: 100%;
    } 

    .navigation-manual{
        position: absolute;
        /* width: 62%; */
        margin-top: -4rem;
        right: 43%;
        display: flex;
        justify-content: center;
    }

    .manual-btn{
        border: .2rem solid var(--color);
        padding: .5rem;
        border-radius: 1rem;
        cursor: pointer;
        transition: .5s;
    }

    .manual-btn:not(:last-child){
        margin-right: 4rem;
    }

    .manual-btn:hover{
        background: var(--color);
    }

    #radio1:checked ~ .first{
        margin-left: 0;
    }

    #radio2:checked ~ .first{
        margin-left: -20%;
    }

    #radio3:checked ~ .first{
        margin-left: -40%;
    }

    #radio4:checked ~ .first{
        margin-left: -60%;
    }

    .navigation-auto{
        position: absolute;
        display: flex;
        /* width: 62%; */
        right: 43%;
        justify-content: center;
        margin-top: 49.5rem;
    }

    .navigation-auto div{
        border: .2rem solid var(--color);
        padding: .5rem;
        border-radius: 1rem;
        transition: 1s;
    }

    .navigation-auto div:not(:last-child){
        margin-right: 4rem;
    }

    #radio1:checked ~ .navigation-auto .auto-btn1{
        background: var(--color);
    }

    #radio2:checked ~ .navigation-auto .auto-btn2{
        background: var(--color);
    }

    #radio3:checked ~ .navigation-auto .auto-btn3{
        background: var(--color);
    }

    #radio4:checked ~ .navigation-auto .auto-btn4{
        background: var(--color);
    }
</style>