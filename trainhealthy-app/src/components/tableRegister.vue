<template>
   <v-col cols="11" class="mx-auto">
                <v-data-table :headers="headers" :items="DataItem" class="elevation-1" :search="search">
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>USERS </v-toolbar-title>
                                <v-divider  class="mx-4" inset vertical ></v-divider>
                                <v-spacer></v-spacer>
                                <v-btn class="primary" @click="registerUser" >New REGISTER</v-btn>
                            </v-toolbar>
                    </template>
                    <template v-slot:item.num="{item}">
                        <a  @click="$router.push('/VerzoekerDetail/')"> {{item.name}} </a>
                    </template>
                    <template  v-slot:item.human-sex="{ item}">
                        <!-- <v-chip color="success" v-if="item.ver_Status === '1'">Nieuw</v-chip> -->
                        <v-icon v-if="item.sex === 'M'" color="blue">mdi-human-male</v-icon>
                        <v-icon v-if="item.sex === 'F'" color="pink">mdi-human-female</v-icon>
                    </template> 
                    <template v-slot:item.actions="{ item }">
                        <v-btn icon color="primary"><v-icon>mdi-eye</v-icon> </v-btn>
                        <v-btn  color="warning" icon @click="editRequest(item)"><v-icon>mdi-border-color</v-icon></v-btn> 
                    </template>
                </v-data-table> 
        </v-col>
</template>

<script>
export default {
     data(){
         return{
                headers: [ 
                { text:'Name',value: 'name',align: 'center', class:'cyan darken-2 white--text px-0 mx-0'},
                { text: 'DNI', value: 'dni',align: 'center',class:'cyan darken-2 white--text px-0 mx-0' },
                { text: 'Email', value: 'email',align: 'center', class:'cyan darken-2 white--text px-0 mx-0' },
                { text: 'Age', value: 'age', align: 'center', class:'cyan darken-2 white--text px-0 mx-0'},
                { text: 'Sex', value: 'human-sex', align: 'center', class:'cyan darken-2 white--text px-0 mx-0'},
                { text: 'Phone', value: 'phone', align: 'center', class:'cyan darken-2 white--text px-0 mx-0'},
                { text: 'Actions', value: 'actions',  align: 'center', class:'cyan darken-2 white--text px-0 mx-0'}
            ],
            DataItem:[
                {"name":"Luis Gonzalez","dni":"19792546","email":"example@test.com","age":"21","sex":"M","phone":"+58424854789"},
                {"name":"Mauricio Gomez","dni":"17845956","email":"example@test.com","age":"21","sex":"M","phone":"+58424854789"},
                {"name":"Maria Zamora","dni":"47856652","email":"example@test.com","age":"21","sex":"F","phone":"+58424854789"},
                {"name":"Carol Martinez","dni":"14587451","email":"example@test.com","age":"21","sex":"F","phone":"+58424854789"},
            ],
            search:'',
         }
     },
     methods: {
         registerUser(){
             this.$emit('handleRegisterNew');
         }
     },
}
</script>

<style>

</style>