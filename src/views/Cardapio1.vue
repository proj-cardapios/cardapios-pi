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
          pisojehgseojkg
        </v-card-subtitle>
        <v-divider color="#4DC3C8"></v-divider>
      </div>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card-text>
            <v-btn color="#4DC3C8" @click.stop="formcard = !formcard"><v-icon>mdi-plus</v-icon></v-btn>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="10">
    <v-alert class="formcardapio" transition="scale-transition" v-show="formcard" elevation="6" outlined shaped>
        <v-form>
        <v-container>
          <v-row>
            <v-col class="d-flex"
              
            >
              <v-text-field
                :rules="[rules.required, rules.counter]"
                label="Nome da refeição"
                counter
                maxlength="20"
              ></v-text-field>  
            </v-col>
            </v-row>
            <v-row>
            <v-col
              cols="12"
              sm="4">
    
              <v-btn color="#4DC3C8" @click.stop=""><v-icon>mdi-plus</v-icon> Criar refeição</v-btn>
            </v-col>
            <v-col cols="12" sm="1"></v-col>
            <v-col
              cols="12"
              sm="2">
              <v-btn color="#1C535C" @click.stop="formcard = !formcard"><v-icon>mdi-cancel</v-icon>Cancelar</v-btn>
            </v-col>
          </v-row>
        </v-container>
        </v-form>
    </v-alert>
    </v-col>
      <v-col cols="1"></v-col> 
    </v-row>
    <v-row>

      <v-col cols="1"></v-col>
      <v-col cols="10">
  <refeicao/>
  </v-col>
        <v-col cols="1"></v-col>

    </v-row>
  </v-container>
</template>

<script>
import Home from '../views/Home.vue'
import Refeicao from '../components/Refeicao.vue'
export default {
  components: {
        Home,Refeicao
    }, 
    data() {
        return {
          formcard:false,
          refeicao: false,
            dialog: false,
            ptotal: 5,
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            Reftitle1: "Refeição1",
            Reftitle2: "Refeição2",
            Reftitle3: "Refeição3",
            Reftitle4: "Refeição4",
            Reftitle5: "Refeição5",
            rules: {
          required: value => !!value || 'obrigatório  .',
          counter: value => value.length <= 20 || 'Max 20 caracteres',
          refeicoescounter: Number =>  value.length <= 5 || 'Maximo de 5 refeições',
          
        },
        };
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