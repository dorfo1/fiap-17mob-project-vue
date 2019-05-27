<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile v-for="item in menuItens" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="drawer= !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Pwa-APP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItens" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view/>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    menuItens() {
      let menuItens = [
        { icon: "face", title: "Login", link: "/login" },
        { icon: "lock_open", title: "Cadastro", link: "/cadastro" }
      ];
      if (this.usuarioAutenticado) {
        menuItens = [
          { icon: "shop", title: "Home", link: "/" },
          { icon: "person", title: "Perfil", link: "/perfil" },
          { icon: "place", title: "Endereço", link: "/endereco" },
          { icon: "lock_open", title: "Logout" }
        ];
      }
      return menuItens;
    },
    usuarioAutenticado() {
      return (
        this.$store.getters.usuario !== null &&
        this.$store.getters.usuario !== undefined
      );
    }
  }
};
</script>
