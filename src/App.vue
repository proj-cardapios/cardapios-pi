<template>
  <v-container fluid tex-center>
      <v-row>
          <v-col class="text-center pt-15">
              <h1 class="h1">login</h1>
          </v-col>
        </v-row>
        <v-row class="mx-auto elevation 3 pa-15 text-center ">
          <v-col >
          <p>UJHDKJWHVJKLWERHVPKEWUFWLJEHBFWLJFBWWVBEJVBEWRJHVBERJHVBERJVB</p>
        </v-col>
            <v-col class="pl-15 pr-15">
              <v-col class="titulo_login">
              <h1 class="h1">login</h1>
              </v-col>
                <v-form>
                    <v-text-field label="Email" ></v-text-field>
                    <v-text-field label="Senha" ></v-text-field>
                    <v-btn>Login</v-btn>
                    
                    
                </v-form>
            </v-col>
            
        </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.titulo_login {
  text-align: center;
}
</style>
