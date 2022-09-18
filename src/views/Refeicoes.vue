<template>
  <v-container fluid class="body">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card >
          <Alimento :idalimento="id" v-for="id in Alimentos" :key="id"/>
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
  .alimentocard {
    text-align: left;
  }
</style>

