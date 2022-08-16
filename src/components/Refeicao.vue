<template>
<div>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 3"
      :key="i"
    >
    
      <v-expansion-panel-header>
      <h4>refeição X</h4>
      <v-btn color="#4DC3C8" max-width="100px"><v-icon>mdi-pencil</v-icon>editar</v-btn>
      <v-btn color="#B2DFE1" max-width="140px"><v-icon>mdi-cancel</v-icon>Cancelar</v-btn>

      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<script>






export default {
  
  data(){
    return{

    }
  }
}

</script>

<style>

</style>