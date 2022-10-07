<template>
  <v-container fluid class="body">
    <div>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10" class="saiba">
          <v-card elevation="2" shaped>
            <v-card-title>
              <h3>Quer saber mais sobre o projeto?</h3></v-card-title
            >
            <v-card-title>
              <v-btn color="#4DC3C8" @click.stop="saibamais = !saibamais"
                >Clique aqui</v-btn
              >
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-card elevation="4">
            <v-alert
              transition="scale-transition"
              v-model="saibamais"
              elevation="4"
              color="#4DC3C8"
              ><span>
                <v-card-title>
                  <v-icon class="icondevs">mdi-account</v-icon>
                  <h2>Alunos / Devs</h2>
                </v-card-title>
                <v-row>
                  <v-col cols="4">
                    <v-card color="#B2DFE1" class="alunos">
                      <v-card-subtitle
                        ><img src="@/assets/imagem_jorge2.png"
                      /></v-card-subtitle>
                      <h3>Jorge Luis Zanela</h3>
                      <h6>Joinville</h6>
                      <h6>Santa Catarina</h6>
                      <p>
                        ksjdfggsjkfhsfhwpikehfwkehfwkiefhwkjfhwkefhijhfskjhvkjhskjhffhskjhfsdfhjhwuhcanjcajfhakjfhakjfhkfhakfckjnawcihfaakjfchuh
                      </p>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card color="#B2DFE1" class="alunos">
                      <v-card-subtitle
                        ><img src="@/assets/amanda_perfil.png"
                      /></v-card-subtitle>
                      <h3>Amanda Vincenzi</h3>
                      <h6>Araquari</h6>
                      <h6>Santa Catarina</h6>
                      <p>
                        ksjdfggsjkfhsfhwpikehfwkehfwkiefhwkjfhwkefhijhfskjhvkjhskjhffhskjhfsdfhjhwuhcanjcajfhakjfhakjfhkfhakfckjnawcihfaakjfchuh
                      </p>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card color="#B2DFE1" class="alunos">
                      <v-card-subtitle
                        ><img src="@/assets/maria_perfil.png"
                      /></v-card-subtitle>
                      <h3>Maria Eduarda</h3>
                      <h6>Joinville</h6>
                      <h6>Santa Catarina</h6>
                      <p>
                        ksjdfggsjkfhsfhwpikehfwkehfwkiefhwkjfhwkefhijhfskjhvkjhskjhffhskjhfsdfhjhwuhcanjcajfhakjfhakjfhkfhakfckjnawcihfaakjfchuh
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </span></v-alert
            >
          </v-card>
          <v-divider color="#4DC3C8"></v-divider>
          <v-card class="cardapios" elevation="2" outlined shaped>
            <v-card-title>
              <h2>Cardápios</h2>
            </v-card-title>
            <v-card-text>
              <Btncard :titulo="id" v-for="id in Cardapios" :key="id"></Btncard>
            </v-card-text>
            <v-card-text>
              <v-btn color="#4DC3C8" @click.stop="formcard = !formcard"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>

        <v-col cols="10">
          <v-divider color="#4DC3C8" v-show="formcard"></v-divider>
          <v-alert
            class="formcardapio"
            transition="scale-transition"
            v-show="formcard"
            elevation="6"
            outlined
            shaped
          >
            <v-form>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="Campotitulo"
                      :rules="[rules.required, rules.counter]"
                      label="Nome do cardápio"
                      counter
                      maxlength="20"
                    ></v-text-field>
                    <v-text-field
                      v-model="Comentario"
                      label="Comentário"
                      counter
                      maxlength="80"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="4">
                    <v-btn color="#4DC3C8" @click.stop="FuncAddCardapio"
                      ><v-icon>mdi-plus</v-icon> Criar cardápio</v-btn
                    >
                  </v-col>
                  <v-col cols="12" sm="1"></v-col>
                  <v-col cols="12" sm="2">
                    <v-btn color="#B2DFE1" @click.stop="formcard = !formcard"
                      ><v-icon>mdi-cancel</v-icon>Cancelar</v-btn
                    >
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
          <v-divider color="#4DC3C8"></v-divider>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10" class="saiba">
          <v-card elevation="3" shaped>
            <v-card-title><h2>Perfil</h2> </v-card-title>
            <v-row>
              <v-col cols="3">
                <v-divider color="#B2DFE1"></v-divider>
                <v-card-subtitle>
                  <h3>Nome: {{ Usuario.Nome }}</h3>
                </v-card-subtitle>
                <v-divider color="#B2DFE1"></v-divider>
                <v-card-subtitle>
                  <h3>Email: {{ Usuario.Email }}</h3>
                </v-card-subtitle>
                <v-divider color="#B2DFE1"></v-divider>
                <v-card-subtitle>
                  <h3>Idade: {{ Usuario.Idade }}</h3>
                </v-card-subtitle>
                <v-divider color="#B2DFE1"></v-divider>
                <v-card-subtitle>
                  <h3>Gênero: {{ Usuario.Genero }}</h3>
                </v-card-subtitle>
                <v-divider color="#B2DFE1"></v-divider>
              </v-col>
              <v-col cols="3">
                <v-divider color="#B2DFE1"></v-divider>
                <v-card-subtitle>
                  <h3>Peso: {{ Usuario.Peso }}</h3>
                </v-card-subtitle>
                <v-divider color="#B2DFE1"></v-divider>
                <v-card-subtitle>
                  <h3>Altura: {{ Usuario.Altura }}</h3>
                </v-card-subtitle>
                <v-divider color="#B2DFE1"></v-divider>
              </v-col>
              <v-col cols="2"></v-col>
              <v-col cols="2">
                <v-btn color="#4DC3C8" @click="Editarperfil"
                  >Editar Conta</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn color="#B2DFE1" @click="Desconectar"
                  >Desconectar Conta</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-divider color="#4DC3C8"></v-divider>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </div>
  </v-container>
</template>


<script>
import Btncard from "@/components/btncard.vue";
export default {
  data() {
    return {
      Comentario: "",
      Campotitulo: "",
      formcard: false,
      saibamais: false,
      Cardapios: [
        {
          id: 1,
          titulo: "morte a dieta",
        },
      ],
      Usuario: {
        Nome: "Jorge Luis Zanela",
        Email: "jorge.zanela19@gmail.com",
        Idade: 18,
        Genero: "Masculino",
        Peso: 82.4,
        Altura: 177,
      },
      rules: {
        required: (value) => !!value || "obrigatório",
        counter: (value) => value.length <= 20 || "Max 20 caracteres",
        refeicoescounter: (Number) =>
          value.length <= 5 || "Maximo de 5 refeições",
      },
    };
  },
  methods: {
    Editarperfil() {
      this.$router.push({ name: "Cadastro" });
    },
    Desconectar() {
      this.$router.push({ name: "Login" });
    },
    entrarCard() {
      this.$router.push({ name: "Cardapio" });
    },
    FuncAddCardapio() {
      if (this.Campotitulo) {
        this.Cardapios.push({
          titulo: this.Campotitulo,
        });
      }
      this.Campotitulo = "";
      this.Comentario = "";
    },
  },
  components: { Btncard },
};
</script>

<style scoped>
.cardapios {
  margin-top: 2rem;
}
.formcardapio {
  margin-top: 2rem;
}
.body {
  font-family: Helvetica, sans-serif;
  padding: 0;
  text-align: center;
}
.bar {
  margin-bottom: 1rem;
  background: #4dc3c8;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
img {
  max-height: 18rem;
  max-width: 15rem;
  border: 3px solid #4dc3c8;
  border-radius: 18px;
}
.alunos {
  padding: 0 3px;
  border-radius: 18px;
}
.saiba {
  margin-top: 2rem;
}
.icondevs {
  min-width: 3rem;
  min-height: 2rem;
}
</style>