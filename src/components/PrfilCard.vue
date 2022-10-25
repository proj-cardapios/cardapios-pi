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
        <v-card-subtitile>
          <v-btn color="#B2DFE1" @click="Desconectar">Desconectar Conta</v-btn>
        </v-card-subtitile>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="11">
            <v-divider color="#B2DFE1"></v-divider>
            <v-card-subtitle>
              <h2>Calcule seu IMC</h2>
              <h3>
                Com base nos dados do Usuario, o sistema calcula de forma
                automatica o deu indice de massa corporal
              </h3>
            </v-card-subtitle>

            <v-divider color="#B2DFE1"></v-divider>
            <v-row class="IMCcalc">
              <v-col cols="3">
                <v-btn color="#4DC3C8" class="btncalc">Calcular</v-btn>
                
              </v-col>
              <v-col cols="9">
                <v-divider color="#B2DFE1"></v-divider>
                <v-card-subtitle>
                  <imcresultado></imcresultado>
                </v-card-subtitle>
                <v-divider color="#B2DFE1"></v-divider>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import imcresultado from "./IMC_resultado.vue";
export default {
  components: { imcresultado },
  props: ["Usuario"],
};
</script>

<style scoped>
.editcont {
  margin: 1px 0 0 0;
}
.IMCcalc {
  margin: 1px 0 0 0;
}
.btncalc {
  margin: 1rem 0 0 0;
}
</style>
