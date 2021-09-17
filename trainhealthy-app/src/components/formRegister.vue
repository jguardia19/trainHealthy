<template>
  
             <v-col cols="10" class="mx-auto">
                <v-row class="mb-5">
                    <v-col cols="12">
                        <v-btn color="error" @click="backTable">Cerrar</v-btn>
                    </v-col>
                    <v-col cols="12">
                        {{pasos}}/10
                        <template>
                            <v-progress-linear :value="timelineValue"></v-progress-linear>
                        </template>
                    </v-col>
                </v-row>
                <v-card elevation="3">
                    <v-card-title class="cyan darken-2">
                        <h2 class="TrainHealthy_subtitle ">Register new user</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-row class="mt-5">
                            <v-col cols="12">
                                <h3 class="TrainHealthy_subtitle__form">DATA GENERAL</h3>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field type="text" label="Name" outlined  append-icon="mdi-account"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field type="text" label="DNI" outlined  append-icon="mdi-badge-account-horizontal"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field type="text" label="Email" outlined  append-icon="mdi-email"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field type="number" label="Age" outlined  append-icon="mdi-account" min="18"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field type="text" label="Phone" outlined  append-icon="mdi-phone"></v-text-field>
                            </v-col>
                             <v-col cols="12" sm="6">
                                <v-autocomplete 
                                label="Sex"
                                :items="Sex"
                                value="value"
                                @change="handleAutomcomplete(sex)"
                                v-model="sex"
                                text="text"
                                :color="color"
                                outlined
                                :append-icon="icon"
                                ></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-row>
                            <v-col cols="12" class="text-right">
                                <v-btn 
                                   class="mr-3"
                                   color="primary" 
                                   @click="backForm()"
                                   v-if="pasos>1"
                                   >
                                   <v-icon left dark>mdi-arrow-left-thin-circle-outline</v-icon>
                                   Previous
                                </v-btn>
                                <v-btn 
                                   color="primary" 
                                   @click="nextForm()"
                                   v-if="pasos<10"
                                   >
                                   Next<v-icon right dark>mdi-arrow-right-thin-circle-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
           </v-col>
</template>

<script>
export default {
    data(){
        return{
            Sex:[
                {"value":"M","text":"Male"},
                {"value":"F","text":"Female"}
            ],
            sex:'',
            color:"Gray",
            icon:"mdi-human-male-female",
            pasos:1,
            timelineValue:10,
        }
    },
   
   methods: {
       backTable(){
           this.$emit('closeForm')
       },

       handleAutomcomplete(param){
           if(param === 'M'){
               this.color = 'blue'
               this.icon = 'mdi-human-male'
           }else{
                this.color = 'pink'
               this.icon = 'mdi-human-female'
           }
       },

       nextForm(){
           this.timelineValue+=10
           this.pasos++
       },

       backForm(){
           this.timelineValue -= 10
           this.pasos--
       }
   },
}
</script>

<style lang="scss">
     
     $color_tema:#0097a7;

    .TrainHealthy_subtitle{
        color:#fff;
        text-align:center;
    }
    .TrainHealthy_subtitle__form{
        color:$color_tema;
    }
</style>