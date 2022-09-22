<template>
<div>
    <v-container class="body" fluid>
    <h2>Meu perfil</h2>
    <v-form>
      <v-container>
      <v-text-field label="Nome"  ></v-text-field>
      <v-text-field label="Email"  ></v-text-field>
      <h3>Informações Nutricionais</h3>
      <v-text-field label="Idade"  ></v-text-field>
      <v-text-field label="Gênero"  ></v-text-field>
      <v-text-field label="Peso"  ></v-text-field>
      <v-text-field label="Altura"  ></v-text-field>
      </v-container>  
      </v-form>
      <v-row>
        <v-col cols="7"></v-col>
        <v-col cols="5">
        <v-btn color="#4DC3C8" @click="Editarperfil">Editar Conta</v-btn>
        
        <v-btn color="#B2DFE1" @click="Desconectar">Desconectar Conta</v-btn>
      </v-col>
        
      </v-row>  

  </v-container>
</div>
</template>

<script>
export default {
    methods: {
        Editarperfil() {
            this.$router.push({ name: "Cadastro" });
        },
        Desconectar() {
            this.$router.push({ name: "Login" });
        },
    }
}
</script>

<style>

</style>