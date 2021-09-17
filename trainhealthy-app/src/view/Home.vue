<template>
       <v-row class="mt-8">
           
            <transition 
                 enter-active-class="animate__animated animate__fadeInLeft"
                 leave-active-class="animate__animated animate__fadeOutRight"
                 mode="out-in">
                    
                    <component 
                    :is='ComponentHome'
                    @handleRegisterNew="registernew"
                    @closeForm="tableDataView"
                    ></component>
  
            </transition>

  
       </v-row>
</template>

<script>
import TableUsers from '@/components/tableRegister.vue'
import FormRegister from '@/components/formRegister.vue'
export default {
    components:{
        TableUsers,
        FormRegister
    },
    data(){
        return{
            ComponentHome:'TableUsers',
        }
    },
    methods: {

        registernew(){
            this.ComponentHome = 'FormRegister'
        },
        
        tableDataView(){
            this.ComponentHome = 'TableUsers'
        }
    },

}
</script>

<style lang="scss">

    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.5s ease-out;
    }
</style>