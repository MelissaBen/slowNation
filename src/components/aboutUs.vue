<template>
    <section >
        <div class="hero">
            <div class="hero-text">
                <h1>Rejoignez  <br> le  <span class="text">Mouvement </span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, pariatur aliquam, est voluptatum illum minima animi sint nihil earum amet explicabo obcaecati libero qui omnis, cumque repellat porro molestias nobis.</p>
            </div>
        </div>
        <div class="row py-5 d-flex align-items-center container m-auto ">
            <div class="col-sm-6">
                <div class="p-3">
                <h4> Pourquoi ? </h4>
                <h2>lorem ipsum dolor color </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                </p>
                    <b-button class=" align-items-center btn-4"><span>Hover Me</span></b-button>
                </div>
            </div>
            <div class="col-sm-6 hover-scale-up-1 ease-500" >
                <img src="https://picsum.photos/500/300" alt="slider image">
            </div>
        </div>
        <div class="row py-5 d-flex align-items-center container m-auto">
            <div class="col-sm-5 hover-scale-up-1 ease-500">
                <img src="https://picsum.photos/500/300" alt="slider image">
            </div>
            <div class="col-sm-7">
                <div class="p-3">
                <h4>QUI SOMMES NOUS ? </h4>
                <h2>lorem ipsum dolor color </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
                </p>
                <b-button class=" align-items-center btn-4"><span>Hover Me</span></b-button>
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
    padding-left: 85px;
}

.hero-text {
    width: 47%;
}
h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 54px;
    line-height: 64px;
    text-transform: uppercase;
}
.text {
    display: inline;
    padding: 0;
    background: -webkit-linear-gradient(#84FFBD 15%,  #AAB2FF, #aa00d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}



</style>


