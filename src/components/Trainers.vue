<template>
    <section id="trainers">
        <div class="center">
            <h2>Entrenadores</h2>

            <div class="trainers-div">
                <div class="trainer-card">
                    <img src="../assets/img/Trainer1.png" alt="Trainer1">
                    <div class="trainer-info">
                        <h3>Alberto Lara</h3>
                        <div>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter-square"></i>
                        </div>
                    </div>
                </div>


                <div class="trainer-card">
                    <img src="../assets/img/Trainer2.jpg" alt="Trainer2">
                    <div class="trainer-info">
                        <h3>Florencia Aguilares</h3>
                        <div>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter-square"></i>
                        </div>
                    </div>
                </div>


                <div class="trainer-card">
                    <img src="../assets/img/Trainer3.jpg" alt="Trainer3">
                    <div class="trainer-info">
                        <h3>Martin Arbeloa</h3>
                        <div>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter-square"></i>
                        </div>
                    </div>
                </div>


                <div class="trainer-card">
                    <img src="../assets/img/Trainer4.jpg" alt="Trainer4">
                    <div class="trainer-info">
                        <h3>Aldana Suarez</h3>
                        <div>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script>
    export default {
        name: 'AppTrainers'
    }
</script>


<style>
    #trainers{
        width: 100%;
        height: 55rem;
        background: rgb(0, 0, 0);
    }

   

    #trainers h2{
        display: block;
        font-size: 3rem;
        text-align: center;
        color: var(--color);
        border-top: .1rem dashed rgb(255, 255, 255);
        border-bottom: .1rem dashed rgb(255, 255, 255);
        padding: 1rem;
    }

    .trainers-div{
        width: 100%;
        min-height: 35rem;
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .trainer-card{
        position: relative;
        width: 25rem;
        height: 100%;
        background: #333;
        overflow: hidden;
        margin: 1rem;
    }

    .trainer-card:hover .trainer-info{
        top: 19rem;
    }

    .trainer-card img{
        width: 100%;
        height: 80%;
        background-size: cover;
    }

    .trainer-info{
        position: absolute;
        top: 28rem;
        width: 100%;
        padding: 1rem;
        background: #444;
    }

    .trainer-info h3{
        font-size: 1.5rem;
        padding: 1.5rem;
        text-align: center;
        color: #fff;
    }

    .trainer-info div{
        width: 100%;
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-top: .1rem solid #fff;
        margin-top: 1.5rem;
    }

    .trainer-info div i{
        font-size: 2rem;
        cursor: pointer;
        color: var(--color);
    }

    .trainer-info div i:hover{
        color: var(--color-secundario);
    }






    @media (max-width: 850px) {
        #trainers{
            height: 85rem;
        }

        .trainers-div{
            flex-wrap: wrap;
        }

    }

    @media (max-width: 500px) {
        #trainers{
            height: 150rem;
        }

        .trainers-div{
        justify-content: center;
        }

    }
</style>