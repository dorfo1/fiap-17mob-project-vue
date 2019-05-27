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
                      name="cep"
                      label="Digite seu CEP"
                      id="cep"
                      v-model="cep"
                      type="number"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-spacer></v-spacer>
                    <v-btn primary type="submit" block>Buscar</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div>
              <div class="headline">Informações</div>
            </div>
          </v-card-title>
          <v-card-text>
            <p>Rua: {{this.endereco.logradouro}}</p>
            <p>CEP: {{this.endereco.cep}}</p>
            <p>Bairro: {{this.endereco.bairro}}</p>
            <p>Complento: {{this.endereco.complemento}}</p>
            <p>Cidade: {{this.endereco.cidade}}</p>
            <p>Estado: {{this.endereco.estado}}</p>
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
      endereco: {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: ""
      }
    };
  }
};
</script>


                   
                   
                     
           
           
