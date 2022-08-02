<template>
  <v-container fluid class="body">
    <div class="bar">
      <img src="@/assets/MENU.jpg" @click="Entrarhome">
    </div>
    <v-row >
      <v-col cols="1"></v-col>
      <v-col cols="6">
        <v-card>
          <div> 
         <v-divider color=#4DC3C8></v-divider>
        <v-card-subtitle >
          <h3>Nome do Cardápio  </h3>
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-subtitle >
          nome ntntnttn
        </v-card-subtitle>
        <v-divider color="#4DC3C8"></v-divider>
        <v-card-subtitle>
        <p >Porções</p>  
        </v-card-subtitle>
        <v-divider color="#4DC3C8"></v-divider>
        <v-card-text>
          100 gramas - Arroz parboilizado - 120 Calorias
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          120 gramas - Peito de Frango - 200 Calorias
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          60 gramas - Alface - 50 Calorias
        </v-card-text>
      </div>
        </v-card>

      </v-col>
      <v-col cols="5"></v-col>
    </v-row>
    <v-row>
  <v-col col="1  "></v-col>
  <v-col cols="2">
 <v-card
    class="mx-auto"
    max-width="344"
    
  >
    <v-card-actions >
        {{Reftitle1}}
        <v-spacer></v-spacer>
      <v-btn
      color="#4DC3C8"
        icon
        @click="show1 = !show1"
      >
        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition >
      <div v-show="show1" >
        <v-divider color=#4DC3C8></v-divider>
        <v-card-subtitle >
          Peso total {{ptotal}}g
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-subtitle >
          Calorias total {{ptotal}}cal
        </v-card-subtitle>
        <v-divider color="#4DC3C8"></v-divider>
        <v-card-subtitle>
        <p >Porções</p>  
        </v-card-subtitle>
        <v-divider color="#4DC3C8"></v-divider>
        <v-card-text>
          100 gramas - Arroz parboilizado - 120 Calorias
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          120 gramas - Peito de Frango - 200 Calorias
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          60 gramas - Alface - 50 Calorias
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card> 
  </v-col>
  <v-col cols="2">
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-actions >
        {{Reftitle2}}
        <v-spacer></v-spacer>
      <v-btn
      color="#4DC3C8"
        icon
        @click="show2 = !show2"
      >
        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition >
      <div v-show="show2">
        <v-divider></v-divider>

        <v-card-text >
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card> 
  </v-col>
  <v-col cols="2">
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-actions >
        {{Reftitle3}}
        <v-spacer></v-spacer>
      <v-btn
      color="#4DC3C8"
        icon
        @click="show3 = !show3"
      >
        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition >
      <div v-show="show3">
        <v-divider></v-divider>

        <v-card-text >
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card> 
  </v-col>
  <v-col cols="2">
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-actions >
        {{Reftitle4}}
        <v-spacer></v-spacer>
      <v-btn
      color="#4DC3C8"
        icon
        @click="show4 = !show4"
      >
        <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition >
      <div v-show="show4">
        <v-divider></v-divider>

        <v-card-text >
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card> 
  </v-col>
  <v-col cols="2">
 <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-actions >
        {{Reftitle5}}
        <v-spacer></v-spacer>
      <v-btn
      color="#4DC3C8"
        icon
        @click="show5 = !show5"
      >
        <v-icon>{{ show5 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition >
      <div v-show="show5">
        <v-divider></v-divider>

        <v-card-text >
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card> 
  </v-col>
  <v-col col="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            ptotal: 5,
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            Reftitle1: 'Refeição1',
            Reftitle2: 'Refeição2',
            Reftitle3: 'Refeição3',
            Reftitle4: 'Refeição4',  
            Reftitle5: 'Refeição5',      }
    },
    methods: {
  async Entrarhome() {
      this.$router.push({ name: "Home" });
  },
    },
    } 
</script>

<style>
.infocard {
  text-align: center;
}
.porcoes {
  text-decoration-color:#4DC3C8;
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
  text-align: center;
}
</style>