<template>
  <v-container fluid class="body">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card >
          <Alimento :titulo="id" v-for="id in Alimentos" :key="id"/>
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
              titulo: "feijão"
              },
              {
              id: 2,
              titulo: "arroz"
              },
              {
              id: 3,
              titulo: "Alface"
              },
              {
              id: 4,
              titulo: "batata cozida"
              },
            ]
        };
        
    },
    methods: {
        async Addporcao() {
            this.porcao = this.porcao + 1;
        },
        async Tirarporcao() {
            this.porcao = this.porcao - 1;
        },
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

