<template>
    <header id="header">
        <div class="center">
            <a href="#" class="logo"><span>Fit</span>Ben <i class="fas fa-dumbbell"></i></a>

            <button class="navbar_btn"><i class="fas fa-bars"></i></button>

            <nav id="navbar">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#prices">Precios</a></li>
                    <li><a href="#trainers">Entrenadores</a></li>
                    <li><a href="#gallery">Galería</a></li>
                    <li><a href="#newsletter">Newsletter</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>


<style>
    #header{
        width: 100%;
        height: 7rem;
        background: #000;
    }

    #header .center{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo{
        display: block;
        text-decoration: none;
        font-size: 3rem;
        text-transform: uppercase;
        color: #fff;
    }

    .logo span{
        color: var(--color);
    }

    #navbar{
        width: 60%;
        height: 100%;
    }

    .navbar-none{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important;
    }



    #navbar  ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: auto;
    }

    #navbar ul li{
       list-style: none;
       cursor: pointer;
    }

    #navbar ul li:hover{
        background: var(--color);
    }

    #navbar ul li a{
       display: block;
       color: #fff;
       text-decoration: none;
       line-height: 7rem;
       font-size: 1.5rem;
       padding: 0 1.5rem;
    }

    #navbar ul li:hover a{
       color: #000;
    }

    .navbar_btn{
        display: none;
        cursor: pointer;
        background: transparent;
        padding: .5rem;
        font-size: 3rem;
        color: #fff;
        border-radius: .5rem;
        border: none;
    }






     @media (max-width: 1023px) {
        .navbar_btn{
            display: block;
        }

        #navbar{
            width: 100%;
            height: auto;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgb(43, 43, 43);
            z-index: 1000;
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        }

        #navbar  ul{
            flex-direction: column;
            padding: 1rem;
        }

        #navbar  ul li{
            display: block;
            width: 100%;
            text-align: center;
            font-size: 2rem;
            background: #888;
            margin: .5rem;
        }

         #navbar  ul li a{
            font-size: 2rem;
        }
    }
</style>