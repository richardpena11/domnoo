<template>
    <div class="anim_container">
        
        <transition
            appear
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
        >
            <div class="icon icon_phone" delay="0" :left="windowWidth > 1500 ? 100 : 50"></div>
        </transition>

        <transition
            appear
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
        >
            <div class="plus" delay="100" :left="windowWidth > 1500 ? 310 : 155">+</div>
        </transition>

        <transition
            appear
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
        >
            <div class="icon icon_delivery" delay="200" :left="windowWidth > 1500 ? 480 : 240"></div>
        </transition>

        <transition
            appear
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
        >
            <div class="plus" delay="300" :left="windowWidth > 1500 ? 750 : 375">=</div>
        </transition>

        <transition
            appear
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
        >
            <div class="icon icon_pizza" delay="400" :left="windowWidth > 1500 ? 900 : 450"></div>
        </transition>

    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: 0
        }
    },
    methods: {
        beforeEnter(el){
            el.style.left = '-200px'
            el.style.opacity = '0'
        },

        enter(el, done){
            
            let delay = parseInt(el.getAttribute('delay'));
            let left = parseInt(el.getAttribute('left'));

            const Velocity = require('velocity-animate')

            Velocity( el, 
            { opacity: 1, left }, 
            { delay, duration:300, complete: done })

        },

        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>

<style>
    .anim_container{
        position: relative;
        height: 200px;
    }

    .icon{
        background-size: cover !important;
        position: absolute;
    }

    .plus {
        position: absolute;
        font-size: 160px;
        color: #ffffff;
        top: 90px;
    }

    .icon_phone {
        background: url("../../assets/images/icons/icon-phone.png");
        width: 130px;
        height: 130px;
        top: 30px;
    }

    .icon_delivery {
        background: url("../../assets/images/icons/icon-delivery.png");
        width: 200px;
        height: 200px;
    }

    .icon_pizza {
        background: url("../../assets/images/icons/icon-pizza.png");
        width: 200px;
        height: 200px;
    }
    
</style>