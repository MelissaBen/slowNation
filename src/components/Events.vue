<template>
    <div class="caroussel container">
        <h1 class="text-center p-5"> NOS PROCHAINS <span class="text">ÉVÉNEMENTS</span></h1>
        <g-image src="~/assets/images/event.png" alt="slider image" />

        <div class="text-dark">
            <b-container>

                <b-row>
                <b-col cols="12">

                   <!--<ClientOnly>
                    <carousel :perPage="3" :autoplay="true" :autoplay-timeout="4000" :loop="true"> 
                        <slide class="p-2 ">
                            <b-card title="We Are Brewers" tag="article" style="width: 300px" class="text-center">
                            <b-card-text >
                                22-23 avril 2022
                            </b-card-text>
                            <b-card-text>
                                16 Bd Jules Ferry 75011, Paris                        
                            </b-card-text>
                            <b-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed in lorem nunc, id scelerisque pharetra at. Et aliquet neque, tristique id cras mauris praesent pulvinar. Scelerisque pharetra scelerisque.                      
                            </b-card-text>
                            <b-button href="#" variant="primary">en savoir plus </b-button>
                            </b-card>
                        </slide>
                        <slide class="p-2 ">
                            <b-card title="We Are Brewers" tag="article" style="width: 300px" class="text-center">
                            <b-card-text >
                                22-23 avril 2022
                            </b-card-text>
                            <b-card-text>
                                16 Bd Jules Ferry 75011, Paris                        
                            </b-card-text>
                            <b-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed in lorem nunc, id scelerisque pharetra at. Et aliquet neque, tristique id cras mauris praesent pulvinar. Scelerisque pharetra scelerisque.                      
                            </b-card-text>
                            <b-button href="#" variant="primary">en savoir plus </b-button>
                            </b-card>
                        </slide>
                        <slide class="p-2 ">
                            <b-card title="We Are Brewers" tag="article" style="width: 300px" class="text-center">
                            <b-card-text >
                                22-23 avril 2022
                            </b-card-text>
                            <b-card-text>
                                16 Bd Jules Ferry 75011, Paris                        
                            </b-card-text>
                            <b-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed in lorem nunc, id scelerisque pharetra at. Et aliquet neque, tristique id cras mauris praesent pulvinar. Scelerisque pharetra scelerisque.                      
                            </b-card-text>
                            <b-button href="#" variant="primary">en savoir plus </b-button>
                            </b-card>
                        </slide>
                        <slide class="p-2 ">
                            <b-card title="We Are Brewers" tag="article" style="width: 300px" class="text-center">
                            <b-card-text >
                                22-23 avril 2022
                            </b-card-text>
                            <b-card-text>
                                16 Bd Jules Ferry 75011, Paris                        
                            </b-card-text>
                            <b-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed in lorem nunc, id scelerisque pharetra at. Et aliquet neque, tristique id cras mauris praesent pulvinar. Scelerisque pharetra scelerisque.                      
                            </b-card-text>
                            <b-button href="#" variant="primary">en savoir plus </b-button>
                            </b-card>
                        </slide>
                        <slide class="p-2 ">
                            <b-card title="We Are Brewers" tag="article" style="width: 300px" class="text-center">
                            <b-card-text >
                                22-23 avril 2022
                            </b-card-text>
                            <b-card-text>
                                16 Bd Jules Ferry 75011, Paris                        
                            </b-card-text>
                            <b-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed in lorem nunc, id scelerisque pharetra at. Et aliquet neque, tristique id cras mauris praesent pulvinar. Scelerisque pharetra scelerisque.                      
                            </b-card-text>
                            <b-button href="#" variant="primary">en savoir plus </b-button>
                            </b-card>
                        </slide>
                        <slide class="p-2 ">
                            <b-card title="We Are Brewers" tag="article" style="width: 300px" class="text-center">
                            <b-card-text >
                                22-23 avril 2022
                            </b-card-text>
                            <b-card-text>
                                16 Bd Jules Ferry 75011, Paris                        
                            </b-card-text>
                            <b-card-text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed in lorem nunc, id scelerisque pharetra at. Et aliquet neque, tristique id cras mauris praesent pulvinar. Scelerisque pharetra scelerisque.                      
                            </b-card-text>
                            <b-button href="#" variant="primary">en savoir plus </b-button>
                            </b-card>
                        </slide>
                    </carousel>
                    </ClientOnly>-->
                </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
//import { Carousel, Slide } from 'vue-carousel';
export default {
  metaInfo: {
    title: 'events'
  },
  components: {
    //Carousel,
    //Slide
  },
  /*data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }*/
}
</script>

<style scoped>

.caroussel { 
  width: 100%;
  margin: auto;

}
 h1 {
 
    
        font-weight: 600;
        font-size: 35px;
     line-height: 64px;
       
     font-family: Montserrat;
        letter-spacing: 0.05em;
       
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
</style>
