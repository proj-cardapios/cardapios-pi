<template>
  <v-container fluid>
    <v-app-bar
  color="purple"
  elevation="20"
  shaped
></v-app-bar>
        <v-row>
        <v-col width="250px">

          <p>EWUFWLJEHBFWLJFBWW</p>
        </v-col>
        <v-col class="align-center justify-center text-center">
            <v-form class="login">
                    <h1>login</h1>
                    <h4>Não tem uma conta? <router-link to="/about">clique aqui</router-link></h4>
                    <v-text-field label="Email" outlined ></v-text-field>
                    <v-text-field label="Senha" outlined></v-text-field>
            <v-btn>Login</v-btn>
                    
                    
            </v-form>
        </v-col>
            
        </v-row>
  </v-container>
</template>
<style scoped>
</style>