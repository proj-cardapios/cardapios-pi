<template>
  <v-card elevation="6" shaped class="vcards">
    <v-card-title>
      <h2>Perfil</h2>
    </v-card-title>
    <v-row>
      <v-col cols="3">
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Nome: {{ Usuario.Nome }}</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Email: {{ Usuario.Email }}</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Idade: {{ Usuario.Idade }} anos</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Gênero: {{ Usuario.Genero }}</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
      </v-col>
      <v-col cols="3">
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Peso: {{ Usuario.Peso }} kg</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle>
          <h3>Altura: {{ Usuario.Altura }} cm</h3>
        </v-card-subtitle>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card-subtitle class="editcont">
          <v-btn color="#4DC3C8" @click="Editarperfil">Editar Conta</v-btn>
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="8">
            <v-divider color="#B2DFE1"></v-divider>
            <v-card-subtitle>
              <h3></h3>
            </v-card-subtitle>

            <v-divider color="#B2DFE1"></v-divider>
            <v-card-subtitile>
              <v-btn color="#B2DFE1" @click="Desconectar"
                >Desconectar Conta</v-btn
              > 
            </v-card-subtitile>
            <v-btn color="#B2DFE1" @click="Desconectar"
              >Desconectar Conta</v-btn
            >
          </v-col>
          <v-col cols="4">
            <v-btn color="#B2DFE1" @click="Desconectar"
              >Desconectar Conta</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["Usuario"],
};
</script>

<style scoped>
.editcont {
  margin: 16px 0 0 0;
}
</style>
