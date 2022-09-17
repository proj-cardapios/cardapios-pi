<template>
  <v-container fluid class="body">
        <v-row class="row">
          <v-col cols="1"></v-col>
        <v-col cols="5" class="pt-3 ctexto">     
    <v-card-text>
      <h1>Monte seu cardápio com
         base no seu objetivo</h1>
    </v-card-text>

    <v-card-text class="subtitle">
      <h2>quem somos?</h2>
      <h4>Esse site foi criado com o objetivo de ajudar as pessoas, que não tem condições de ter um nutricionista, a alcançar seu objetivo. Aqui você pode escolher entre ganhar, manter ou perder peso e de acordo com as suas informações iremos gerar a quantidade de calorias que você pode ingerir no dia para conquistar o que deseja.</h4>
    </v-card-text>
    <v-card-text class="subtitle">
      <h2>como funciona?</h2>
      <h4>Após inserir as informações necessárias, nosso sistema irá gerar a quantidade de calorias que você pode ingerir no dia baseado na sua taxa metabólica basal. A partir disso, você terá o livre arbítrio para escolher as opções disponíveis disponíveis do nossos alimentos medidos em gramas para escolher o que irá comer no decorrer do dia para manter suas calorias consumidas no seu limite.</h4>
    </v-card-text>
    </v-col>
    <v-col cols="2"></v-col>
    <v-col class="text-center">
            <v-form class="login">
                    <h1 class="titlelogin">login</h1>
                    <v-text-field label="Email" outlined ></v-text-field>
                    <v-text-field label="Senha" outlined></v-text-field>
                    <v-btn @click="entrar" color="#4DC3C8">  Login  </v-btn>
                     <h3 class="titlecadastro">Quer experimentar? Totalmente gratuito!</h3>
                    <v-btn @click="cadastrar" color="#4DC3C8"> cadastrar </v-btn>
            </v-form>
    </v-col>
            
        </v-row>
  </v-container>
</template>

<script>
export default {
 methods: {
  async cadastrar() {
      this.$router.push({ name: "Cadastro" });
  },
  async entrar() {
      this.$router.push({ name: "Home" });
  }
    
 }
}
</script>

<style scoped>

.ctexto {
  padding-left: 3rem;
  text-align: center;
}
.bar {
  margin-bottom: 1rem;
  background: #4DC3C8;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.body {
  font-family:Helvetica, sans-serif;
  padding: 0;
}
.login {
  text-align: center;
  max-width: 16rem;
}
.subtitle {
  text-align: start;
}
.titlelogin {
  padding-bottom: 1rem;
}
.titlecadastro {
  padding-bottom: 1rem;
  padding-top: 2rem;
}
h3 {
  font-weight: bold;
}
img {
  max-height: 7rem;
  max-width: 7rem;
}
.row {
  margin-top: 3rem;
}
</style>