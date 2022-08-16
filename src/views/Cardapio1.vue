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
            <v-btn color="#4DC3C8" @click="formRefs = true"><v-icon>mdi-plus</v-icon></v-btn>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="10">
    <v-alert class="formcardapio" transition="scale-transition" v-show="formRefs" elevation="6" outlined shaped>
        <v-form>
        <v-container>
          <v-row>
            <v-col class="d-flex">
              <v-text-field
                :rules="[rules.required, rules.counter]"
                v-model="Campotitulo"
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
    
              <v-btn color="#4DC3C8" @click.stop="FuncAddRefeicao"><v-icon>mdi-plus</v-icon> Criar refeição</v-btn>
            </v-col>
            <v-col cols="12" sm="1"></v-col>
            <v-col
              cols="12"
              sm="2">
              <v-btn color="#B2DFE1" @click.stop="formRefs = !formRefs"><v-icon>mdi-cancel</v-icon>Cancelar</v-btn>
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
        <div>
  <v-expansion-panels>
    <v-expansion-panel v-for="refeicao in Refeicoes" :key="refeicao"
    >
    
      <v-expansion-panel-header>
      <h4>{{Refeicao.titulo}}</h4>
      <v-btn color="#4DC3C8" max-width="100px"><v-icon>mdi-pencil</v-icon>editar</v-btn>
      <v-btn color="#B2DFE1" max-width="140px"><v-icon>mdi-cancel</v-icon>Cancelar</v-btn>

      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
  </v-col>
        <v-col cols="1"></v-col>

    </v-row>
  </v-container>
</template>

<script>
import Refeicao from '../components/Refeicao.vue'
export default {
  components: {
      Refeicao
    }, 
    data() {
        return {
          Campotitulo: "",
          formRefs:false,
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
            Refeicoes:[],
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
         FuncAddRefeicao(){
      if(this.Campotitulo){
        this.Refeicoes.push({
          titulo:this.Campotitulo
        })
      }
      this.Campotitulo="";
    }
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