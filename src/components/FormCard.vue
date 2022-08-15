<template>
  <div>
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
                label="Numero de refeições(Min 3 e Max 5)"
                counter 
                maxlength="1"
              ></v-text-field> 
            </v-col>

            <v-col
              cols="12"
              sm="2">
    
              <v-btn color="#4DC3C8" ><v-icon>mdi-plus</v-icon> Criar cardápio</v-btn>
            </v-col>
            <v-col
              cols="12"
              sm="2">
              <v-btn color="#ff0000"><v-icon>mdi-cancel</v-icon>Cancelar</v-btn>
            </v-col>
          </v-row>
        </v-container>
        </v-form>
        </v-alert>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>