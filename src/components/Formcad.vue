<template>
<v-container fluid class="body">
  <v-row>
  <v-col cols="4"></v-col>
  <v-col cols="4">
    <div class="cad">
    <h2>Crie uma nova conta</h2>
    <v-form class="form">
      <v-text-field label="Nome" outlined ></v-text-field>
      <v-text-field label="Email" outlined ></v-text-field>
      <v-text-field label="Senha" outlined ></v-text-field>
      
    </v-form>
    <h3>informações necessárias</h3>
    <v-form class="form">
      <v-text-field label="Idade" outlined ></v-text-field>
      <v-text-field label="Gênero" outlined ></v-text-field>
      <v-text-field label="Peso" outlined ></v-text-field>
      <v-text-field label="Altura" outlined ></v-text-field>
    </v-form>
    <h3>Alergias</h3>
    <v-checkbox
      v-model="Gluten"
      :label="`Gluten`"
    ></v-checkbox>
    <v-checkbox
      v-model="Lactose"
      :label="`Lactose`"
    ></v-checkbox>
    <v-checkbox
      v-model="Frutos"
      :label="`Frutos do Mar`"
    ></v-checkbox>
    </div>
    <v-row class="botoes">
      <v-col cols="3">
        <v-btn color="#4DC3C8">Cancelar</v-btn>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="3">
        <v-btn color="#4DC3C8">  Cadastrar-se  </v-btn>
      </v-col>
    </v-row>
  </v-col>
  <v-col cols="4"></v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
    data () {
      return {
        Gluten: false,
        Lactose: false,
        Frutos: false,
      }
    },
  }
</script>

<style scoped>
.botoes {
  margin-top: 1rem;
}
.bar {
  margin-bottom: 1rem;
  background: #4DC3C8;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
img {
  max-height: 7rem;
  max-width: 7rem;
}
.body {
  font-family:Helvetica, sans-serif;
  padding: 0;
}
.cad {
  text-align: center;
  margin-top: 1rem;
}
.form {
  margin-top: 2rem;
}
</style>