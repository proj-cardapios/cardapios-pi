<template>
  <v-container fluid class="body">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card class="alimentos">
          <Alimento :idalimento="id" v-for="id in Alimentos" :key="id"/>
        </v-card>
        <v-divider color="#B2DFE1"></v-divider>
        <v-card>
          <v-divider color=#4DC3C8></v-divider>
          <v-row>
            <v-col cols="8">
            </v-col>
            <v-col cols="1">
        <v-btn color="#4DC3C8">Cancelar</v-btn>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="1">
        <v-btn color="#B2DFE1">Criar refeição</v-btn>
      </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Alimento from '../components/Alimento.vue'

export default {
    data() {
        return {
            porcao: 0,
            Alimentos: [
              {
              id: 1,
              titulo: "feijão",
              peso: 50,
              calorias:90,
              },
              {
              id: 2,
              titulo: "arroz",
              peso: 50,
              calorias:70,
              },
              {
              id: 3,
              titulo: "Alface",
              peso: 40,
              calorias:50,
              },
              {
              id: 4,
              titulo: "batata cozida",
              peso: 50,
              calorias:80,
              },
            ]
        };
        
    },
    components: { Alimento }
}
  
</script>

<style scoped>
  .body {
    font-family:Helvetica, sans-serif;
    padding: 0;
    text-align: center;
  }
  .alimentos {
    margin-bottom: 2rem;
  }
</style>

