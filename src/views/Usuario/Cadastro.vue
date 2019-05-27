<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onCadastrar">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                    <v-text-field
                      name="senha"
                      label="Senha"
                      id="senha"
                      v-model="senha"
                      type="password"
                      required
                    ></v-text-field>
                    <v-text-field
                      name="confirmarSenha"
                      label="Confimar senha"
                      id="confirmarSenha"
                      v-model="confirmarSenha"
                      type="password"
                      required
                      :rules="[compararSenhas]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn block type="submit">Cadastre-se</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      senha: "",
      confirmarSenha: ""
    };
  },
  computed: {
    compararSenhas() {
      return this.senha !== this.confirmarSenha ? "Senhas são diferentes" : "";
    },
    usuario() {
      return this.$store.getters.usuario;
    }
  },
  watch: {
    usuario(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onCadastrar() {
      this.$store.dispatch("cadastrarUsuario", {
        email: this.email,
        senha: this.senha
      });
    }
  }
};
</script>
