<template>
    <div>
        <div class="call_us_container">
            <div class="container">
                
                <div class="first" v-scroll-reveal.reset="{delay:200, scale:2}">
                    <h1>Hungry ?</h1>
                </div>

                <div 
                    class="second" 
                    v-scroll-reveal.reset="{delay:100, afterReveal:() => {
                        secondAnim = true
                    }}"
                >

                    <div v-if="secondAnim">
                        <compAnim/>
                    </div>
                </div>

                <div class="third" v-scroll-reveal.reset="{delay:600, scale:2}">
                    <span>Give us a Call</span> <span>(000) 000-0000</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import compAnim from './anim.vue';

export default {

    data(){
        return{
            secondAnim: false
        }
    },

    components:{
        compAnim
    }
}
</script>