<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list shaped>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group v-model="selectedItem" color="purple">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="$router.push({ path: item.path })"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
  data: () => ({
    drawer: null,
    items: [
      { text: "QR Scan", icon: "mdi-qrcode-scan", path: "/" },
      { text: "QR Generator", icon: "mdi-qrcode-edit", path: "/generator" },
      { text: "About", icon: "mdi-information-outline", path: "/about" },
    ],
  }),
  computed: {
    selectedItem() {
      const path = window.location.pathname;
      return this.items.findIndex((item) => item.path === path);
    },
  },
  methods: {
    ...mapActions(["ActIntialiceListQr","ActIntialiceListQrCreate"]),
  },
  created() {
    this.ActIntialiceListQr();
    this.ActIntialiceListQrCreate();
  },
};
</script>
