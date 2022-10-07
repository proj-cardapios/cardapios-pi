<template>
    <v-app>
      <div class="bar">
      <v-menu 
      open-on-hover
      bottom
      offset-y
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn class="menu"
          color="#B2DFE1"
          v-bind="attrs"
          v-on="on"
        >
        <v-icon color="#4DC3C8">mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list color="#B2DFE1">
        <v-list-item>
        <v-btn dense color="#4DC3C8" >
          <v-list-item-title @click="Entrarhome">Página Inicial</v-list-item-title>
        </v-btn>
        <v-btn dense color="#4DC3C8">
          <v-list-item-title @click="Entrarperfil">Perfil</v-list-item-title>
        </v-btn>
        <v-btn dense color="#4DC3C8">
          <v-list-item-title @click="Entrarlogin">Sair</v-list-item-title>
        </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
      <img src="@/assets/MENU.jpg" @click="Entrarhome">
    </div>
    <router-view></router-view>
    </v-app>
</template>

<script>
export default {
  data: () => ({
    }),
    methods: {
        async Entrarhome() {
            this.$router.push({ name: "Home" });
        },
        async Editarcards() {
          this.$router.push({name: "Cardapios"})
        },
        async Entrarperfil() {
          this.$router.push({name: "Perfil"})
        },
        async Entrarlogin() {
          this.$router.push({name: "Login"})
        },
      },
}
</script>

<style scoped>
.bar {

  background: #4DC3C8;
  padding: 1rem 0 0 0;
  text-align:left;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
img {
  margin-left: 42%;
  max-height: 7rem;
  max-width: 7rem;
}
.menu{
  margin-left: 2rem;
  margin-bottom: 5rem;
}
</style>