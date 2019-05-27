<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onBuscarCEP">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="github"
                      label="Digite seu usuario do GitHub"
                      id="github"
                      v-model="github"
                      type="text"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" block>Buscar</v-btn>
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
export default {};
</script>
