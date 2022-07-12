<template>
  <v-container fluid class="body">
    <div class="bar">
      <h1>my diet</h1>
    </div>
        <v-row>
          <v-col cols="1"></v-col>
        <v-col cols="5" class="pt-3 ctexto">
          <v-card 
    max-width="600" outlined>     
    <v-card-text>
      <h1>Monte seu cardápio com
         base no seu objetivo</h1>
    </v-card-text>
    <v-card-text class="subtitle">
      <h3>quem somos?</h3>
    </v-card-text>
    <v-card-text class="subtitle">
      <h5>Esse site foi criado com o objetivo de ajudar as pessoas, que não tem condições de ter um nutricionista, a alcançar seu objetivo. Aqui você pode escolher entre ganhar, manter ou perder peso e de acordo com as suas informações iremos gerar a quantidade de calorias que você pode ingerir no dia para conquistar o que deseja.</h5>
    </v-card-text>
    <v-card-text class="subtitle">
      <h3>como funciona?</h3>
    </v-card-text>
    <v-card-text class="subtitle">
      <h5>Após inserir as informações necessárias, nosso sistema irá gerar a quantidade de calorias que você pode ingerir no dia baseado na sua taxa metabólica basal. A partir disso, você terá o livre arbítrio para escolher as opções disponíveis disponíveis do nossos alimentos medidos em gramas para escolher o que irá comer no decorrer do dia para manter suas calorias consumidas no seu limite.</h5>
    </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col class="text-center">
            <v-form class="login">
                    <h1 class="titlelogin">login</h1>
                    <v-text-field label="Email" outlined ></v-text-field>
                    <v-text-field label="Senha" outlined></v-text-field>
                    <v-btn>  Login  </v-btn>
                     <h3 class="titlecadastro">Quer experimentar? Totalmente gratuito!</h3>
                    <v-btn>  cadastrar  </v-btn>
            </v-form>
        </v-col>
            
        </v-row>
  </v-container>
</template>
<style scoped>
.ctexto {
  padding-left: 3rem;
  text-align: center;
}
.bar {
  margin-bottom: 3rem;
  background: blueviolet;
  padding: 2rem 0 2rem 0;
  text-align: center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.body {
  font-family:Arial, Helvetica, sans-serif;
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
</style>