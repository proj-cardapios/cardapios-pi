<template>
          <div class="infoalimentos"> 
              <v-divider color=#4DC3C8></v-divider>
              <v-card-subtitle >
                <h3 class="alimentocard">{{idalimento.titulo}}</h3>
                <v-btn color="#4DC3C8" @click="Tirarporcao"><v-icon>mdi-minus</v-icon></v-btn>
                <v-btn>{{idalimento.porcao}}</v-btn>
                <v-btn color="#B2DFE1" @click="Addporcao"><v-icon>mdi-plus</v-icon></v-btn>
              </v-card-subtitle>
              <v-divider></v-divider>
              <v-card-subtitle >
                Peso/Porção: {{idalimento.peso}} gramas
              </v-card-subtitle>
              <v-divider></v-divider>
              <v-card-subtitle >
                Caloria: {{idalimento.calorias}} cal
              </v-card-subtitle>
              <v-divider color="#4DC3C8"></v-divider>
          </div>
</template>

<script>
export default {
    props: ['idalimento'],
  data () {
  },
  methods: {
    async Addporcao() {
    this.porcao = this.porcao + 1
  },
  async Tirarporcao() {
      this.porcao = this.porcao - 1
  },
}
}
</script>

<style scoped>
.infoalimentos {
    margin: 4px 0 ;
}
</style>

