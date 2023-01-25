<template>
    <section id="about">
        <div class="center" data-aos="fade-up">
            <div class="about-img">
                <img src="../assets/img/About-img.jpg" alt="">
                <div class="about-box about-box-1"></div>
                <div class="about-box about-box-2"></div>
            </div>

            <div class="about-info">
                <h2>Sobre nosotros</h2>
                <h3>Cada día es una nueva oportunidad para estar mejor</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit mattis augue, in cursus erat condimentum eget. Praesent et egestas erat, nec malesuada est. Vestibulum ut sapien ante. Nunc facilisis tincidunt condimentum. In sollicitudin iaculis ligula et iaculis. Cras gravida metus justo, eget accumsan lacus elementum id. Fusce tristique, magna vel consequat scelerisque, lectus orci euismod erat, ut venenatis magna orci quis turpis. Curabitur fringilla luctus interdum. 
                </p>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'AppAbout'
    }
</script>


<style>
    #about{
        width: 100%;
        min-height: 55rem;
        background: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #about .center{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }

    .about-img{
        position: relative;
        width: 40%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .about-img img{
        display: block;
        width: 60%;
        z-index: 2;
    }

    .about-box{
        position: absolute;
        background: var(--color);
        z-index: 1;
        width: 10rem;
        height: 10rem;
    }

    .about-box-1{
        top: -3%;
        left: 16%;
    }

    .about-box-2{
        bottom: -3%;
        right: 16%;
    }
    .about-info{
        width: 60%;
        height: 80%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .about-info h2{
        font-size: 3rem;
        color: #fff;
    }

    .about-info h3{
        font-size: 2.5rem;
        color: var(--color);
    }

    .about-info p{
        text-align: justify;
        font-size: 2rem;
        color: #fff;
    }







    @media (max-width: 1023px) {
        #about .center{
            flex-direction: column;
        }
       
       .about-img{
            width: 50%;
        }

        .about-info{
            width: 100%;
            height: 80%;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }
</style>