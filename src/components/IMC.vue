<template>
    <section id="imc">
        <div class="center">
            <div class="calc-imc">
                <h2>Calcule su IMC</h2>
                <form action="" method="">
                    <input type="number" class="height" placeholder="Su Altura en cms">
                    <input type="number" class="weight" placeholder="Su Peso en kgs">
                    <input type="button" value="Calcular ahora" class="btn-imc">
                    <span class="imc-span">--------</span>
                </form>
            </div>

            <img src="../assets/img/Imc.png" alt="">
        </div>
    </section>
</template>


<script>
    export default {
        name: 'AppImc'    
    }
</script>

<style>
    #imc{
        width: 100%;
        min-height: 55rem;
        padding: 3rem;
    }

    #imc .center{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: rgb(175, 175, 175, 0.9);
}

    .calc-imc{
        width: 40%;
        height: 100%;
    }

    .calc-imc h2{
        display: block;
        font-size: 3rem;
        text-align: center;
        margin: 3rem 0;
        color: #fff;
    }

    .calc-imc form{
        width: 100%;
        height: 60%;
        margin-top: 5rem;
    }

    .calc-imc form input{
        display: block;
        width: 80%;
        font-size: 2rem;
        padding: 1rem;
        margin: 3rem auto;
        outline: none;
    }

    .calc-imc form input[type="number"]{
        border: .2rem solid var(--color);
    }

    .calc-imc form input[type="number"]:focus{
        border-color: var(--color-secundario);
    }

    .calc-imc form input[type="button"]{
        cursor: pointer;
    }

    .calc-imc form span{
        display: block;
        font-size: 2rem;
        text-align: center;
    }

    #imc img{
        width: 45%;
        height: 100%;   
    }







    @media (max-width: 1023px) {
        #imc .center{
            flex-direction: column;
        }


        .calc-imc{
            width: 60%;
            height: 100%;
        }


        #imc img{
            width: 70%; 
        }

    }
</style>