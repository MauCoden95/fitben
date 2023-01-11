<template>
    <footer id="footer">
       <div class="center">
            <div class="footer-div">
                <h4>Navegacion</h4>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#prices">Precios</a></li>
                    <li><a href="#trainers">Entrenadores</a></li>
                    <li><a href="#newsletter">Newsletter</a></li>
                </ul>
            </div>

            <div class="footer-div">
                <h4>Horarios</h4>
                <ul>
                    <li>Lunes: <span>09:00 a 22:00</span></li>
                    <li>Martes: <span>09:00 a 22:00</span></li>
                    <li>Miércoles: <span>09:00 a 22:00</span></li>
                    <li>Jueves: <span>09:00 a 22:00</span></li>
                    <li>Viernes: <span>09:00 a 22:00</span></li>
                    <li>Sábados: <span>09:00 a 18:00</span></li>
                    <li>Domingos y feriados: <span>Cerrado</span></li>
                </ul>
            </div>

            <div class="footer-div">
                <h4>Contacto</h4>
                <ul>
                    <li><i class="fas fa-phone"></i> (54 11) 4444-4444</li>
                    <li><i class="fas fa-phone"></i> (54) 15-9999-0000</li>
                    <li><i class="fas fa-map-marker"></i> Av. Lorem Ipsum 100 - Buenos Aires</li>
                    <li><i class="fas fa-envelope"></i> fitben@email.com</li>
                    <li class="li-social">
                        <a href=""><i class="fab fa-linkedin"></i></a>
                        <a href=""><i class="fab fa-facebook-square"></i></a>
                        <a href=""><i class="fab fa-twitter-square"></i></a>
                        <a href=""><i class="fab fa-instagram-square"></i></a>
                    </li>
                </ul>
            </div>
       </div>
    </footer>
</template>



<script>
    export default {
        name: 'AppFooter'
    }
</script>


<style>
   #footer{
        width: 100%;
        height: 40rem;
        background: #000;
        padding: 2rem;
   }

   #footer .center{
        display: flex;
        align-items: center;
        justify-content: space-between;
   }

    .footer-div{
        width: 30%;
        height: 100%;
    }

    .footer-div h4{
        color: #fff;
        text-align: center;
        margin: 2rem 0;
        font-size: 2rem;
    }

    .footer-div ul{
        width: 100%;
        height: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin: 3rem 0;
    }

    .footer-div ul li{
        font-size: 1.5rem;
        color: #fff;
        list-style: none;
    }

    .footer-div span{
        color: var(--color);
        margin-left: 2rem;
    }

    .footer-div ul li a{
        display: block;
        text-decoration: none;
        color: #fff;
    }

    .footer-div i{
        color: var(--color);
    }

    .li-social{
        display: flex;
    }

    .li-social a{
        display: block;
        font-size: 2rem;
        background: var(--color);
        padding: 1.5rem;
        margin-right: 2rem;
        border-radius: 3rem;
    }

    .li-social a:hover{
        background: var(--color-secundario);
    }

    .li-social i{
        color: #000;
    }
</style>