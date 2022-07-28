<template>
    <v-container fluid class="body">
    <div class="bar">
      <img src="@/assets/MENU.jpg">
    </div>
    <v-row>
    <v-col cols="1"></v-col>
    <v-col cols="10">
        <v-card elevation="2" shaped >
            <v-card-title> 
               Quer saber mais sobre o projeto?
            </v-card-title>
        <v-card-title>
            <v-btn color="#4DC3C8" @click.stop="saibamais = !saibamais">Clique aqui</v-btn>
        </v-card-title>
        </v-card>
        <v-card elevation="4">
        <v-alert transition="scale-transition" v-model="saibamais" elevation="4" color="#4DC3C8" ><span>ksdfujhsdgjhgkjwhefkwjegekwfbewfhjkewkfjhewkfhbwekfhewkfhewkfhjwlkfjhwkfjhwkfjhwkfwhfkjwhfewjfhekfjhekfjesfksjfhn</span></v-alert>
        </v-card>
        <v-card class="cardapios" elevation="2" outlined shaped >
        <v-card-title >
            <h2>Cardápios</h2>
        </v-card-title>
          
        <v-card-text>
            <v-btn color="#4DC3C8" class="card1" v-show="card1" ><v-icon>mdi-food-apple</v-icon> {{Titulocard}}</v-btn>
            <v-btn color="#4DC3C8" @click.stop="formcard = !formcard"><v-icon>mdi-plus</v-icon></v-btn>
        </v-card-text>
        </v-card>
        <v-alert class="formcardapio" transition="scale-transition" v-model="formcard" elevation="6" outlined shaped>
        <v-form>
        <v-container>
          <v-row>
            <v-col class="d-flex"
              cols="12"
              sm="8"
            >
              <v-text-field
                v-model="Titulocard"
                :rules="[rules.required, rules.counter]"
                label="Nome do cardápio"
                counter
                maxlength="20"
              ></v-text-field>  
              <v-text-field
                v-models="Nref"
                :rules="[rules.refeicoescounter]"
                label="Numero de refeições(Min 3 e Max 5)"
                counter 
                maxlength="1"
              ></v-text-field> 
            </v-col>

            <v-col
              cols="12"
              sm="2">
    
              <v-btn color="#4DC3C8" @click.stop="card1 = !card"><v-icon>mdi-plus</v-icon> Criar cardápio</v-btn>
            </v-col>
            <v-col
              cols="12"
              sm="2">
              <v-btn color="#ff0000" @click.stop="formcard = !formcard"><v-icon>mdi-cancel</v-icon>Cancelar</v-btn>
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
export default {
    data() {
        return {
          card1: false,
            formcard: false,
            saibamais:false,
            titulocard: 'Preliminary report',
            email: '',
        rules: {
          required: value => !!value || 'obrigatório  .',
          counter: value => value.length <= 20 || 'Max 20 caracteres',
          refeicoescounter: Number =>  value.length <= 5 || 'Maximo de 5 refeições',
          
        }
    }
}
}
</script>

<style>
.row {
  margin-top: 3rem;
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
.cardapios {
  margin-top: 2rem;
}
.formcardapio {
  margin-top: 2rem;
}
</style>