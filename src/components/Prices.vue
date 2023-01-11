<template>
    <section id="prices">
        <h2>Nuestros planes</h2>
        <h3>Disponemos de distintos planes para cada necesidad</h3>

        <div class="center">
            

            <div class="price-div-basic">
                 <h2>Plan Basic</h2>
                 <h3>$ <span>{{ basic }}</span> / Mes</h3>
                 <ul>
                    <li><i class="fas fa-check"></i> Entrenador Personal</li>
                    <li><i class="fas fa-check"></i> Una sesión por semana</li>
                    <li><i class="fas fa-times"></i> Ejercicios cardio</li>
                    <li><i class="fas fa-times"></i> Plan nutricional</li>
                    <li><i class="fas fa-times"></i> Control de peso</li>
                    <li><i class="fas fa-times"></i> Control con nutricionista</li>
                 </ul>

                 <button class="price-btn">Elegir plan</button>
            </div>

            <div class="price-div-pro">
                <h2>Plan Pro</h2>
                 <h3>$ <span>{{ pro }}</span> / Mes</h3>
                 <ul>
                    <li><i class="fas fa-check"></i> Entrenador Personal</li>
                    <li><i class="fas fa-check"></i> Tres sesiones por semana</li>
                    <li><i class="fas fa-check"></i> Ejercicios cardio</li>
                    <li><i class="fas fa-check"></i> Plan nutricional</li>
                    <li><i class="fas fa-times"></i> Control de peso</li>
                    <li><i class="fas fa-times"></i> Control con nutricionista</li>
                 </ul>

                 <button class="price-btn">Elegir plan</button>

                 <div class="popular">
                    Popular
                 </div> 
            </div>


             <div class="price-div-pro">
                <h2>Plan Ultimate</h2>
                 <h3>$ <span>{{ ultimate }}</span> / Mes</h3>
                 <ul>
                    <li><i class="fas fa-check"></i> Entrenador Personal</li>
                    <li><i class="fas fa-check"></i> Tres sesiones por semana</li>
                    <li><i class="fas fa-check"></i> Ejercicios cardio</li>
                    <li><i class="fas fa-check"></i> Plan nutricional</li>
                    <li><i class="fas fa-check"></i> Control de peso</li>
                    <li><i class="fas fa-check"></i> Control con nutricionista</li>
                 </ul>

                 <button class="price-btn">Elegir plan</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppPrices',
    props: {
        basic: Number,
        pro: Number,
        ultimate: Number
    }
}
</script>

<style>
    #prices{
        width: 100%;
        min-height: 70rem;
        background: hsl(0, 0%, 0%);
        padding: 1px;
    }

    #prices > h2{
        text-align: center;
        font-size: 3rem;
        color: #fff;
        margin-top: 2rem;
    }

    #prices > h3{
        text-align: center;
        font-size: 2rem;
        color: #fff;
        margin-top: 2rem;
    }

    #prices .center{
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

  

    
    .price-div-basic,
    .price-div-pro{
        position: relative;
        width: 30%;
        height: 42rem;
        margin: 2rem;
        padding: 1.5rem;
        background: linear-gradient(130deg, rgba(148, 148, 148, 0.6) 93%, transparent 90%);
    }

  
   
    .price-div-basic h2,
    .price-div-pro h2{
        text-align: center;
        font-size: 2.5rem;
        color: #fff;
        margin: 2rem;
    }

    

    .price-div-basic h3,
    .price-div-pro h3{
        text-align: center;
        font-size: 2rem;
        color: #fff;
    }

    .price-div-basic h3 span,
    .price-div-pro h3 span{
        color: var(--color);
        font-size: 3.5rem;
    }

    .price-div-basic ul,
    .price-div-pro ul{
        width: 100%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        margin-top: 2rem;
    }

    .price-div-basic ul li,
    .price-div-pro ul li{
        font-size: 1.5rem;
        list-style: none;
        color: #fff;
    }

    .price-div-basic ul li .fa-check,
    .price-div-pro ul li .fa-check{
        color: rgb(21, 156, 39);
    }

    .price-div-basic ul li .fa-times,
    .price-div-pro ul li .fa-times{
        color: rgb(179, 11, 11);
    }

    .price-btn{
        display: block;
        font-size: 2rem;
        background: var(--color);
        padding: 1rem;
        margin: 0 auto;
        cursor: pointer;
        margin-top: 1rem;
        border: none;
    }

    .price-btn:hover{
        background: var(--color-secundario);
        box-shadow: 0 0 2rem var(--color);
    }

    .popular{
        position: absolute;
        top: .7rem;
        right: -2.8rem;
        background: var(--color);
        padding: 0 1.5rem;
        font-size: 2rem;
        transform: rotate(42deg);
    }
</style>