<template>
    <section >
        <div class="hero">
            <div class="hero-text">
                <h1 class="principale">Rejoignez  <br> le  <span class="text">Mouvement </span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, pariatur aliquam, est voluptatum illum minima animi sint nihil earum amet explicabo obcaecati libero qui omnis, cumque repellat porro molestias nobis.</p>
            </div>
        </div>
        <div class="row d-flex align-items-center">
            <div class="col-sm-6 pad">
                <div class="p-3 aboutUs">
                <h1> Pourquoi ? <br>   <span class="text">slow nation </span> </h1>
                <h2>lorem ipsum dolor color </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                </p>
                    <button class=" align-items-center btn-4"><span>Découvrir</span></button>
                </div>
            </div>
            <div class="col-sm-6" >
                <g-image src="~/assets/images/img1.png" alt="slider image" />
            </div>
        </div>
        <div class="row d-flex align-items-center">
             <div class="col-sm-6" >
                <g-image src="~/assets/images/img2.png" alt="slider image" />
            </div>
            <div class="col-sm-6 pad">
                <div class="p-3 aboutUs">
                <h1> Qui sommes-<span class="text">nous </span> ? </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                </p>
                    <button class=" align-items-center btn-4"><span>EN SAVOIR PLUS</span></button>
                </div>
            </div>
           
        </div>
        
    </section>   
</template>
<style scoped>

.hero {
    height: 577px;
    background-image: url(../assets/images/bg-hero.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0;
    display: flex;
    align-items: center;
    padding-left: 100px;
}

.pad {
    padding-left: 100px;
}
.aboutUs {
    width: 80%;
}
.hero-text {
    width: 47%;
}
h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 64px;
    text-transform: uppercase;

letter-spacing: 0.05em;
text-align: left;
}

h1.principale{
        font-size: 55px;


}
.text {
    display: inline;
    padding: 0;
    background: -webkit-linear-gradient(#84FFBD 15%,  #AAB2FF, #aa00d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
button {
    text-transform: uppercase;
}


</style>


