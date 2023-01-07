<template>
    <section id="banner">
        <div class="center">
            <h1>Ser fuerte, estar en forma es nuestro lema</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor id lectus placerat pulvinar. Fusce sit amet tincidunt erat. Integer eget ligula lobortis, scelerisque lectus id, sollicitudin quam.
                Aliquam gravida libero nec neque placerat pretium. Duis a hendrerit turpis. Vestibulum lacus dui, volutpat sed euismod eu, bibendum ac arcu. 
            </p>
            <a href="">Ver más</a>
        </div>
        
    </section>
</template>


<script>
export default {
    name: 'AppBanner'
}
</script>


<style>
    #banner{
        width: 100%;
        height: 55rem;
        background-image: url('../assets/img/Banner.jpg');
        object-fit: cover;
        background-size: 100%;
    }

    #banner .center{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    #banner p{
        color: #fff;
        font-size: 1.5rem;
        text-align: justify;
    }

    #banner a{
        display: block;
        background: var(--color);
        text-decoration: none;
        margin-top: 2rem;
        color: #000;
        font-size: 2.5rem;
        padding: 1rem 2rem;
    }

    #banner a:hover{
        background: var(--color-secundario);
    }
</style>