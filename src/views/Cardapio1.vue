<template>
  <v-container fluid class="body">

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
          {{titulo}}
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
              <v-btn color="#B2DFE1" @click="formAlimentos"><v-icon>mdi-cancel</v-icon>Cancelar</v-btn>
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
        <v-row>
          <v-col cols="3">

          </v-col>
          <v-col cols="4">
            <v-card-subtitle>
            <h4>{{refeicao.titulo}} fgsdfgsgd</h4></v-card-subtitle>
          </v-col>
          <v-col cols="1">
            <v-btn color="#4DC3C8" max-width="100px" @click="formAlimentos"><v-icon>mdi-pencil</v-icon>editar</v-btn>
          </v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1">
            <v-btn color="#B2DFE1" max-width="140px"><v-icon>mdi-delete </v-icon>Excluir</v-btn>
          </v-col>
        </v-row>
        


      </v-expansion-panel-header> 
        Para adicionar clique na opção "editar"
        <v-text>
          <v-btn color="#4DC3C8" max-width="100px" @click="formAlimentos"><v-icon>mdi-pencil</v-icon>editar</v-btn>
        </v-text>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</v-col>
<v-col cols="1"></v-col>
    
<v-col col="1"></v-col>
      <v-col cols="10">
        <v-alert class="formcardapio" transition="scale-transition" v-show="formAlimentos" elevation="6" outlined shaped>
        <v-form>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field label="Nome da refeição" counter maxlength="20"></v-text-field> 
              <v-text-field label="Hora da refeição: XX:XX"></v-text-field> 
            </v-col>
            </v-row>
            <v-row>
            <v-col
              cols="12"
              sm="4">
    
              <v-btn color="#4DC3C8"><v-icon>mdi-plus</v-icon> Criar refeição</v-btn>
            </v-col>
            <v-col cols="12" sm="1"></v-col>
            <v-col
              cols="12"
              sm="2">
              <v-btn color="#B2DFE1"><v-icon>mdi-cancel</v-icon>Cancelar</v-btn>
            </v-col>
          </v-row>
        </v-container>
        </v-form>
    </v-alert>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Refeicao from '../components/Refeicao.vue'
export default {
  props: ['titulo'],
  components: {
      Refeicao
    }, 
    data() {
        return {
          Campotitulo: "",
          formRefs:false,
          formAlimentos:false,
            dialog: false,
            ptotal: 5,
            Refeicoes:[]
        };
    },
    methods: {
        async Entrarhome() {
            this.$router.push({ name: "Home" });
        },
        async Editarrefs() {
          this.$router.push({name: "Refeicoes"})
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
.body {
  font-family:Helvetica, sans-serif;
  padding: 0;
  text-align: center;
}
</style>