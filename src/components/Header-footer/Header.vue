<template>
    <header>
        <div class="container clear">
            <div class="logo">
                <img :src="logoIcon">
            </div>
            <div class="nav">
                <img 
                    :src="menuIcon"
                    @click="showSidePanel = !showSidePanel"
                >
            </div>

            <md-drawer
                class="side-drawer"
                :md-right="true"
                :md-active.sync="showSidePanel"
            >
            
                <md-toolbar class="md-transparent" md-elevation="0">
                    <img class="md-title" :src="logoIcon">
                </md-toolbar>

                <md-list>

                    <md-list-item>
                        <a
                        href="#menu"
                        class="md-list-item-text"
                        :style="{'color':'#000'}"
                        @click="showSidePanel = !showSidePanel"
                        >Menu</a>
                    </md-list-item>

                    <md-list-item>
                        <a
                        href="#callUs" 
                        class="md-list-item-text"
                        :style="{'color':'#000'}"
                        @click="showSidePanel = !showSidePanel"
                        >Call us</a>
                    </md-list-item>

                    <md-list-item>
                        <a
                        href="#newsletter" 
                        class="md-list-item-text"
                        :style="{'color':'#000'}"
                        @click="showSidePanel = !showSidePanel"
                        >Newsletter</a>
                    </md-list-item>
                </md-list>

            </md-drawer>
        </div>
    </header>
</template>

<script>
import Logo from '../../assets/images/logo.png'
import Menu from '../../assets/images/menu.png'

export default {
    data(){
        return{
            logoIcon: Logo,
            menuIcon: Menu,
            showSidePanel: false
        }
    }
}
</script>
