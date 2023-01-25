<template>
    <section id="newsletter">
        <div class="center">
            <h2>Suscribite a nuestro newsletter</h2>
            <h3>Enterate de las ultimas novedades que tenemos para vos</h3>
            <form action="">
                <input type="email" placeholder="Ingrese su email...">
                <button>Suscribirme</button>
            </form>
        </div>
    </section>
</template>



<script>
    export default {
        name: 'AppNewsletter'
    }
</script>


<style>
    #newsletter{
        width: 100%;
        min-height: 30rem;
        background: rgba(39, 197, 18, 0.6);
        padding: 1px;
    }

    #newsletter h2{
        font-size: 3rem;
        text-align: center;
        margin: 3rem 0;
    }

    #newsletter h3{
        font-size: 2rem;
        text-align: center;
        margin: 3rem 0;
    }

    #newsletter form{
        width: 60%;
        height: 15rem;
        margin: 3rem auto;
    }

    #newsletter form input{
        width: 100%;
        font-size: 2rem;
        padding: 1rem;
        outline: none;
    }

    #newsletter form button{
        display: block;
        font-size: 2rem;
        padding: 1rem;
        margin: 2rem auto;
        cursor: pointer;
    }

    #newsletter form button:hover{
        background: var(--color);
    }
</style>