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
                    <li><a href="#gallery">Galería</a></li>
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

        <div class="footer-develop">
            FitBen &copy; 2023 Todos los derechos reservados
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
        padding: 1px;
        width: 100%;
        min-height: 40rem;
        background: rgb(0, 0, 0);
   }

   #footer .center{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
   }

    .footer-div{
        width: 30%;
        height: 100%;
    }

    .footer-div h4{
        color: rgb(0, 0, 0);
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
        color: rgb(255, 250, 254);
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
        margin-right: 2rem;        
    }

    .li-social i:hover{
        background: var(--color-secundario);
    }

    .li-social i{
        background: var(--color);
        color: #000;
        padding: 1rem;
        border-radius: 50%;
    }

    .footer-develop{
        width: 80%;
        height: 7rem;
        margin: 0 auto;
        border-top: .1rem solid #888;
        color: #fff;
        text-align: center;
        font-size: 2rem;
        line-height: 7rem;
        margin-top: 2rem;
    }
</style>