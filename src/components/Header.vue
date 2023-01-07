<template>
    <header id="header">
        <div class="center">
            <a href="#" class="logo"><span>Fit</span>Ben <i class="fas fa-dumbbell"></i></a>

            <nav id="navbar">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Precios</a></li>
                    <li><a href="">Entrenadores</a></li>
                    <li><a href="">Contacto</a></li>
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
        width: 40%;
        height: 100%;
    }

    #navbar ul{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    #navbar ul li{
       line-height: 7rem;
       font-size: 1.5rem;
       list-style: none;
       padding: 0 1rem;
       cursor: pointer;
    }

    #navbar ul li:hover{
        background: var(--color);
    }

    #navbar ul li a{
       display: block;
       color: #fff;
       text-decoration: none;
    }

    #navbar ul li:hover a{
       color: #000;
    }
</style>