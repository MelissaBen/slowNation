<template>
   <section>
       <div class="m-5 p-5">
        <h1 class="p-3">Vous êtes une marque d’upcycling ou engagé pour une <span class="text"> mode plus écoresponsable ? </span> </h1>
       <div class="d-flex justify-content-between p-3">
           <div class="info"> 
                <h2>Participez à notre prochain popup store</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim viverra scelerisque ultrices gravida tellus sed. Quam volutpat orci posuere posuere donec eleifend. Donec ac sit nulla at non aenean non. Tellus fusce ultrices molestie nisi condimentum. Nibh ornare ante et sit fermentum sagittis. Proin cursus sagittis nisi sit nisl nunc, ac at faucibus. Faucibus habitasse velit velit sit tristique habitant eget sagittis. Bibendum tristique amet, ornare massa eget.
                </p>
            </div>
           <div style="align-self: flex-end;padding-bottom: 50px;">           
                <button class="btn-4"><span>Contactez nous </span></button>
            </div>
           
        </div>
       </div>
        <h2 class="pb-5 text-center">RETROUVONS NOUS <span class="text"> SUR INSTAGRAM </span></h2>
         <div class="d-flex" >
            <g-image src="~/assets/images/01.jpg" alt="slider image" class="img pr-3" />
            <g-image src="~/assets/images/02.jpg" alt="slider image" class="img pr-3" />
            <g-image src="~/assets/images/03.jpg" alt="slider image" class="img pr-3" />
            <g-image src="~/assets/images/04.jpg" alt="slider image" class="img pr-3" />
            <g-image src="~/assets/images/05.jpg" alt="slider image" class="img" />
    
        </div>

    </section>  
</template>
<style scoped>

    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 44px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        text-align: left;
        width: 80%;
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
    .info {
        width: 60%;
    }
    .img {
        width: 290px;
        height: 290px;
    }
</style>