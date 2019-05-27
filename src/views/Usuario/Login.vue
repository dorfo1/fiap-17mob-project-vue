<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onLogin">
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
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn block type="submit">Login</v-btn>
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
      senha: ""
    };
  },
  computed: {
    usuario() {
      return this.$store.getters.usuario;
    }
  },
  watch: {
    usuario(value) {
      console.log("passou");
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onLogin() {
      this.$store.dispatch("logarUsuario", {
        email: this.email,
        senha: this.senha
      });
    }
  }
};
</script>
