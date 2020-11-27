<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><v-list-item-avatar>
          <v-icon class="purple lighten-1" dark>
            mdi-data-matrix-scan
          </v-icon> </v-list-item-avatar
        >Qr Tools</v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({ drawer: null }),
  methods: {
    ...mapActions(["ActIntialiceListQr"]),
  },
  created() {
    this.ActIntialiceListQr();
  },
};
</script>
